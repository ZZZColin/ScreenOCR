const VBA_UI = [
{
tabName:"eNroll Wizard",
sections:[
{
sectionName:"Group Administrator New Employee Enrollment",
fields:[
[
{
label:"Group Name",
name:"Group Name",
type:"select",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
options:[
{
label:"Group 1",
value:"Group 1"}
,
{
label:"Group 2",
value:"Group 2"}
]
}
,
{
label:"Carrier",
name:"Carrier",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Type",
name:"Plan Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Medical",
name:"Enroll Start Date - Medical",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Dental",
name:"Enroll Start Date - Dental",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Life",
name:"Enroll Start Date - Life",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Vision",
name:"Enroll Start Date - Vision",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Group Life",
name:"Enroll Start Date - Group Life",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Health Savings Account",
name:"Enroll Start Date - Health Savings Account",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE First Name",
name:"EE First Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Middle",
name:"EE Middle",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Last Name",
name:"EE Last Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Suffix",
name:"EE Suffix",
type:"select",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE SSN",
name:"EE SSN",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE SSN",
name:"EE SSN",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE SSN",
name:"EE SSN",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE DOB",
name:"EE DOB",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Gender",
name:"EE Gender",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Gender",
name:"EE Gender",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"EE Address 1 - Mailing",
name:"EE Address 1 - Mailing",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Address 1 - Home",
name:"EE Address 1 - Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Address 1 - Secondary Home",
name:"EE Address 1 - Secondary Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Address 1 - Vacation Home",
name:"EE Address 1 - Vacation Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Address 2 - Mailing",
name:"EE Address 2 - Mailing",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Address 2 - Home",
name:"EE Address 2 - Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Address 2 - Secondary Home",
name:"EE Address 2 - Secondary Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Address 2 - Vacation Home",
name:"EE Address 2 - Vacation Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Address Type",
name:"Address Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"EE City - Mailing",
name:"EE City - Mailing",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE City - Home",
name:"EE City - Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE City - Secondary Home",
name:"EE City - Secondary Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE City - Vacation Home",
name:"EE City - Vacation Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE State - Mailing",
name:"EE State - Mailing",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE State - Home",
name:"EE State - Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE State - Secondary Home",
name:"EE State - Secondary Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE State - Vacation Home",
name:"EE State - Vacation Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Zip - Mailing",
name:"EE Zip - Mailing",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Zip - Home",
name:"EE Zip - Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Zip - Secondary Home",
name:"EE Zip - Secondary Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"EE Zip - Vacation Home",
name:"EE Zip - Vacation Home",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Mobile Phone",
name:"Mobile Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Work Phone",
name:"Work Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Home Phone",
name:"Home Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Mobile Phone",
name:"Mobile Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Work Phone",
name:"Work Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Home Phone",
name:"Home Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Mobile Phone",
name:"Mobile Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Work Phone",
name:"Work Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Home Phone",
name:"Home Phone",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Primary Email Type",
name:"Primary Email Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Email",
name:"Personal Email",
type:"email",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Work Email",
name:"Work Email",
type:"email",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Account #:",
name:"Account #:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Requested Effective Date:*",
name:"Requested Effective Date:*",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
null,
null,
null,
{
label:"Employee First Name:*",
name:"Employee First Name:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Middle Initial:",
name:"Employee Middle Initial:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Last Name:*",
name:"Employee Last Name:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Suffix",
name:"Employee Suffix",
type:"select",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"SSN/TIN 1:",
name:"SSN/TIN 1:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"SSN/TIN 2:",
name:"SSN/TIN 2:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"SSN/TIN 3:",
name:"SSN/TIN 3:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Date of Birth:*",
name:"Date of Birth:*",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Gender  Male",
name:"Gender  Male",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Gender  Female",
name:"Gender  Female",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Medicare HICN:",
name:"Medicare HICN:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Address1:",
name:"Address1:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
{
label:"Address2:",
name:"Address2:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Address:*",
name:"Address:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"City:*",
name:"City:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
{
label:"State:*",
name:"State:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
{
label:"Zip Code:*",
name:"Zip Code:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
{
label:"Daytime Telephone Number 1:",
name:"Daytime Telephone Number 1:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
{
label:"Daytime Telephone Number 2:",
name:"Daytime Telephone Number 2:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
{
label:"Daytime Telephone Number 3:",
name:"Daytime Telephone Number 3:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
{
label:"Email Address:",
name:"Email Address:",
type:"email",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null]
]
}
]
}
,
{
tabName:"Coverage Info",
sections:[
{
sectionName:"Waiver of Coverage and Qualifying Event",
fields:[
[
{
label:"Enroll Start Date - Medical",
name:"Enroll Start Date - Medical",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Dental",
name:"Enroll Start Date - Dental",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Life",
name:"Enroll Start Date - Life",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Vision",
name:"Enroll Start Date - Vision",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Enroll Start Date - Medical",
name:"Enroll Start Date - Medical",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Dental",
name:"Enroll Start Date - Dental",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Vision",
name:"Enroll Start Date - Vision",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Enroll Start Date - Life",
name:"Enroll Start Date - Life",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Supplemental Life Plan Name",
name:"Supplemental Life Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"STD Plan Name",
name:"STD Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"LTD Plan Name",
name:"LTD Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
null,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Reason",
name:"Event Reason",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
null]
,
[
{
label:"Do you wish to decline any coverage sponsored by your employer? - Yes",
name:"Do you wish to decline any coverage sponsored by your employer? - Yes",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
{
label:"Do you wish to decline any coverage sponsored by your employer? - No",
name:"Do you wish to decline any coverage sponsored by your employer? - No",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Medical",
name:"Select all coverages you wish to decline:* Medical",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Dental",
name:"Select all coverages you wish to decline:* Dental",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Vision",
name:"Select all coverages you wish to decline:* Vision",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Basic Life / ADD",
name:"Select all coverages you wish to decline:* Basic Life / ADD",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Supplemental Life / ADD",
name:"Select all coverages you wish to decline:* Supplemental Life / ADD",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Dependent Life",
name:"Select all coverages you wish to decline:* Dependent Life",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Short Term Disability",
name:"Select all coverages you wish to decline:* Short Term Disability",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Select all coverages you wish to decline:* Long Term Disability",
name:"Select all coverages you wish to decline:* Long Term Disability",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for declining: (select all that apply)*  Other Group Medical Coverage",
name:"Reason for declining: (select all that apply)*  Other Group Medical Coverage",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for declining: (select all that apply)*  Other Group Dental Coverage",
name:"Reason for declining: (select all that apply)*  Other Group Dental Coverage",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for declining: (select all that apply)*  Other Group Vision Coverage",
name:"Reason for declining: (select all that apply)*  Other Group Vision Coverage",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for declining: (select all that apply)*   I have TennCare or Medicaid",
name:"Reason for declining: (select all that apply)*   I have TennCare or Medicaid",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for declining: (select all that apply)*    Other",
name:"Reason for declining: (select all that apply)*    Other",
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* New Hire",
name:"Reason for enrollment/change:* New Hire",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* Open Enrollment",
name:"Reason for enrollment/change:* Open Enrollment",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* New Dependent Child",
name:"Reason for enrollment/change:* New Dependent Child",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* Court Order",
name:"Reason for enrollment/change:* Court Order",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* Marriage",
name:"Reason for enrollment/change:* Marriage",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* Loss of Other Coverage",
name:"Reason for enrollment/change:* Loss of Other Coverage",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* Dental",
name:"Reason for enrollment/change:* Dental",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* Vision",
name:"Reason for enrollment/change:* Vision",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for enrollment/change:* Continuation Coverage Period Expired",
name:"Reason for enrollment/change:* Continuation Coverage Period Expired",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"New Dependent Child Event Date",
name:"New Dependent Child Event Date",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Court Order Event Date",
name:"Court Order Event Date",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Marriage Event Date",
name:"Marriage Event Date",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Loss of Other Coverage Event Date",
name:"Loss of Other Coverage Event Date",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Continuation Coverage Period Expired  Event Date",
name:"Continuation Coverage Period Expired  Event Date",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
]
}
,
{
tabName:"General Info",
sections:[
{
sectionName:"Employment Status",
fields:[
[
{
label:"Department",
name:"Department",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Division",
name:"Division",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Business Unit",
name:"Business Unit",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Pay Basis",
name:"Pay Basis",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Pay Basis",
name:"Pay Basis",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
{
label:"Hire Date",
name:"Hire Date",
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Hours Per Week",
name:"Hours Per Week",
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Job Title",
name:"Job Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null]
,
[
{
label:"Subgroup No:*",
name:"Subgroup No:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
{
label:"Department No:",
name:"Department No:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Paid Class:* Hourly",
name:"Employee Paid Class:* Hourly",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Paid Class:* Salary",
name:"Employee Paid Class:* Salary",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Paid Class:* Retiree",
name:"Employee Paid Class:* Retiree",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Paid Class:* Surviving Spouse",
name:"Employee Paid Class:* Surviving Spouse",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Paid Class:* COBRA",
name:"Employee Paid Class:* COBRA",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Hire Date:*",
name:"Hire Date:*",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Weekly Hours:*",
name:"Weekly Hours:*",
type:"number",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Job Title:",
name:"Job Title:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Payroll Number:",
name:"Payroll Number:",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Job Class:*  Non-Management",
name:"Employee Job Class:*  Non-Management",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Job Class:*  Management",
name:"Employee Job Class:*  Management",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Job Class:*  Exec/Officer/Owner",
name:"Employee Job Class:*  Exec/Officer/Owner",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Status:* Full-time",
name:"Employee Status:* Full-time",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Status:* Part-time",
name:"Employee Status:* Part-time",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Status:* Part-time to Full-time",
name:"Employee Status:* Part-time to Full-time",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Employee Status:* Rehire",
name:"Employee Status:* Rehire",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Reason:* Termination of Employment",
name:"COBRA Reason:* Termination of Employment",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Reason:* Involuntary Termination",
name:"COBRA Reason:* Involuntary Termination",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Reason:* Employee Eligible for Medicare",
name:"COBRA Reason:* Employee Eligible for Medicare",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Reason:* Reduction in Hours",
name:"COBRA Reason:* Reduction in Hours",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Reason:* Dependent Child No Longer Eligible",
name:"COBRA Reason:* Dependent Child No Longer Eligible",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Reason:* Divorce / Legal Separation",
name:"COBRA Reason:* Divorce / Legal Separation",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Reason:* Death of Employee",
name:"COBRA Reason:* Death of Employee",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"COBRA Event Date:*",
name:"COBRA Event Date:*",
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
]
}
,
{
tabName:"Insuarance Options and Add dependent",
sections:[
{
sectionName:"Coverage Details",
fields:[
[
{
label:"Medical Plan Name",
name:"Medical Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Carrier",
name:"Carrier",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Type",
name:"Plan Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Medical Coverage Type",
name:"Medical Coverage Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dental Plan Name",
name:"Dental Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Carrier",
name:"Carrier",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Type",
name:"Plan Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dental Coverage Type",
name:"Dental Coverage Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Vision Plan Name",
name:"Vision Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Life Plan Name",
name:"Life Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Group Life Plan Name",
name:"Group Life Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Health Savings Account Plan Name",
name:"Health Savings Account Plan Name",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Carrier",
name:"Carrier",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Type",
name:"Plan Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Vision Coverage Type",
name:"Vision Coverage Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Life Coverage Type",
name:"Life Coverage Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Group Life Coverage Type",
name:"Group Life Coverage Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Health Savings Account Coverage Type",
name:"Health Savings Account Coverage Type",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null]
,
[
{
label:"Medical Option:*",
name:"Medical Option:*",
type:"select",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
options:[
{
label:"001 - Test A",
value:"001 - Test A"}
,
{
label:"001 - Test B",
value:"001 - Test B"}
,
{
label:"001 - Test C",
value:"001 - Test C"}
,
{
label:"001 - Test A - 2",
value:"001 - Test A - 2"}
,
{
label:"001 - Test B - 2",
value:"001 - Test B - 2"}
,
{
label:"001 - Test C - 2",
value:"001 - Test C - 2"}
]
}
,
null,
null,
{
label:"Medical Coverage Type:*",
name:"Medical Coverage Type:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dental Option:*",
name:"Dental Option:*",
type:"select",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
{
label:"Dental Coverage Type:*",
name:"Dental Coverage Type:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Vision Option:*",
name:"Vision Option:*",
type:"select",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
null,
{
label:"Vision Coverage Type:*",
name:"Vision Coverage Type:*",
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
{
label:"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? Yes",
name:"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? Yes",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? No",
name:"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? No",
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_1",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Middle",
name:"Dep Middle_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_1",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_1",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_1",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_1",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_1",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_1",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_1",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_1",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_1",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_1",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_1",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_1",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_1",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_1",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_1",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_1",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_1",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_1",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_1",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_1",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_1",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_2",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_2",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_2",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_2",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_2",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_2",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_2",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_2",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_2",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_2",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_2",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_2",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_2",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_2",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_2",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_2",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_2",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_2",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_2",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_2",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_2",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_2",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_3",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_3",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_3",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_3",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_3",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_3",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_3",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_3",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_3",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_3",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_3",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_3",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_3",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_3",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_3",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_3",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_3",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_3",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_3",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_3",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_3",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_3",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_4",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_4",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_4",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_4",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_4",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_4",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_4",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_4",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_4",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_4",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_4",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_4",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_4",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_4",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_4",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_4",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_4",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_4",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_4",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_4",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_4",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_4",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_5",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_5",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_5",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_5",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_5",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_5",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_5",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_5",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_5",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_5",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_5",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_5",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_5",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_5",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_5",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_5",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_5",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_5",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_5",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_5",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_5",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_5",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_6",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_6",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_6",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_6",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_6",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_6",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_6",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_6",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_6",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_6",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_6",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_6",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_6",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_6",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_6",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_6",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_6",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_6",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_6",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_6",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_6",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_6",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_7",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_7",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_7",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_7",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_7",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_7",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_7",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_7",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_7",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_7",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_7",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_7",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_7",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_7",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_7",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_7",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_7",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_7",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_7",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_7",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_7",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_7",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_8",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_8",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_8",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_8",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_8",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_8",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_8",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_8",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_8",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_8",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_8",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_8",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_8",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_8",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_8",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_8",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_8",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_8",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_8",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_8",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_8",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_8",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_9",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_9",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_9",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_9",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_9",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_9",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_9",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_9",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_9",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_9",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_9",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_9",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_9",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_9",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_9",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_9",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_9",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_9",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_9",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_9",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_9",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_9",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_10",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_10",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_10",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_10",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_10",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_10",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_10",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_10",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_10",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_10",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_10",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_10",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_10",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_10",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_10",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_10",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_10",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_10",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_10",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_10",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_10",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_10",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_11",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_11",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_11",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_11",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_11",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_11",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_11",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_11",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_11",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_11",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_11",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_11",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_11",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_11",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_11",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_11",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_11",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_11",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_11",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_11",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_11",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_11",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_12",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_12",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_12",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_12",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_12",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_12",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_12",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_12",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_12",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_12",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_12",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_12",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_12",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_12",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_12",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_12",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_12",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_12",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_12",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_12",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_12",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_12",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_13",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_13",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_13",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_13",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_13",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_13",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_13",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_13",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_13",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_13",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_13",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_13",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_13",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_13",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_13",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_13",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_13",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_13",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_13",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_13",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_13",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_13",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_14",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_14",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_14",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_14",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_14",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_14",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_14",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_14",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_14",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_14",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_14",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_14",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_14",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_14",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_14",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_14",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_14",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_14",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_14",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_14",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_14",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_14",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
,
{
sectionName:"Dependent_15",
fields:[
[
{
label:"Dep First Name",
name:"Dep First Name_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep ID",
name:"Dep ID_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent ID",
name:"Dependent ID",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Plan Title",
name:"Plan Title",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Field",
name:"Field",
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
},
isDepRelated:""}
,
{
label:"Dep Middle",
name:"Dep Middle_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Last Name",
name:"Dep Last Name_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Gender",
name:"Dep Gender_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep DOB",
name:"Dep DOB_15",
isDepRelated:true,
type:"date",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep SSN",
name:"Dep SSN_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
{
label:"Dep Type",
name:"Dep Type_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Type",
name:"Dep Type_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Disabled",
name:"Disabled_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dep Age",
name:"Dep Age_15",
isDepRelated:true,
type:"number",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Student Start",
name:"Student Start_15",
isDepRelated:true,
type:"text",
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
,
[
{
label:"Dependent First Name:*",
name:"Dependent First Name:*_15",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
null,
null,
null,
null,
{
label:"Dependent Middle Initial:",
name:"Dependent Middle Initial:_15",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Last Name:*",
name:"Dependent Last Name:*_15",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Male",
name:"Dependent Gender Male_15",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Gender Female",
name:"Dependent Gender Female_15",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Date of Birth:*",
name:"Dependent Date of Birth:*_15",
isDepRelated:true,
type:"date",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN1-3:",
name:"Dependent SSN/TIN1-3:_15",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN4-5:",
name:"Dependent SSN/TIN4-5:_15",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent SSN/TIN6-9:",
name:"Dependent SSN/TIN6-9:_15",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Medicare HICN:",
name:"Dependent Medicare HICN:_15",
isDepRelated:true,
type:"text",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Spouse",
name:"Dependent Type:* Spouse_15",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Natural Child / Stepchild",
name:"Dependent Type:* Natural Child / Stepchild_15",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:* Adopted / Legal Guardian",
name:"Dependent Type:* Adopted / Legal Guardian_15",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other",
name:"Dependent Type:*  Other_15",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Dependent Type:*  Other (specify)",
name:"Dependent Type:*  Other (specify)_15",
isDepRelated:true,
type:"radio",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Physically Handicapped",
name:"Status of Dependent Child (Check all that apply):Physically Handicapped_15",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"If Dep Age Over 19",
name:"If Dep Age Over 19_15",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
name:"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_15",
isDepRelated:true,
type:"checkbox",
readonly:true,
labelWidth:220,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
]
]
}
]
}
]
;
