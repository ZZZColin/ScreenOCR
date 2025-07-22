function VBA_FORMULA_HIDDEN_SECTIONS(VDict) {
    // VBA will ensure there is a specific key named "Dependent ID" in IFN
    // And the value of this key is a list of dependent IDs.
    try {
        var specialKey = "Dependent ID";
        var specialKeyCount = 0;

        if (!VDict[specialKey]) {
            specialKeyCount = 0;
        } else {
            var specialKeyValue = VDict[specialKey];
            if (Array.isArray(specialKeyValue)) {
                specialKeyCount = specialKeyValue.length;
            } else if (specialKeyValue === null || specialKeyValue === "") {
                specialKeyCount = 0;
            } else {
                specialKeyCount = 1;
            }
        }
        
        var result = [];
        // VBA will ensure the total # of dependent IDs is 15
        // The dependent IDs are numbered from 1 to 15， like "Dependent_1", the second is "Dependent_2", and so on.
        // And the dependent sections are named "Dependent_1", "Dependent_2", ..., "Dependent_15" as well.
        for (let i = specialKeyCount + 1; i <= 15; i++) {
            result.push("Dependent_" + i);
        }

        // This function will return a list of sections that are need to be hidden.
        return result;
    } catch (error) {
        // console.error("Error in VBA_FORMULA_HIDDEN_SECTIONS:", error);
        console.log('Error in VBA_FORMULA_HIDDEN_SECTIONS: ' + error.message);
        return [];
    }
}

function _VBA_formatDateByPattern(date, pattern) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        console.log('Invalid date: ' + date);
        return null;
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    const replacements = {
        'DD': String(day).padStart(2, '0'), //make sure day is always two digits
        'D': String(day),
        'MM': String(month).padStart(2, '0'),//make sure month is always two digits
        'M': String(month),
        'YYYY': String(year),
        'YY': String(year).slice(-2),
    };

    //// -------------------------------------------------------------------------------------------------------------------
    //// Start ---- Fernando updated on 07/21/2025 to support more whole date formats
    // Common date formats for whole date
    replacements['MM/DD/YYYY'] = `${replacements.MM}/${replacements.DD}/${replacements.YYYY}`;
    replacements['DD/MM/YYYY'] = `${replacements.DD}/${replacements.MM}/${replacements.YYYY}`;
    replacements['YYYY-MM-DD'] = `${replacements.YYYY}-${replacements.MM}-${replacements.DD}`;

    // if the pattern is a common date format, return it directly
    if (replacements.hasOwnProperty(pattern)) {
        return replacements[pattern];
    }
    //// End ----- Update on 07/21/2025 to support more date formats
    //// ------------------------------------------------------------------------------------------------------------------

    // Otherwise, replace the pattern with the replacements
    return pattern.replace(/YYYY|YY|MM|M|DD|D/g, match => replacements[match]);
}


function _VBA_filterStringByFormat(input, format) {
    if (typeof input !== 'string' && typeof input !== 'number') {
        // throw new Error('Input must be a string or number');
        console.log('Input must be a string or number: ' + input);
        return null;
    }
  
    const str = String(input); // 强制转为字符串
  
    switch (format) {
        case 'Keep Numbers Only':
            return str.replace(/[^0-9]/g, '');
        case 'Keep Letters Only':
            return str.replace(/[^a-zA-Z]/g, '');
        case 'Keep Letters & Numbers & Spaces':
            return str.replace(/[^a-zA-Z0-9 ]/g, '');
        default:
            // throw new Error('Unsupported format type');
            console.log('Unsupported format type: ' + format);
            return null;
    }
}

function _VBA_sliceByPosition(input, start, end) {
    if (typeof input !== 'string' && typeof input !== 'number') {
        // throw new Error('Input must be a string or number');
        console.log('Input must be a string or number: ' + input);
        return null;
    }
  
    const str = String(input); // 统一转为字符串
    return str.slice(start-1, end);
}

function _VBA_formatStringByCase(input, format) {
    if (typeof input !== 'string' || input.length === 0) {
        // throw new Error('Input must be a string and not empty');
        console.log('Input must be a string and not empty: ' + input);
        return null;
    }

    switch (format) {
        case 'All Capitalize':
            return input.toUpperCase();
        case 'Initial Capitalize':
            return input[0].toUpperCase() + input.slice(1).toLowerCase();
        case 'All Lowercase':
            return input.toLowerCase();
        default:
            // throw new Error('Unsupported format type');
            console.log('Unsupported format type: ' + format);
            return null;
    }
}

