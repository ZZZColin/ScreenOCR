const VBA_Alert = 
{
"Account #:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Full Name(Firstname LastName) for EE Searching":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"SSN for EE Searching":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Requested Effective Date:*":{
"Mapping":[
[
[
"Requested Effective Date:*",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!",
"Multi Enroll Start Date found, please check if they were the same!"],
[
"Alert/Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder",
"Reminder"],
[
"\u200BEnroll Start Date - Medical",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>",
"<Not Empty>",
"<Not Empty>",
"<Not Empty>"],
[
"\u200BEnroll Start Date - Dental",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Not Empty>"],
[
"\u200BEnroll Start Date - Life",
"<Not Empty>",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Empty>"],
[
"\u200BEnroll Start Date - Vision",
"<Not Empty>",
"<Not Empty>",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Not Empty>",
"<Empty>",
"<Not Empty>",
"<Empty>",
"<Empty>"]]
]
,
"Calculation":[
]
}
,
"Employee First Name:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Middle Initial:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Last Name:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Suffix":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"SSN/TIN 1:":{
"Mapping":[
]
,
"Calculation":[
[
[
"SSN/TIN 1:",
"The SSN in Input Field must be 9 digits."],
[
"Alert/Reminder",
"Alert"],
[
"Calculation Type",
"Length"],
[
"\u200BEE SSN",
"<Value>"],
[
"Condition",
"<>"],
[
"Benchmark",
11]]
]
}
,
"SSN/TIN 2:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"SSN/TIN 3:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Date of Birth:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Gender  Male":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Gender  Female":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Medicare HICN:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Address1:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Address2:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Address:*":{
"Mapping":[
[
[
"Address:*",
"This employee contains both address 1 and address 2 in EN, please put the two address into this field manually"],
[
"Alert/Reminder",
"Reminder"],
[
"Address1:\u200B",
"<Not Empty>"],
[
"Address2:\u200B",
"<Not Empty>"]]
]
,
"Calculation":[
]
}
,
"City:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"State:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Zip Code:*":{
"Mapping":[
]
,
"Calculation":[
[
[
"Zip Code:*",
"The Zip Code in Input Field must be 5 digits."],
[
"Alert/Reminder",
"Alert"],
[
"Calculation Type",
"Length"],
[
"Zip Code:*\u200B",
"<Value>"],
[
"Condition",
"<>"],
[
"Benchmark",
5]]
]
}
,
"Daytime Telephone Number 1:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Daytime Telephone Number 2:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Daytime Telephone Number 3:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Email Address:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Do you wish to decline any coverage sponsored by your employer? - Yes":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Do you wish to decline any coverage sponsored by your employer? - No":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Medical":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Dental":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Vision":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Basic Life / ADD":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Supplemental Life / ADD":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Dependent Life":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Short Term Disability":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Select all coverages you wish to decline:* Long Term Disability":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for declining: (select all that apply)*  Other Group Medical Coverage":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for declining: (select all that apply)*  Other Group Dental Coverage":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for declining: (select all that apply)*  Other Group Vision Coverage":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for declining: (select all that apply)*   I have TennCare or Medicaid":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for declining: (select all that apply)*    Other":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* New Hire":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* Open Enrollment":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* New Dependent Child":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* Court Order":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* Marriage":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* Loss of Other Coverage":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* Dental":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* Vision":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Reason for enrollment/change:* Continuation Coverage Period Expired":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"New Dependent Child Event Date":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Court Order Event Date":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Marriage Event Date":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Loss of Other Coverage Event Date":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Continuation Coverage Period Expired  Event Date":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Subgroup No:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Department No:":{
"Mapping":[
[
[
"Department No:",
"Department# is required for this group!",
"Department# is required for this group!"],
[
"Alert/Reminder",
"Alert",
"Alert"],
[
"\u200BGroup Name",
"Wearwell LLC",
"Calloway Oil Company"],
[
"Department No:\u200B",
"<Empty>",
"<Empty>"]]
]
,
"Calculation":[
]
}
,
"Employee Paid Class:* Hourly":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Paid Class:* Salary":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Paid Class:* Retiree":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Paid Class:* Surviving Spouse":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Paid Class:* COBRA":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Hire Date:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Weekly Hours:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Job Title:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Payroll Number:":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Job Class:*  Non-Management":{
"Mapping":[
[
[
"Employee Job Class:*  Non-Management",
"Please manually select Employee Job Class",
"Please only select one employee Job Class",
"Please only select one employee Job Class",
"Please only select one employee Job Class",
"Please only select one employee Job Class"],
[
"Alert/Reminder",
"Alert",
"Alert",
"Alert",
"Alert",
"Alert"],
[
"Employee Job Class:*  Non-Management\u200B",
"<Empty>",
true,
true,
"<Ignore>",
true],
[
"Employee Job Class:*  Management\u200B",
"<Empty>",
true,
"<Ignore>",
true,
true],
[
"Employee Job Class:*  Exec/Officer/Owner\u200B",
"<Empty>",
"<Ignore>",
true,
true,
true]]
]
,
"Calculation":[
]
}
,
"Employee Job Class:*  Management":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Job Class:*  Exec/Officer/Owner":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Status:* Full-time":{
"Mapping":[
[
[
"Employee Status:* Full-time",
"Please manually select Employee Status",
"Please only select one employee status",
"Please only select one employee status",
"Please only select one employee status",
"Please only select one employee status",
"Please only select one employee status",
"Please only select one employee status",
"Please only select one employee status"],
[
"Alert/Reminder",
"Alert",
"Alert",
"Alert",
"Alert",
"Alert",
"Alert",
"Alert",
"Alert"],
[
"Employee Status:* Full-time\u200B",
"<Empty>",
"<Empty>",
true,
true,
true,
"<Ignore>",
"<Ignore>",
"<Ignore>"],
[
"Employee Status:* Part-time\u200B",
"<Empty>",
"<Empty>",
true,
"<Ignore>",
"<Ignore>",
true,
true,
"<Ignore>"],
[
"Employee Status:* Part-time to Full-time\u200B",
"<Empty>",
"<Empty>",
"<Ignore>",
true,
"<Ignore>",
true,
"<Ignore>",
true],
[
"Employee Status:* Rehire\u200B",
"<Empty>",
"<Empty>",
"<Ignore>",
"<Ignore>",
true,
"<Ignore>",
true,
true]]
]
,
"Calculation":[
]
}
,
"Employee Status:* Part-time":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Status:* Part-time to Full-time":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Employee Status:* Rehire":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Reason:* Termination of Employment":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Reason:* Involuntary Termination":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Reason:* Employee Eligible for Medicare":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Reason:* Reduction in Hours":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Reason:* Dependent Child No Longer Eligible":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Reason:* Divorce / Legal Separation":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Reason:* Death of Employee":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"COBRA Event Date:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Medical Option:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Medical Coverage Type:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dental Option:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dental Coverage Type:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Vision Option:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Vision Coverage Type:*":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? Yes":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? No":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent First Name:*_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Middle Initial:_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Last Name:*_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Male_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Gender Female_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Date of Birth:*_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN1-3:_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN4-5:_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent SSN/TIN6-9:_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Medicare HICN:_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Spouse_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Natural Child / Stepchild_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:* Adopted / Legal Guardian_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Dependent Type:*  Other (specify)_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"If Dep Age Over 19_15":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_1":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_2":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_3":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_4":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_5":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_6":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_7":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_8":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_9":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_10":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_11":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_12":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_13":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_14":{
"Mapping":[
]
,
"Calculation":[
]
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_15":{
"Mapping":[
]
,
"Calculation":[
]
}
}

