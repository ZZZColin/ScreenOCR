const VBA_OFN = 
{
"Account #:":{
"Source Key in IFN":"Group Name",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Requested Effective Date:*":{
"Source Key in IFN":"Carrier",
"Mapping":[
[
"Requested Effective Date:*",
"\u200BEnroll Start Date - Medical",
"\u200BEnroll Start Date - Dental",
"\u200BEnroll Start Date - Life",
"\u200BEnroll Start Date - Vision",
"\u200BEnroll Start Date - Group Life",
"\u200BEnroll Start Date - Health Savings Account"],
[
"\u200BEnroll Start Date - Medical",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEnroll Start Date - Dental",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEnroll Start Date - Life",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEnroll Start Date - Vision",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEnroll Start Date - Group Life",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BEnroll Start Date - Health Savings Account",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee First Name:*":{
"Source Key in IFN":"EE First Name",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Employee Middle Initial:":{
"Source Key in IFN":"EE Middle",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Employee Last Name:*":{
"Source Key in IFN":"EE Last Name",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Employee Suffix":{
"Source Key in IFN":"EE Suffix",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"SSN/TIN 1:":{
"Source Key in IFN":"EE SSN",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"SSN/TIN 2:":{
"Source Key in IFN":"EE SSN",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"SSN/TIN 3:":{
"Source Key in IFN":"EE SSN",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Date of Birth:*":{
"Source Key in IFN":"EE DOB",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Gender  Male":{
"Source Key in IFN":"EE Gender",
"Mapping":[
[
"Gender  Male",
true],
[
"\u200BEE Gender",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Gender  Female":{
"Source Key in IFN":"EE Gender",
"Mapping":[
[
"Gender  Female",
true],
[
"\u200BEE Gender",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Medicare HICN:":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Address1:":{
"Source Key in IFN":"EE Address 1 - Mailing",
"Mapping":[
[
"Address1:",
"\u200BEE Address 1 - Mailing",
"\u200BEE Address 1 - Home",
"\u200BEE Address 1 - Secondary Home",
"\u200BEE Address 1 - Vacation Home"],
[
"\u200BEE Address 1 - Mailing",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE Address 1 - Home",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE Address 1 - Secondary Home",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BEE Address 1 - Vacation Home",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces"}
}
,
"Address2:":{
"Source Key in IFN":"EE Address 2 - Mailing",
"Mapping":[
[
"Address2:",
"\u200BEE Address 2 - Mailing",
"\u200BEE Address 2 - Home",
"\u200BEE Address 2 - Secondary Home",
"\u200BEE Address 2 - Vacation Home"],
[
"\u200BEE Address 2 - Mailing",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE Address 2 - Home",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE Address 2 - Secondary Home",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BEE Address 2 - Vacation Home",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces"}
}
,
"Address:*":{
"Source Key in IFN":"",
"Mapping":[
[
"Address:*",
"Address1:\u200B"],
[
"Address1:\u200B",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
40]
}
}
,
"City:*":{
"Source Key in IFN":"EE City - Mailing",
"Mapping":[
[
"City:*",
"\u200BEE City - Mailing",
"\u200BEE City - Home",
"\u200BEE City - Secondary Home",
"\u200BEE City - Vacation Home"],
[
"\u200BEE City - Mailing",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE City - Home",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE City - Secondary Home",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BEE City - Vacation Home",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Split":[
1,
19]
}
}
,
"State:*":{
"Source Key in IFN":"EE State - Mailing",
"Mapping":[
[
"State:*",
"\u200BEE State - Mailing",
"\u200BEE State - Home",
"\u200BEE State - Secondary Home",
"\u200BEE State - Vacation Home"],
[
"\u200BEE State - Mailing",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE State - Home",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE State - Secondary Home",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BEE State - Vacation Home",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Zip Code:*":{
"Source Key in IFN":"EE Zip - Mailing",
"Mapping":[
[
"Zip Code:*",
"\u200BEE Zip - Mailing",
"\u200BEE Zip - Home",
"\u200BEE Zip - Secondary Home",
"\u200BEE Zip - Vacation Home"],
[
"\u200BEE Zip - Mailing",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE Zip - Home",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BEE Zip - Secondary Home",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BEE Zip - Vacation Home",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Split":[
1,
5]
}
}
,
"Daytime Telephone Number 1:":{
"Source Key in IFN":"Mobile Phone",
"Mapping":[
[
"Daytime Telephone Number 1:",
"\u200BMobile Phone",
"\u200BWork Phone",
"\u200BHome Phone"],
[
"\u200BMobile Phone",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BWork Phone",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BHome Phone",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Split":[
1,
3]
}
}
,
"Daytime Telephone Number 2:":{
"Source Key in IFN":"Mobile Phone",
"Mapping":[
[
"Daytime Telephone Number 2:",
"\u200BMobile Phone",
"\u200BWork Phone",
"\u200BHome Phone"],
[
"\u200BMobile Phone",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BWork Phone",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BHome Phone",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Split":[
4,
6]
}
}
,
"Daytime Telephone Number 3:":{
"Source Key in IFN":"Mobile Phone",
"Mapping":[
[
"Daytime Telephone Number 3:",
"\u200BMobile Phone",
"\u200BWork Phone",
"\u200BHome Phone"],
[
"\u200BMobile Phone",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BWork Phone",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BHome Phone",
"<Ignore>",
"<Ignore>",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
"Text Split":[
7,
10]
}
}
,
"Email Address:":{
"Source Key in IFN":"Primary Email Type",
"Mapping":[
[
"Email Address:",
"\u200BPersonal Email",
"\u200BWork Email"],
[
"\u200BPrimary Email Type",
"Personal",
"Work"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Do you wish to decline any coverage sponsored by your employer? - Yes":{
"Source Key in IFN":"Enroll Start Date - Medical",
"Mapping":[
[
"Do you wish to decline any coverage sponsored by your employer? - Yes",
true],
[
"Do you wish to decline any coverage sponsored by your employer? - No\u200B",
false]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Do you wish to decline any coverage sponsored by your employer? - No":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Do you wish to decline any coverage sponsored by your employer? - No",
true],
[
"\u200BEnroll Start Date - Medical",
"<Not Empty>"],
[
"\u200BEnroll Start Date - Dental",
"<Not Empty>"],
[
"\u200BEnroll Start Date - Life",
"<Not Empty>"],
[
"\u200BEnroll Start Date - Vision",
"<Not Empty>"],
[
"\u200BEnroll Start Date - Group Life",
"<Not Empty>"],
[
"\u200BEnroll Start Date - Health Savings Account",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Medical":{
"Source Key in IFN":"Enroll Start Date - Medical",
"Mapping":[
[
"Select all coverages you wish to decline:* Medical",
true],
[
"\u200BEnroll Start Date - Medical",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Dental":{
"Source Key in IFN":"Enroll Start Date - Dental",
"Mapping":[
[
"Select all coverages you wish to decline:* Dental",
true],
[
"\u200BEnroll Start Date - Dental",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Vision":{
"Source Key in IFN":"Enroll Start Date - Vision",
"Mapping":[
[
"Select all coverages you wish to decline:* Vision",
true],
[
"\u200BEnroll Start Date - Vision",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Basic Life / ADD":{
"Source Key in IFN":"Enroll Start Date - Life",
"Mapping":[
[
"Select all coverages you wish to decline:* Basic Life / ADD",
true],
[
"\u200BEnroll Start Date - Life",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Supplemental Life / ADD":{
"Source Key in IFN":"Supplemental Life Plan Name",
"Mapping":[
[
"Select all coverages you wish to decline:* Supplemental Life / ADD",
true],
[
"\u200BSupplemental Life Plan Name",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Dependent Life":{
"Source Key in IFN":"",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Short Term Disability":{
"Source Key in IFN":"STD Plan Name",
"Mapping":[
[
"Select all coverages you wish to decline:* Short Term Disability",
true],
[
"\u200BSTD Plan Name",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Select all coverages you wish to decline:* Long Term Disability":{
"Source Key in IFN":"LTD Plan Name",
"Mapping":[
[
"Select all coverages you wish to decline:* Long Term Disability",
true],
[
"\u200BLTD Plan Name",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for declining: (select all that apply)*  Other Group Medical Coverage":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for declining: (select all that apply)*  Other Group Dental Coverage":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for declining: (select all that apply)*  Other Group Vision Coverage":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for declining: (select all that apply)*   I have TennCare or Medicaid":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for declining: (select all that apply)*    Other":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* New Hire":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for enrollment/change:* New Hire",
true],
[
"\u200BEvent Reason",
"New Hire or COBRA"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* Open Enrollment":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for enrollment/change:* Open Enrollment",
true],
[
"\u200BEvent Reason",
"Open Enrollment"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* New Dependent Child":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for enrollment/change:* New Dependent Child",
true],
[
"\u200BEvent Reason",
"New Dependent Child"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* Court Order":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for enrollment/change:* Court Order",
true],
[
"\u200BEvent Reason",
"Court Order"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* Marriage":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for enrollment/change:* Marriage",
true],
[
"\u200BEvent Reason",
"Marriage"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* Loss of Other Coverage":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for enrollment/change:* Loss of Other Coverage",
true],
[
"\u200BEvent Reason",
"Loss of Other Coverage"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* Dental":{
"Source Key in IFN":"Event Reason",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* Vision":{
"Source Key in IFN":"Event Reason",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for enrollment/change:* Continuation Coverage Period Expired":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for enrollment/change:* Continuation Coverage Period Expired",
true],
[
"\u200BEvent Reason",
"Continuation Coverage Period Expired"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"New Dependent Child Event Date":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"New Dependent Child Event Date",
"Requested Effective Date:*\u200B"],
[
"Reason for enrollment/change:* New Dependent Child\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Court Order Event Date":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Court Order Event Date",
"Requested Effective Date:*\u200B"],
[
"Reason for enrollment/change:* Court Order\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Marriage Event Date":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Marriage Event Date",
"Requested Effective Date:*\u200B"],
[
"Reason for enrollment/change:* Marriage\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Loss of Other Coverage Event Date":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Loss of Other Coverage Event Date",
"Requested Effective Date:*\u200B"],
[
"Reason for enrollment/change:* Loss of Other Coverage\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Continuation Coverage Period Expired  Event Date":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Continuation Coverage Period Expired  Event Date",
"Requested Effective Date:*\u200B"],
[
"Reason for enrollment/change:* Continuation Coverage Period Expired\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Subgroup No:*":{
"Source Key in IFN":"Department",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Department No:":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Paid Class:* Hourly":{
"Source Key in IFN":"Pay Basis",
"Mapping":[
[
"Employee Paid Class:* Hourly",
true],
[
"\u200BPay Basis",
"Hourly"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Paid Class:* Salary":{
"Source Key in IFN":"Pay Basis",
"Mapping":[
[
"Employee Paid Class:* Salary",
true],
[
"\u200BPay Basis",
"Hourly"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Paid Class:* Retiree":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Employee Paid Class:* Retiree",
"Flase"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Paid Class:* Surviving Spouse":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Employee Paid Class:* Surviving Spouse",
"Flase"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Paid Class:* COBRA":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Employee Paid Class:* COBRA",
"Flase"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Hire Date:*":{
"Source Key in IFN":"Hire Date",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Weekly Hours:*":{
"Source Key in IFN":"Hours Per Week",
"Mapping":[
[
"Weekly Hours:*",
40],
[
"\u200BHours Per Week",
"<Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Job Title:":{
"Source Key in IFN":"Job Title",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Payroll Number:":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Job Class:*  Non-Management":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Job Class:*  Management":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Job Class:*  Exec/Officer/Owner":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Status:* Full-time":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Status:* Part-time":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Status:* Part-time to Full-time":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Employee Status:* Rehire":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Reason:* Termination of Employment":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Reason:* Involuntary Termination":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Reason:* Employee Eligible for Medicare":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Reason:* Reduction in Hours":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Reason:* Dependent Child No Longer Eligible":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Reason:* Divorce / Legal Separation":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Reason:* Death of Employee":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"COBRA Event Date:*":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Medical Option:*":{
"Source Key in IFN":"Medical Plan Name",
"Mapping":[
[
"Medical Option:*",
"001 - Test A",
"001 - Test B",
"001 - Test C",
"001 - Test A - 2",
"001 - Test B - 2",
"001 - Test C - 2"],
[
"\u200BGroup Name",
"Group 1",
"Group 1",
"Group 1",
"Group 2",
"Group 2",
"Group 2"],
[
"\u200BMedical Plan Name",
"001 - Test A - EN",
"001 - Test B - EN",
"001 - Test C - EN",
"001 - Test A - EN",
"001 - Test B - EN",
"001 - Test C - EN"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Medical Coverage Type:*":{
"Source Key in IFN":"Medical Coverage Type",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dental Option:*":{
"Source Key in IFN":"Dental Plan Name",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dental Coverage Type:*":{
"Source Key in IFN":"Dental Coverage Type",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Vision Option:*":{
"Source Key in IFN":"Vision Plan Name",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Vision Coverage Type:*":{
"Source Key in IFN":"Vision Coverage Type",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? Yes":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? No":{
"Source Key in IFN":"N/A",
"Mapping":[
[
"Will you or any listed dependents be covered on other health, dental or Medicare insurance when this plan goes into effect? No",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent First Name:*_1":{
"Source Key in IFN":"Dep First Name_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_2":{
"Source Key in IFN":"Dep First Name_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_3":{
"Source Key in IFN":"Dep First Name_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_4":{
"Source Key in IFN":"Dep First Name_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_5":{
"Source Key in IFN":"Dep First Name_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_6":{
"Source Key in IFN":"Dep First Name_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_7":{
"Source Key in IFN":"Dep First Name_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_8":{
"Source Key in IFN":"Dep First Name_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_9":{
"Source Key in IFN":"Dep First Name_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_10":{
"Source Key in IFN":"Dep First Name_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_11":{
"Source Key in IFN":"Dep First Name_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_12":{
"Source Key in IFN":"Dep First Name_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_13":{
"Source Key in IFN":"Dep First Name_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_14":{
"Source Key in IFN":"Dep First Name_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent First Name:*_15":{
"Source Key in IFN":"Dep First Name_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
15]
}
}
,
"Dependent Middle Initial:_1":{
"Source Key in IFN":"Dep Middle_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_2":{
"Source Key in IFN":"Dep Middle_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_3":{
"Source Key in IFN":"Dep Middle_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_4":{
"Source Key in IFN":"Dep Middle_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_5":{
"Source Key in IFN":"Dep Middle_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_6":{
"Source Key in IFN":"Dep Middle_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_7":{
"Source Key in IFN":"Dep Middle_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_8":{
"Source Key in IFN":"Dep Middle_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_9":{
"Source Key in IFN":"Dep Middle_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_10":{
"Source Key in IFN":"Dep Middle_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_11":{
"Source Key in IFN":"Dep Middle_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_12":{
"Source Key in IFN":"Dep Middle_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_13":{
"Source Key in IFN":"Dep Middle_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_14":{
"Source Key in IFN":"Dep Middle_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Middle Initial:_15":{
"Source Key in IFN":"Dep Middle_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
1]
,
"Text Cap":"All Capitalize"}
}
,
"Dependent Last Name:*_1":{
"Source Key in IFN":"Dep Last Name_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_2":{
"Source Key in IFN":"Dep Last Name_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_3":{
"Source Key in IFN":"Dep Last Name_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_4":{
"Source Key in IFN":"Dep Last Name_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_5":{
"Source Key in IFN":"Dep Last Name_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_6":{
"Source Key in IFN":"Dep Last Name_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_7":{
"Source Key in IFN":"Dep Last Name_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_8":{
"Source Key in IFN":"Dep Last Name_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_9":{
"Source Key in IFN":"Dep Last Name_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_10":{
"Source Key in IFN":"Dep Last Name_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_11":{
"Source Key in IFN":"Dep Last Name_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_12":{
"Source Key in IFN":"Dep Last Name_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_13":{
"Source Key in IFN":"Dep Last Name_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_14":{
"Source Key in IFN":"Dep Last Name_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Last Name:*_15":{
"Source Key in IFN":"Dep Last Name_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters Only",
"Text Split":[
1,
35]
}
}
,
"Dependent Gender Male_1":{
"Source Key in IFN":"Dep Gender_1",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_1",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_2":{
"Source Key in IFN":"Dep Gender_2",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_2",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_3":{
"Source Key in IFN":"Dep Gender_3",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_3",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_4":{
"Source Key in IFN":"Dep Gender_4",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_4",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_5":{
"Source Key in IFN":"Dep Gender_5",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_5",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_6":{
"Source Key in IFN":"Dep Gender_6",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_6",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_7":{
"Source Key in IFN":"Dep Gender_7",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_7",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_8":{
"Source Key in IFN":"Dep Gender_8",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_8",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_9":{
"Source Key in IFN":"Dep Gender_9",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_9",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_10":{
"Source Key in IFN":"Dep Gender_10",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_10",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_11":{
"Source Key in IFN":"Dep Gender_11",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_11",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_12":{
"Source Key in IFN":"Dep Gender_12",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_12",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_13":{
"Source Key in IFN":"Dep Gender_13",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_13",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_14":{
"Source Key in IFN":"Dep Gender_14",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_14",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Male_15":{
"Source Key in IFN":"Dep Gender_15",
"Mapping":[
[
"Dependent Gender Male",
true],
[
"\u200BDep Gender_15",
"M"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_1":{
"Source Key in IFN":"Dep Gender_1",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_1",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_2":{
"Source Key in IFN":"Dep Gender_2",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_2",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_3":{
"Source Key in IFN":"Dep Gender_3",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_3",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_4":{
"Source Key in IFN":"Dep Gender_4",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_4",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_5":{
"Source Key in IFN":"Dep Gender_5",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_5",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_6":{
"Source Key in IFN":"Dep Gender_6",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_6",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_7":{
"Source Key in IFN":"Dep Gender_7",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_7",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_8":{
"Source Key in IFN":"Dep Gender_8",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_8",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_9":{
"Source Key in IFN":"Dep Gender_9",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_9",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_10":{
"Source Key in IFN":"Dep Gender_10",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_10",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_11":{
"Source Key in IFN":"Dep Gender_11",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_11",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_12":{
"Source Key in IFN":"Dep Gender_12",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_12",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_13":{
"Source Key in IFN":"Dep Gender_13",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_13",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_14":{
"Source Key in IFN":"Dep Gender_14",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_14",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Gender Female_15":{
"Source Key in IFN":"Dep Gender_15",
"Mapping":[
[
"Dependent Gender Female",
true],
[
"\u200BDep Gender_15",
"F"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_1":{
"Source Key in IFN":"Dep DOB_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_2":{
"Source Key in IFN":"Dep DOB_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_3":{
"Source Key in IFN":"Dep DOB_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_4":{
"Source Key in IFN":"Dep DOB_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_5":{
"Source Key in IFN":"Dep DOB_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_6":{
"Source Key in IFN":"Dep DOB_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_7":{
"Source Key in IFN":"Dep DOB_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_8":{
"Source Key in IFN":"Dep DOB_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_9":{
"Source Key in IFN":"Dep DOB_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_10":{
"Source Key in IFN":"Dep DOB_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_11":{
"Source Key in IFN":"Dep DOB_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_12":{
"Source Key in IFN":"Dep DOB_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_13":{
"Source Key in IFN":"Dep DOB_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_14":{
"Source Key in IFN":"Dep DOB_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Date of Birth:*_15":{
"Source Key in IFN":"Dep DOB_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent SSN/TIN1-3:_1":{
"Source Key in IFN":"Dep SSN_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_2":{
"Source Key in IFN":"Dep SSN_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_3":{
"Source Key in IFN":"Dep SSN_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_4":{
"Source Key in IFN":"Dep SSN_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_5":{
"Source Key in IFN":"Dep SSN_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_6":{
"Source Key in IFN":"Dep SSN_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_7":{
"Source Key in IFN":"Dep SSN_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_8":{
"Source Key in IFN":"Dep SSN_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_9":{
"Source Key in IFN":"Dep SSN_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_10":{
"Source Key in IFN":"Dep SSN_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_11":{
"Source Key in IFN":"Dep SSN_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_12":{
"Source Key in IFN":"Dep SSN_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_13":{
"Source Key in IFN":"Dep SSN_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_14":{
"Source Key in IFN":"Dep SSN_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN1-3:_15":{
"Source Key in IFN":"Dep SSN_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
1,
3]
}
}
,
"Dependent SSN/TIN4-5:_1":{
"Source Key in IFN":"Dep SSN_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_2":{
"Source Key in IFN":"Dep SSN_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_3":{
"Source Key in IFN":"Dep SSN_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_4":{
"Source Key in IFN":"Dep SSN_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_5":{
"Source Key in IFN":"Dep SSN_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_6":{
"Source Key in IFN":"Dep SSN_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_7":{
"Source Key in IFN":"Dep SSN_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_8":{
"Source Key in IFN":"Dep SSN_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_9":{
"Source Key in IFN":"Dep SSN_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_10":{
"Source Key in IFN":"Dep SSN_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_11":{
"Source Key in IFN":"Dep SSN_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_12":{
"Source Key in IFN":"Dep SSN_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_13":{
"Source Key in IFN":"Dep SSN_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_14":{
"Source Key in IFN":"Dep SSN_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN4-5:_15":{
"Source Key in IFN":"Dep SSN_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
4,
5]
}
}
,
"Dependent SSN/TIN6-9:_1":{
"Source Key in IFN":"Dep SSN_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_2":{
"Source Key in IFN":"Dep SSN_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_3":{
"Source Key in IFN":"Dep SSN_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_4":{
"Source Key in IFN":"Dep SSN_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_5":{
"Source Key in IFN":"Dep SSN_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_6":{
"Source Key in IFN":"Dep SSN_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_7":{
"Source Key in IFN":"Dep SSN_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_8":{
"Source Key in IFN":"Dep SSN_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_9":{
"Source Key in IFN":"Dep SSN_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_10":{
"Source Key in IFN":"Dep SSN_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_11":{
"Source Key in IFN":"Dep SSN_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_12":{
"Source Key in IFN":"Dep SSN_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_13":{
"Source Key in IFN":"Dep SSN_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_14":{
"Source Key in IFN":"Dep SSN_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent SSN/TIN6-9:_15":{
"Source Key in IFN":"Dep SSN_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
"Text Clean":"Keep Letters & Numbers & Spaces",
"Text Split":[
6,
9]
}
}
,
"Dependent Medicare HICN:_1":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_2":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_3":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_4":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_5":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_6":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_7":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_8":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_9":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_10":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_11":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_12":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_13":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_14":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Medicare HICN:_15":{
"Source Key in IFN":"N/A",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_1":{
"Source Key in IFN":"Dep Type_1",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_1",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_2":{
"Source Key in IFN":"Dep Type_2",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_2",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_3":{
"Source Key in IFN":"Dep Type_3",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_3",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_4":{
"Source Key in IFN":"Dep Type_4",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_4",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_5":{
"Source Key in IFN":"Dep Type_5",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_5",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_6":{
"Source Key in IFN":"Dep Type_6",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_6",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_7":{
"Source Key in IFN":"Dep Type_7",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_7",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_8":{
"Source Key in IFN":"Dep Type_8",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_8",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_9":{
"Source Key in IFN":"Dep Type_9",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_9",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_10":{
"Source Key in IFN":"Dep Type_10",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_10",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_11":{
"Source Key in IFN":"Dep Type_11",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_11",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_12":{
"Source Key in IFN":"Dep Type_12",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_12",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_13":{
"Source Key in IFN":"Dep Type_13",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_13",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_14":{
"Source Key in IFN":"Dep Type_14",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_14",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Spouse_15":{
"Source Key in IFN":"Dep Type_15",
"Mapping":[
[
"Dependent Type:* Spouse",
true,
true,
true,
true,
true],
[
"\u200BDep Type_15",
"Spouse",
"Ex-Spouse",
"Domestic Partner",
"Ex-Domestic Partner",
"Deceased Spouse"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_1":{
"Source Key in IFN":"Dep Type_1",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_1",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_2":{
"Source Key in IFN":"Dep Type_2",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_2",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_3":{
"Source Key in IFN":"Dep Type_3",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_3",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_4":{
"Source Key in IFN":"Dep Type_4",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_4",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_5":{
"Source Key in IFN":"Dep Type_5",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_5",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_6":{
"Source Key in IFN":"Dep Type_6",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_6",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_7":{
"Source Key in IFN":"Dep Type_7",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_7",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_8":{
"Source Key in IFN":"Dep Type_8",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_8",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_9":{
"Source Key in IFN":"Dep Type_9",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_9",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_10":{
"Source Key in IFN":"Dep Type_10",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_10",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_11":{
"Source Key in IFN":"Dep Type_11",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_11",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_12":{
"Source Key in IFN":"Dep Type_12",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_12",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_13":{
"Source Key in IFN":"Dep Type_13",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_13",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_14":{
"Source Key in IFN":"Dep Type_14",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_14",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Natural Child / Stepchild_15":{
"Source Key in IFN":"Dep Type_15",
"Mapping":[
[
"Dependent Type:* Natural Child / Stepchild",
true,
true,
true,
true],
[
"\u200BDep Type_15",
"Child",
"Child of Domestic Partner",
"Former Dependent",
"Deceased Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_1":{
"Source Key in IFN":"Dep Type_1",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_1",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_2":{
"Source Key in IFN":"Dep Type_2",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_2",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_3":{
"Source Key in IFN":"Dep Type_3",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_3",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_4":{
"Source Key in IFN":"Dep Type_4",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_4",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_5":{
"Source Key in IFN":"Dep Type_5",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_5",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_6":{
"Source Key in IFN":"Dep Type_6",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_6",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_7":{
"Source Key in IFN":"Dep Type_7",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_7",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_8":{
"Source Key in IFN":"Dep Type_8",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_8",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_9":{
"Source Key in IFN":"Dep Type_9",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_9",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_10":{
"Source Key in IFN":"Dep Type_10",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_10",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_11":{
"Source Key in IFN":"Dep Type_11",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_11",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_12":{
"Source Key in IFN":"Dep Type_12",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_12",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_13":{
"Source Key in IFN":"Dep Type_13",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_13",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_14":{
"Source Key in IFN":"Dep Type_14",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_14",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:* Adopted / Legal Guardian_15":{
"Source Key in IFN":"Dep Type_15",
"Mapping":[
[
"Dependent Type:* Adopted / Legal Guardian",
true],
[
"\u200BDep Type_15",
"Legal Dependent"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_1":{
"Source Key in IFN":"Dep Type_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_2":{
"Source Key in IFN":"Dep Type_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_3":{
"Source Key in IFN":"Dep Type_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_4":{
"Source Key in IFN":"Dep Type_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_5":{
"Source Key in IFN":"Dep Type_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_6":{
"Source Key in IFN":"Dep Type_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_7":{
"Source Key in IFN":"Dep Type_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_8":{
"Source Key in IFN":"Dep Type_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_9":{
"Source Key in IFN":"Dep Type_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_10":{
"Source Key in IFN":"Dep Type_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_11":{
"Source Key in IFN":"Dep Type_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_12":{
"Source Key in IFN":"Dep Type_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_13":{
"Source Key in IFN":"Dep Type_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_14":{
"Source Key in IFN":"Dep Type_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other_15":{
"Source Key in IFN":"Dep Type_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_1":{
"Source Key in IFN":"Dep Type_1",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_2":{
"Source Key in IFN":"Dep Type_2",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_3":{
"Source Key in IFN":"Dep Type_3",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_4":{
"Source Key in IFN":"Dep Type_4",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_5":{
"Source Key in IFN":"Dep Type_5",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_6":{
"Source Key in IFN":"Dep Type_6",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_7":{
"Source Key in IFN":"Dep Type_7",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_8":{
"Source Key in IFN":"Dep Type_8",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_9":{
"Source Key in IFN":"Dep Type_9",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_10":{
"Source Key in IFN":"Dep Type_10",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_11":{
"Source Key in IFN":"Dep Type_11",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_12":{
"Source Key in IFN":"Dep Type_12",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_13":{
"Source Key in IFN":"Dep Type_13",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_14":{
"Source Key in IFN":"Dep Type_14",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Dependent Type:*  Other (specify)_15":{
"Source Key in IFN":"Dep Type_15",
"Mapping":[
]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_1":{
"Source Key in IFN":"Disabled_1",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_1",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_2":{
"Source Key in IFN":"Disabled_2",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_2",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_3":{
"Source Key in IFN":"Disabled_3",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_3",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_4":{
"Source Key in IFN":"Disabled_4",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_4",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_5":{
"Source Key in IFN":"Disabled_5",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_5",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_6":{
"Source Key in IFN":"Disabled_6",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_6",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_7":{
"Source Key in IFN":"Disabled_7",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_7",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_8":{
"Source Key in IFN":"Disabled_8",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_8",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_9":{
"Source Key in IFN":"Disabled_9",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_9",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_10":{
"Source Key in IFN":"Disabled_10",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_10",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_11":{
"Source Key in IFN":"Disabled_11",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_11",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_12":{
"Source Key in IFN":"Disabled_12",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_12",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_13":{
"Source Key in IFN":"Disabled_13",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_13",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_14":{
"Source Key in IFN":"Disabled_14",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_14",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Physically Handicapped_15":{
"Source Key in IFN":"Disabled_15",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Physically Handicapped",
true],
[
"\u200BDisabled_15",
"Yes"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"If Dep Age Over 19_1":{
"Source Key in IFN":"Dep Age_1",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_1",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_2":{
"Source Key in IFN":"Dep Age_2",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_2",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_3":{
"Source Key in IFN":"Dep Age_3",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_3",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_4":{
"Source Key in IFN":"Dep Age_4",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_4",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_5":{
"Source Key in IFN":"Dep Age_5",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_5",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_6":{
"Source Key in IFN":"Dep Age_6",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_6",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_7":{
"Source Key in IFN":"Dep Age_7",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_7",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_8":{
"Source Key in IFN":"Dep Age_8",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_8",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_9":{
"Source Key in IFN":"Dep Age_9",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_9",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_10":{
"Source Key in IFN":"Dep Age_10",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_10",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_11":{
"Source Key in IFN":"Dep Age_11",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_11",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_12":{
"Source Key in IFN":"Dep Age_12",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_12",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_13":{
"Source Key in IFN":"Dep Age_13",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_13",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_14":{
"Source Key in IFN":"Dep Age_14",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_14",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"If Dep Age Over 19_15":{
"Source Key in IFN":"Dep Age_15",
"Mapping":[
]
,
"Calculation":[
[
"If Dep Age Over 19",
true],
[
"Calculation Type",
"Number"],
[
"\u200BDep Age_15",
"<Value>"],
[
"Condition",
">"],
[
"Benchmark",
19]]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_1":{
"Source Key in IFN":"Student Start_1",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_1",
"<Not Empty>"],
[
"If Dep Age Over 19_1\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_2":{
"Source Key in IFN":"Student Start_2",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_2",
"<Not Empty>"],
[
"If Dep Age Over 19_2\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_3":{
"Source Key in IFN":"Student Start_3",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_3",
"<Not Empty>"],
[
"If Dep Age Over 19_3\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_4":{
"Source Key in IFN":"Student Start_4",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_4",
"<Not Empty>"],
[
"If Dep Age Over 19_4\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_5":{
"Source Key in IFN":"Student Start_5",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_5",
"<Not Empty>"],
[
"If Dep Age Over 19_5\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_6":{
"Source Key in IFN":"Student Start_6",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_6",
"<Not Empty>"],
[
"If Dep Age Over 19_6\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_7":{
"Source Key in IFN":"Student Start_7",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_7",
"<Not Empty>"],
[
"If Dep Age Over 19_7\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_8":{
"Source Key in IFN":"Student Start_8",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_8",
"<Not Empty>"],
[
"If Dep Age Over 19_8\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_9":{
"Source Key in IFN":"Student Start_9",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_9",
"<Not Empty>"],
[
"If Dep Age Over 19_9\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_10":{
"Source Key in IFN":"Student Start_10",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_10",
"<Not Empty>"],
[
"If Dep Age Over 19_10\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_11":{
"Source Key in IFN":"Student Start_11",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_11",
"<Not Empty>"],
[
"If Dep Age Over 19_11\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_12":{
"Source Key in IFN":"Student Start_12",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_12",
"<Not Empty>"],
[
"If Dep Age Over 19_12\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_13":{
"Source Key in IFN":"Student Start_13",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_13",
"<Not Empty>"],
[
"If Dep Age Over 19_13\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_14":{
"Source Key in IFN":"Student Start_14",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_14",
"<Not Empty>"],
[
"If Dep Age Over 19_14\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19_15":{
"Source Key in IFN":"Student Start_15",
"Mapping":[
[
"Status of Dependent Child (Check all that apply):Fulltime Student Over 19",
true],
[
"\u200BStudent Start_15",
"<Not Empty>"],
[
"If Dep Age Over 19_15\u200B",
true]]
,
"Calculation":[
]
,
"Format":{
}
}
}

