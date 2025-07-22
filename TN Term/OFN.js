const VBA_OFN = 
{
"Requested Effective Date":{
"Source Key in IFN":"Covg End Date - Medical",
"Mapping":[
[
"Requested Effective Date",
"\u200BCovg End Date - Medical",
"\u200BCovg End Date - Dental",
"\u200BCovg End Date - Life",
"\u200BCovg End Date - Group Life",
"\u200BCovg End Date - Vision",
"\u200BCovg End Date - Health Savings Account"],
[
"\u200BCovg End Date - Medical",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BCovg End Date - Dental",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BCovg End Date - Life",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BCovg End Date - Group Life",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>",
"<Empty>"],
[
"\u200BCovg End Date - Vision",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Ignore>",
"<Not Empty>",
"<Empty>"],
[
"\u200BCovg End Date - Health Savings Account",
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
"Update Personal Information":{
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
"Update Subgroup or Department":{
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
"Update Benefit Options":{
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
"Add Dependents":{
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
"Change or Terminate Dependents":{
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
"Update FSA Information":{
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
"Terminate Employee Benefits":{
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
"Update Life Salary or Beneficiary Information":{
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
"Update Health & Wellness Information":{
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
"Update HSA Vendor Information":{
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
"Personal Information - Employee First Name:*":{
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
"Personal Information - Employee Middle Initial:":{
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
"Personal Information - Employee Last Name:*":{
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
"Personal Information - Employee Suffix:":{
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
"Personal Information - SSN/TIN1:":{
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
"Personal Information - SSN/TIN2:":{
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
"Personal Information - SSN/TIN3:":{
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
"Personal Information - Date of Birth:*":{
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
"Personal Information - Gender  Male":{
"Source Key in IFN":"EE Gender",
"Mapping":[
[
"Personal Information - Gender  Male",
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
"Personal Information - Gender  Female":{
"Source Key in IFN":"EE Gender",
"Mapping":[
[
"Personal Information - Gender  Female",
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
"Personal Information - Medicare HICN:":{
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
"Personal Information - Address:*":{
"Source Key in IFN":"",
"Mapping":[
[
"Personal Information - Address:*",
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
"Personal Information - City:*":{
"Source Key in IFN":"EE City - Mailing",
"Mapping":[
[
"Personal Information - City:*",
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
"Personal Information - State:*":{
"Source Key in IFN":"EE State - Mailing",
"Mapping":[
[
"Personal Information - State:*",
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
"Personal Information - Zip Code:*":{
"Source Key in IFN":"EE Zip - Mailing",
"Mapping":[
[
"Personal Information - Zip Code:*",
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
"Personal Information - Daytime Telephone Number1:":{
"Source Key in IFN":"Mobile Phone",
"Mapping":[
[
"Personal Information - Daytime Telephone Number1:",
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
"Personal Information - Daytime Telephone Number2:":{
"Source Key in IFN":"Mobile Phone",
"Mapping":[
[
"Personal Information - Daytime Telephone Number2:",
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
"Personal Information - Daytime Telephone Number3:":{
"Source Key in IFN":"Mobile Phone",
"Mapping":[
[
"Personal Information - Daytime Telephone Number3:",
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
"Personal Information - Email Address:":{
"Source Key in IFN":"Primary Email Type",
"Mapping":[
[
"Personal Information - Email Address:",
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
"Coverage(s) to Terminate (select all that apply): Medical":{
"Source Key in IFN":"Covg End Date - Medical",
"Mapping":[
[
"Coverage(s) to Terminate (select all that apply): Medical",
true],
[
"\u200BCovg End Date - Medical",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Coverage(s) to Terminate (select all that apply): Dental":{
"Source Key in IFN":"Covg End Date - Dental",
"Mapping":[
[
"Coverage(s) to Terminate (select all that apply): Dental",
true],
[
"\u200BCovg End Date - Dental",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Coverage(s) to Terminate (select all that apply): Vision":{
"Source Key in IFN":"Covg End Date - Vision",
"Mapping":[
[
"Coverage(s) to Terminate (select all that apply): Vision",
true],
[
"\u200BCovg End Date - Vision",
"<Not Empty>"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reason for Termination:* Termination of Employment":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reason for Termination:* Termination of Employment",
true],
[
"\u200BEvent Reason",
"Termination of Employment"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Involuntary Termination":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Involuntary Termination",
true],
[
"\u200BEvent Reason",
"Involuntary Termination"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Reduction in Hours / Retirement":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Reduction in Hours / Retirement",
true],
[
"\u200BEvent Reason",
"Reduction in Hours / Retirement"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"No Longer Eligible Employee":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"No Longer Eligible Employee",
true],
[
"\u200BEvent Reason",
"No Longer Eligible Employee"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Medicare Eligible":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Medicare Eligible",
true],
[
"\u200BEvent Reason",
"Medicare Eligible"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Death":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Death",
true],
[
"\u200BEvent Reason",
"Death"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Other":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Other",
true],
[
"\u200BEvent Reason",
"Other"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Gross Misconduct":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Gross Misconduct",
true],
[
"\u200BEvent Reason",
"Gross Misconduct"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Active Military Duty":{
"Source Key in IFN":"Event Reason",
"Mapping":[
[
"Active Military Duty",
true],
[
"\u200BEvent Reason",
"Active Military Duty"]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Event Date:*":{
"Source Key in IFN":"Termination Date",
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
"Department Number:":{
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
"Has the Employee's Address Changed?* Yes":{
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
"Has the Employee's Address Changed?* No":{
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
"Has the Employee's Address Changed?* - Address:*":{
"Source Key in IFN":"",
"Mapping":[
[
"Has the Employee's Address Changed?* - Address:*",
false]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Has the Employee's Address Changed?* - City:*":{
"Source Key in IFN":"",
"Mapping":[
[
"Has the Employee's Address Changed?* - City:*",
false]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Has the Employee's Address Changed?* - State:*":{
"Source Key in IFN":"",
"Mapping":[
[
"Has the Employee's Address Changed?* - State:*",
false]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Has the Employee's Address Changed?* - Zip Code:*":{
"Source Key in IFN":"",
"Mapping":[
[
"Has the Employee's Address Changed?* - Zip Code:*",
false]]
,
"Calculation":[
]
,
"Format":{
}
}
,
"Date COBRA Billing Begins (Date BlueCross BlueShield of Tennessee starts billing COBRA participant):*":{
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
"Contact Information for COBRA Questions: Contact Name:":{
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
"Contact Information for COBRA Questions:  Telephone No1":{
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
"Contact Information for COBRA Questions:  Telephone No2":{
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
"Contact Information for COBRA Questions:  Telephone No3":{
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
}