function _VBA_getToday() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
}

function _VBA_isDateOrDateString(value) {
    if (value instanceof Date && !isNaN(value.getTime())) {
        return true;
    }
  
    if (typeof value === 'string') {
        //edit on 6/18/2025, previous codes could not strictly validate date strings
        //previous codes: const parsed = new Date(value);
        //previous codes: return !isNaN(parsed.getTime());

        const regex = /^\s*(\d{1,2})\/(\d{1,2})\/(\d{4})\s*$/;
        const match = value.match(regex);

        if (match) {
            return true;
        }
    }
  
    return false;
}

function _VBA_dateAdd(date, amount, unit) {
    const newDate = new Date(date); // 创建日期对象，以免修改原始日期

    switch(unit) {
        case 'Count Years':
            newDate.setFullYear(newDate.getFullYear() + amount);
            break;
        case 'Count Months':
            newDate.setMonth(newDate.getMonth() + amount);
            break;
        case 'Count Days':
            newDate.setDate(newDate.getDate() + amount);
            break;
        default:
            // throw new Error('Invalid unit. Please use "Count Years", "Count Months" or "Count Days".');
            console.log('Invalid unit. Please use "Count Years", "Count Months" or "Count Days": ' + unit);
            return null;
    }

    return newDate;
}

function _VBA_dateGap(date1, date2, unit) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    if (isNaN(d1) || isNaN(d2)) {
        // throw new Error("无效的日期输入");
        console.log('Invalid date input: ' + date1 + ', ' + date2);
        return null;
    }

    switch (unit) {
        case 'Count Years':
            return d2.getFullYear() - d1.getFullYear();

        case 'Count Months':
            return (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());

        case 'Count Days':
            const msPerDay = 24 * 60 * 60 * 1000;
            return Math.floor((d2 - d1) / msPerDay);

        default:
            // throw new Error("不支持的单位，请使用 'Count Years', 'Count Months' 或 'Count Days'");
            console.log('Unsupported unit, please use "Count Years", "Count Months" or "Count Days": ' + unit);
            return null;
    }
}

function _VBA_dateConvert(date, format) {
    const d = new Date(date);   // 创建日期对象，以免修改原始日期
    if (isNaN(d)) {
        // throw new Error("无效的日期输入");
        console.log('Invalid date input: ' + date);
        return null;
    }

    switch (format) {
        case '1st Day of Current Month':
            return new Date(d.getFullYear(), d.getMonth(), 1);
        case 'Last Day of Current Month':
            return new Date(d.getFullYear(), d.getMonth() + 1, 0);
    }
}

function _VBA_mapParse(mapping, VDict) {
    var result = [];

    // 默认值
    if (mapping.length === 1) {
        for (let index = 1; index < mapping[0].length; index++) {
            result.push(mapping[0][index]);
        }
    } else {
        var ref = [];

        for (let index = 1; index < mapping.length; index++) {
            var field = mapping[index][0];

            if (field !== "Alert/Reminder") {
                if (field.startsWith("\u200B")) {field = field.substring(1);}
                if (field.endsWith("\u200B")) {field = field.slice(0, -1);}
                var target = VDict[field];
                ref.push(target);
            }
        }

        for (let index = 1; index < mapping[0].length; index++) {
            var match = true;
            var alertType = null;
            var refIndex = 0;
            var ignoreCount = 0;

            for (let innerIndex = 1; innerIndex < mapping.length; innerIndex++) {
                if (mapping[innerIndex][0] === "Alert/Reminder") {
                    alertType = mapping[innerIndex][index];
                    continue;
                }

                if (mapping[innerIndex][index] === "<Empty>") {
                    if (ref[refIndex] !== "" && ref[refIndex] !== null) {
                        match = false;
                        break;
                    }
                } else if (mapping[innerIndex][index] === "<Not Empty>") {
                    if (ref[refIndex] === "" || ref[refIndex] === null) {
                        match = false;
                        break;
                    }
                } else if (mapping[innerIndex][index] === "<Ignore>") {
                    ignoreCount++;
                    refIndex++;
                    continue;
                } else {
                    if (mapping[innerIndex][index] !== ref[refIndex]) {
                        match = false;
                        break;
                    }
                }
                refIndex++;
            }

            // 如果所有需要匹配的值都被忽略了
            if (ignoreCount === ref.length) {
                match = false;
            }

            if (match === true) {
                if (alertType !== null) {
                    if (alertType === "Alert") {
                        result.push("ALERT: " + mapping[0][index]);
                    } else if (alertType === "Reminder") {
                        result.push("REMINDER: " + mapping[0][index]);
                    }
                } else {
                    if (String(mapping[0][index]).startsWith("\u200B") || String(mapping[0][index]).endsWith("\u200B")) {
                        result.push(VDict[mapping[0][index].replace(/\u200B/g, '')]);
                    } else if (mapping[0][index] === "<Ignore>") {
                        continue;
                    } else {
                        result.push(mapping[0][index]);
                    }
                }
                break;
            }
        }
    }
    if (result.length === 1) {
        return result[0];
    } else if (result.length === 0) {
        return null;
    } else {
        return result;
    }
}

