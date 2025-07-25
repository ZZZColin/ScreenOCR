const VBA_UI = [
{
tabName:"Group",
sections:[
{
sectionName:"test",
fields:[
[
{
label:"Covg End Date - Medical",
name:"Covg End Date - Medical",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Dental",
name:"Covg End Date - Dental",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Life",
name:"Covg End Date - Life",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Group Life",
name:"Covg End Date - Group Life",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Vision",
name:"Covg End Date - Vision",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Health Savings Account",
name:"Covg End Date - Health Savings Account",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Name - Medical",
name:"Plan Name - Medical",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Name - Dental",
name:"Plan Name - Dental",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Name - Life",
name:"Plan Name - Life",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Name - Group Life",
name:"Plan Name - Group Life",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Name - Vision",
name:"Plan Name - Vision",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Plan Name - Health Savings Account",
name:"Plan Name - Health Savings Account",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"All Plan Name",
name:"All Plan Name",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"All Carrier",
name:"All Carrier",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Ini Plan Name - Medical",
name:"Ini Plan Name - Medical",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Ini Plan Name - Dental",
name:"Ini Plan Name - Dental",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Ini Plan Name - Life",
name:"Ini Plan Name - Life",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Ini Plan Name - Group Life",
name:"Ini Plan Name - Group Life",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Ini Plan Name - Vision",
name:"Ini Plan Name - Vision",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Ini Plan Name - Health Savings Account",
name:"Ini Plan Name - Health Savings Account",
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
type:"text",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Medical",
name:"Covg End Date - Medical",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Dental",
name:"Covg End Date - Dental",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Covg End Date - Vision",
name:"Covg End Date - Vision",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Termination Date",
name:"Termination Date",
type:"date",
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
null]
,
[
{
label:"Requested Effective Date",
name:"Requested Effective Date",
type:"date",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
null,
null,
null,
null,
null,
null,
{
label:"Update Personal Information",
name:"Update Personal Information",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Update Subgroup or Department",
name:"Update Subgroup or Department",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Update Benefit Options",
name:"Update Benefit Options",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Add Dependents",
name:"Add Dependents",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Change or Terminate Dependents",
name:"Change or Terminate Dependents",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Update FSA Information",
name:"Update FSA Information",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Terminate Employee Benefits",
name:"Terminate Employee Benefits",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Update Life Salary or Beneficiary Information",
name:"Update Life Salary or Beneficiary Information",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Update Health & Wellness Information",
name:"Update Health & Wellness Information",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Update HSA Vendor Information",
name:"Update HSA Vendor Information",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Employee First Name:*",
name:"Personal Information - Employee First Name:*",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Employee Middle Initial:",
name:"Personal Information - Employee Middle Initial:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Employee Last Name:*",
name:"Personal Information - Employee Last Name:*",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Employee Suffix:",
name:"Personal Information - Employee Suffix:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - SSN/TIN1:",
name:"Personal Information - SSN/TIN1:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - SSN/TIN2:",
name:"Personal Information - SSN/TIN2:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - SSN/TIN3:",
name:"Personal Information - SSN/TIN3:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Date of Birth:*",
name:"Personal Information - Date of Birth:*",
type:"date",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Gender  Male",
name:"Personal Information - Gender  Male",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Gender  Female",
name:"Personal Information - Gender  Female",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - Medicare HICN:",
name:"Personal Information - Medicare HICN:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Personal Information - Address:*",
name:"Personal Information - Address:*",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Personal Information - City:*",
name:"Personal Information - City:*",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Personal Information - State:*",
name:"Personal Information - State:*",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Personal Information - Zip Code:*",
name:"Personal Information - Zip Code:*",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Personal Information - Daytime Telephone Number1:",
name:"Personal Information - Daytime Telephone Number1:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Personal Information - Daytime Telephone Number2:",
name:"Personal Information - Daytime Telephone Number2:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Personal Information - Daytime Telephone Number3:",
name:"Personal Information - Daytime Telephone Number3:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Personal Information - Email Address:",
name:"Personal Information - Email Address:",
type:"email",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
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
label:"Coverage(s) to Terminate (select all that apply): Medical",
name:"Coverage(s) to Terminate (select all that apply): Medical",
type:"checkbox",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Coverage(s) to Terminate (select all that apply): Dental",
name:"Coverage(s) to Terminate (select all that apply): Dental",
type:"checkbox",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Coverage(s) to Terminate (select all that apply): Vision",
name:"Coverage(s) to Terminate (select all that apply): Vision",
type:"checkbox",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reason for Termination:* Termination of Employment",
name:"Reason for Termination:* Termination of Employment",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Involuntary Termination",
name:"Involuntary Termination",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Reduction in Hours / Retirement",
name:"Reduction in Hours / Retirement",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"No Longer Eligible Employee",
name:"No Longer Eligible Employee",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Medicare Eligible",
name:"Medicare Eligible",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Death",
name:"Death",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Other",
name:"Other",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Gross Misconduct",
name:"Gross Misconduct",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Active Military Duty",
name:"Active Military Duty",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Event Date:*",
name:"Event Date:*",
type:"date",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Department Number:",
name:"Department Number:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Has the Employee's Address Changed?* Yes",
name:"Has the Employee's Address Changed?* Yes",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Has the Employee's Address Changed?* No",
name:"Has the Employee's Address Changed?* No",
type:"radio",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Has the Employee's Address Changed?* - Address:*",
name:"Has the Employee's Address Changed?* - Address:*",
type:"checkbox",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Has the Employee's Address Changed?* - City:*",
name:"Has the Employee's Address Changed?* - City:*",
type:"checkbox",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Has the Employee's Address Changed?* - State:*",
name:"Has the Employee's Address Changed?* - State:*",
type:"checkbox",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Has the Employee's Address Changed?* - Zip Code:*",
name:"Has the Employee's Address Changed?* - Zip Code:*",
type:"checkbox",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Date COBRA Billing Begins (Date BlueCross BlueShield of Tennessee starts billing COBRA participant):*",
name:"Date COBRA Billing Begins (Date BlueCross BlueShield of Tennessee starts billing COBRA participant):*",
type:"date",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Contact Information for COBRA Questions: Contact Name:",
name:"Contact Information for COBRA Questions: Contact Name:",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Contact Information for COBRA Questions:  Telephone No1",
name:"Contact Information for COBRA Questions:  Telephone No1",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Contact Information for COBRA Questions:  Telephone No2",
name:"Contact Information for COBRA Questions:  Telephone No2",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
  return function () {
    const errorMessage = VBA_FORMULA_ALERT(key, VBA_ALERT_CONFIG, values);
    if (errorMessage) {
      return errorMessage;
    }
    return true;
  };
}
}}
,
{
label:"Contact Information for COBRA Questions:  Telephone No3",
name:"Contact Information for COBRA Questions:  Telephone No3",
type:"text",
readonly:true,
labelWidth:260,
width:400,
rules: {
  validate: function (key, VBA_FORMULA_ALERT, VBA_ALERT_CONFIG, values) {
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