function _VBA_calculationParse(calculation, VDict) {
    const operators = {
        '>': (a, b) => a > b,
        '<': (a, b) => a < b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
        '=': (a, b) => a === b,
        '<>': (a, b) => a !== b,
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const dateOperators = {
        '>': (a, b) => new Date(a) > new Date(b),
        '<': (a, b) => new Date(a) < new Date(b),
        '>=': (a, b) => new Date(a) >= new Date(b),
        '<=': (a, b) => new Date(a) <= new Date(b),
        '=': (a, b) => new Date(a).getTime() === new Date(b).getTime(),
        '<>': (a, b) => new Date(a).getTime() !== new Date(b).getTime(),
    };

    for (let index = 1; index < calculation[0].length; index++) {
        var returnValue = calculation[0][index];
        var calculationType = null;
        var alertType = null;

        var leftV = null;
        var operator = null;
        var rightV = null;
        var benchmark = null;

        var leftVOccupied = false;
        var ifInvalid = false;

        loop: for (let innerIndex = 1; innerIndex < calculation.length; innerIndex++) {
            var field = calculation[innerIndex][0];
            
            switch (field) {
                case "Condition":
                    operator = calculation[innerIndex][index];
                    if (operator === "1st Day of Current Month" || operator === "Last Day of Current Month"){
                        leftV = _VBA_dateConvert(leftV, operator);
                    }
                    break;
                case "Benchmark":
                    benchmark = calculation[innerIndex][index];
                    if (benchmark === "<Today>"){benchmark = _VBA_getToday();}
                    if (leftVOccupied === false) {
                        leftV = benchmark;
                        leftVOccupied = true;
                    } else {
                        rightV = benchmark;
                        if ((leftV === null || leftV === "") || (rightV === null || rightV === "")) {
                            ifInvalid = true;
                            break loop;
                        }
                        switch (calculationType) {
                            case "Number":
                            case "Text":
                                leftV = operators[operator]?.(leftV, rightV);
                                break;
                            case "Date":
                                leftV = dateOperators[operator]?.(leftV, rightV);
                                break;
                            case "Date - Count Years":
                            case "Date - Count Months":
                            case "Date - Count Days":
                                if (_VBA_isDateOrDateString(leftV) && _VBA_isDateOrDateString(rightV)) {
                                    if (operator === "-") {
                                        leftV = Math.abs(_VBA_dateGap(leftV, rightV, calculationType.split(" - ")[1]));
                                    } else {
                                        leftV = dateOperators[operator]?.(leftV, rightV);
                                    }
                                } else if (_VBA_isDateOrDateString(leftV) && _VBA_isDateOrDateString(rightV) === false) {
                                    if (operator === "-") {rightV = rightV * -1;}
                                    leftV = _VBA_dateAdd(leftV, rightV, calculationType.split(" - ")[1]);
                                } else if (_VBA_isDateOrDateString(leftV) === false && _VBA_isDateOrDateString(rightV)) {
                                    if (operator === "-") {leftV = leftV * -1;}
                                    leftV = _VBA_dateAdd(rightV, leftV, calculationType.split(" - ")[1]);
                                } else {
                                    leftV = operators[operator]?.(leftV, rightV);
                                }
                                break;
                            case "Length":
                                if (typeof leftV === "string" && typeof rightV === "string") {
                                    leftV = operators[operator]?.(leftV.length, rightV.length);
                                } else if (typeof leftV === "string" && typeof rightV !== "string") {
                                    leftV = operators[operator]?.(leftV.length, rightV);
                                } else if (typeof leftV !== "string" && typeof rightV === "string") {
                                    leftV = operators[operator]?.(rightV.length, leftV);
                                } else {
                                    leftV = operators[operator]?.(leftV, rightV);
                                }
                        }
                    }
                    break;
                case "Calculation Type":
                    calculationType = calculation[innerIndex][index];
                    break;
                case "Alert/Reminder":
                    alertType = calculation[innerIndex][index];
                    break;
                default:
                    if (field.startsWith("\u200B")) {field = field.substring(1)}
                    if (field.endsWith("\u200B")) {field = field.slice(0, -1)}
                    if (leftVOccupied === false) {
                        leftV = VDict[field];
                        leftVOccupied = true;
                    } else {
                        rightV = VDict[field];
                        if ((leftV === null || leftV === "") || (rightV === null || rightV === "")) {
                            ifInvalid = true;
                            break loop;
                        }
                        switch (calculationType) {
                            case "Number":
                            case "Text":
                                leftV = operators[operator]?.(leftV, rightV);
                                break;
                            case "Date":
                                leftV = dateOperators[operator]?.(leftV, rightV);
                                break;
                            case "Date - Count Years":
                            case "Date - Count Months":
                            case "Date - Count Days":
                                if (_VBA_isDateOrDateString(leftV) && _VBA_isDateOrDateString(rightV)) {
                                    if (operator === "-") {
                                        leftV = Math.abs(_VBA_dateGap(leftV, rightV, calculationType.split(" - ")[1]));
                                    } else {
                                        leftV = dateOperators[operator]?.(leftV, rightV);
                                    }
                                } else if (_VBA_isDateOrDateString(leftV) && _VBA_isDateOrDateString(rightV) === false) {
                                    if (operator === "-") {rightV = rightV * -1;}
                                    leftV = _VBA_dateAdd(leftV, rightV, calculationType.split(" - ")[1]);
                                } else if (_VBA_isDateOrDateString(leftV) === false && _VBA_isDateOrDateString(rightV)) {
                                    if (operator === "-") {leftV = leftV * -1;}
                                    leftV = _VBA_dateAdd(rightV, leftV, calculationType.split(" - ")[1]);
                                } else {
                                    leftV = operators[operator]?.(leftV, rightV);
                                }
                                break;
                            case "Length":
                                if (typeof leftV === "string" && typeof rightV === "string") {
                                    leftV = operators[operator]?.(leftV.length, rightV.length);
                                } else if (typeof leftV === "string" && typeof rightV !== "string") {
                                    leftV = operators[operator]?.(leftV.length, rightV);
                                } else if (typeof leftV !== "string" && typeof rightV === "string") {
                                    leftV = operators[operator]?.(rightV.length, leftV);
                                } else {
                                    leftV = operators[operator]?.(leftV, rightV);
                                }
                        }
                    }
            }
        }

        if (ifInvalid === true) {
            return null;
        }

        if (typeof leftV === "boolean") {
            if (leftV === true) {
                if (alertType !== null) {
                    if (alertType === "Alert") {
                        return "ALERT: " + returnValue;
                    } else if (alertType === "Reminder") {
                        return "REMINDER: " + returnValue;
                    }
                } else {
                    return returnValue;
                }
            } else {
                // edited on 6/17/2025, reason: in previous codes, program will exit (return null)
                //                              if any conditions not meet, therefore, 
                //                              miss the target
                // previous codes: return null;
                if (index === calculation[0].length - 1) {
                    return null;
                }
            }
        } else if (leftV !== null) {
            if (alertType !== null) {
                if (alertType === "Alert") {
                    return "ALERT: " + leftV;
                } else if (alertType === "Reminder") {
                    return "REMINDER: " + leftV;
                }
            } else {
                return leftV;
            }
        } else {
            return null;
        }
    }
}

function _VBA_locateINEE(IFN, IFNDict, EE) {
    // 从IFNDict中取到的section name和sub section name
    // 都会包含Section: 或Subsection: 这样的前缀，需要去掉
    var sectionName = IFNDict[IFN]['Section Name'];
    var subsectionName = IFNDict[IFN]['Subsection Name'];
    var nameInEN = IFNDict[IFN]['Name in EN'];

    if (subsectionName) {
        if (sectionName in EE) {
            if (subsectionName in EE[sectionName]) {
                if (nameInEN in EE[sectionName][subsectionName]) {
                    if (_VBA_isDateOrDateString(EE[sectionName][subsectionName][nameInEN])) {
                        return new Date(EE[sectionName][subsectionName][nameInEN]);
                    } else {
                        return EE[sectionName][subsectionName][nameInEN];
                    }
                }
                else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    } else {
        if (sectionName in EE) {
            if (nameInEN in EE[sectionName]) {
                if (_VBA_isDateOrDateString(EE[sectionName][nameInEN])) {
                    return new Date(EE[sectionName][nameInEN]);
                } else {
                    return EE[sectionName][nameInEN];
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}

function VBA_FORMULA_IFN(IFN, IFNDict, EE, VDict) {
    try {
        if (IFN.startsWith("\u200B")) {IFN = IFN.substring(1);}

        var filter = IFNDict[IFN]['Filter'];

        if (Object.keys(filter).length === 0) {
            return _VBA_locateINEE(IFN, IFNDict, EE);
        } else {
            var matchIndex = [];
            var fieldIndex = 0;

            for (let field in filter) {
                var originKeyWordArr = filter[field];
                if (!Array.isArray(originKeyWordArr)) {originKeyWordArr = [originKeyWordArr];}

                if (field.startsWith("\u200B")) {field = field.substring(1);}
                var options = _VBA_locateINEE(field, IFNDict, EE);
                if (options === null) {
                    return null;
                }
                if (!Array.isArray(options)) {options = [options];}
                
                var keyWordArr = [];

                for (let keyWord of originKeyWordArr) {
                    if (keyWord.startsWith("\u200B")) {
                        keyWord = keyWord.substring(1);
                        if (VDict[keyWord] === null) {
                            continue;
                        }
                        if (Array.isArray(VDict[keyWord])) {
                            for (let v of VDict[keyWord]) {
                                keyWordArr.push(v);
                            }
                        } else {
                            keyWordArr.push(VDict[keyWord]);
                        }
                    } else if (keyWord === "<Value>") {
                        if (Array.isArray(VDict[field])) {
                            for (let v of VDict[field]) {
                                keyWordArr.push(v);
                            }
                        } else {
                            keyWordArr.push(VDict[field]);
                        }
                    } else if (keyWord === "<Empty>") {
                        keyWordArr.push("");
                    } else {
                        keyWordArr.push(keyWord);
                    }
                }

                let currentMatchIndex = [];
                for (let index = 0; index < options.length; index++) {
                    let option = options[index];
                    if (keyWordArr.includes(option) || (keyWordArr.includes("<Not Empty>") && (option !== "" && option !== null))) {
                        if (fieldIndex === 0) {
                            matchIndex.push(index);
                        }
                        currentMatchIndex.push(index);
                    }
                }
                if (currentMatchIndex.length === 0) {
                    return null;
                } else {
                    matchIndex = currentMatchIndex.filter(item => (new Set(matchIndex)).has(item));
                }
                fieldIndex++;
            }

            var result = [];
            var retrieveField = _VBA_locateINEE(IFN, IFNDict, EE);

            if (matchIndex.length === 0) {
                return null;
            }

            for (let index of matchIndex) {
                if (Array.isArray(retrieveField)) {
                    if (index < retrieveField.length) {
                        if (_VBA_isDateOrDateString(retrieveField[index])) {
                            result.push(new Date(retrieveField[index]));
                        } else {
                            result.push(retrieveField[index]);
                        }
                    }
                } else {
                    if (index === 0) {
                        if (_VBA_isDateOrDateString(retrieveField)) {
                            retrieveField = new Date(retrieveField);
                            result.push(retrieveField);
                        } else {
                            result.push(retrieveField);
                        }
                    } else {
                        return null;
                    }
                }
            }

            // Dependent ID特殊处理
            if (IFN.startsWith("Dependent ID") && IFN !== "Dependent ID") {
                // 这种语法只会替换掉第一个匹配项！
                var dependentID_Index = parseInt(IFN.replace("Dependent ID_", "")) - 1;
                if (result.length > dependentID_Index) {
                    return result[dependentID_Index];
                } else {
                    return null;
                }
            }

            if (result.length === 1) {
                return result[0];
            } else if (result.length === 0) {
                return null;
            } else {
                // edit on 6/19/2025, reason: previous codes could not remove duplicate values
                // previous codes: return result;
                return [...new Set(result)];
            }
        }
    } catch (error) {
        // console.error("Error in VBA_FORMULA_IFN:", error);
        console.log('Error in VBA_FORMULA_IFN: ' + error.message);
        return null;
    }
}

function VBA_FORMULA_OFN(OFN, OFNDict, VDict) {
    // default value
    // ↓
    // mapping
    // ↓
    // calculation
    // ↓
    // format
    
    // <Empty> <Ignore> <Not Empty>
    try {
        var source = OFNDict[OFN]["Source Key in IFN"];
        var mapping = OFNDict[OFN]["Mapping"];
        var calculation = OFNDict[OFN]["Calculation"];
        var format = OFNDict[OFN]["Format"];

        if (mapping.length === 0 && calculation.length === 0 && Object.keys(format).length === 0) {
            // 直接从其对应的IFN取值
            return VDict[source];
        } else {
            if (!VDict[source]) {
                // 如果VDict中没有source对应的值，不进行赋值
            } else {
                var result = VDict[source];
            }

            if (mapping.length !== 0) {
                result = _VBA_mapParse(mapping, VDict);
            }

            if (calculation.length !== 0) {
                result = _VBA_calculationParse(calculation, VDict);
            }

            if (Object.keys(format).length !== 0) {
                // _VBA_formatDateByPattern
                // _VBA_filterStringByFormat
                // _VBA_sliceByPosition
                // _VBA_formatStringByCase
                
                for (let innerFormat in format) {
                    switch (innerFormat) {
                        case "Date Format":
                            result = _VBA_formatDateByPattern(result, format[innerFormat]);
                            break;
                        case "Text Clean":
                            result = _VBA_filterStringByFormat(result, format[innerFormat]);
                            break;
                        case "Text Split":
                            var start = parseInt(format[innerFormat][0]);
                            var end = parseInt(format[innerFormat][1]);
                            result = _VBA_sliceByPosition(result, start, end);
                            break;
                        case "Text Cap":
                            result = _VBA_formatStringByCase(result, format[innerFormat]);
                    }
                }
            }

            return result;
        }
    } catch (error) {
        // console.error("Error in VBA_FORMULA_OFN:", error);
        console.log('Error in VBA_FORMULA_OFN: ' + error.message);
        return null;
    }
}

function VBA_FORMULA_ALERT(OFN, AlertDict, VDict) {
    try {
        //'Alert: this is error; Reminder: this is reminder'
        if (!AlertDict[OFN]) {
            return null;
        }
        var mapping = AlertDict[OFN]["Mapping"];
        var calculation = AlertDict[OFN]["Calculation"];

        if (mapping.length === 0 && calculation.length === 0) {
            return null;
        } else {
            var wording = null;

            if (mapping.length !== 0) {
                for (let index = 0; index < mapping.length; index++) {
                    var innerMapping = mapping[index];
                    var innerWording = _VBA_mapParse(innerMapping, VDict);

                    if (innerWording !== null) {
                        if (wording === null) {
                            wording = innerWording;
                        } else {
                            wording = wording + ";" + innerWording;
                        }
                    }
                }
            }
            
            if (calculation.length !== 0) {
                for (let index = 0; index < calculation.length; index++) {
                    var innerCalculation = calculation[index];
                    var innerWording = _VBA_calculationParse(innerCalculation, VDict);

                    if (innerWording !== null) {
                        if (wording === null) {
                            wording = innerWording;
                        } else {
                            wording = wording + ";" + innerWording;
                        }
                    }
                }
            }

            return wording;
        }
    } catch (error) {
        // console.error("Error in VBA_FORMULA_ALERT:", error);
        console.log('Error in VBA_FORMULA_ALERT: ' + error.message);
        return null;
    }
}