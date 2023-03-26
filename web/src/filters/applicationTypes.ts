export const FLA_Types = [
    {pathway:"protectionOrder",                             pdfType:"AAP",  appType:"FPO",           familyType:"PO",    fullName:"Protection Order"},
    {pathway:"protectionOrderneedPO",                       pdfType:"AAP",  appType:"New FPO",       familyType:"PO",    fullName:"New Protection Order"},
    {pathway:"protectionOrderchangePO",                     pdfType:"AAP",  appType:"Change FPO",    familyType:"PO",    fullName:"Change Protection Order"},
    {pathway:"protectionOrderterminatePO",                  pdfType:"AAP",  appType:"Terminate FPO", familyType:"PO",    fullName:"Terminate Protection Order"},

    {pathway:"familyLawMatter",                             pdfType:"FLC",  appType:"FLC",           familyType:"FLM",   fullName:"Family Law Matter"},
    {pathway:"familyLawMatterForm1",                        pdfType:"NTRF", appType:"NTRF",          familyType:"FLM",   fullName:"Notice to Resolve a Family Law Matter"},

    {pathway:"caseMgmt",                                    pdfType:"ACMO", appType:"ACMO",          familyType:"CM",    fullName:"Case Management"},
    {pathway:"caseMgmtForm11",                              pdfType:"ACMW", appType:"ACMW",          familyType:"CM",    fullName:"Case Management Form11"},

    {pathway:"priorityParenting",                           pdfType:"AXP",  appType:"AXP",           familyType:"PPM",   fullName:"Priority Parenting Matter"},

    {pathway:"childReloc",                                  pdfType:"APRC", appType:"APRC",          familyType:"RELOC", fullName:"Relocation of a Child"},

    {pathway:"agreementEnfrc",                              pdfType:"AFET", appType:"AFET",          familyType:"ENFRC", fullName:"Enforcement"},
    {pathway:"agreementEnfrc26",                            pdfType:"RFA",  appType:"RFA",           familyType:"ENFRC", fullName:"File an Agreement"},
    {pathway:"agreementEnfrc27",                            pdfType:"RDET", appType:"RDET",          familyType:"ENFRC", fullName:"File a Determination of Parenting Coordinator"},
    {pathway:"agreementEnfrc28",                            pdfType:"RORD", appType:"RORD",          familyType:"ENFRC", fullName:"File an Order"},

    {pathway:"replyFlm",                                    pdfType:"RPL",  appType:"RFLM",          familyType:"RFLM",  fullName:"Reply to Application About a Family Law Matter"},
    
    {pathway:"writtenResponse",                             pdfType:"WRA",   appType:"WRA",          familyType:"WR",    fullName:"Written Response to Application"},    
    {pathway:"replyCaseMgmt",                               pdfType:"WRA",   appType:"RCM",          familyType:"WR",    fullName:"Reply to Application for Case Management Order"},
    {pathway:"replyProtectionOrder",                        pdfType:"WRA",   appType:"RPO",          familyType:"WR",    fullName:"Reply to Application About a Protection Order"},
    {pathway:"replyPriorityParenting",                      pdfType:"WRA",   appType:"RPP",          familyType:"WR",    fullName:"Reply to Application About a Priority Parenting Matter"},
    {pathway:"replyChildReloc",                             pdfType:"WRA",   appType:"RCR",          familyType:"WR",    fullName:"Reply to Application for Order Prohibiting the Relocation of a Child"},
    {pathway:"replyAgreementEnfrc",                         pdfType:"WRA",   appType:"RAE",          familyType:"WR",    fullName:"Reply to Application About Enforcement"},
    {pathway:"replyFamilyMaintenanceEnfrc",                 pdfType:"WRA",   appType:"RFME",         familyType:"WR",    fullName:"Reply to Application for Order Under the Family Maintenance Enforcement Act"},
    
    {pathway:"replyCounterApplication",                     pdfType:"RCA",   appType:"RCA",          familyType:"CA",    fullName:"Reply to an Application About a Family Law Matter with Counter Application"},
    
    {pathway:"affidavit",                                   pdfType:"AFF",   appType:"AFF",          familyType:"AFF",  fullName:"Affidavit – General"}, 
    {pathway:"affidavitPersonalService",                    pdfType:"APS",   appType:"APS",          familyType:"APS",  fullName:"Affidavit of Personal service"},
    {pathway:"affidavitPersonalServicePO",                  pdfType:"APSP",  appType:"APSP",         familyType:"APSP",  fullName:"Affidavit of Personal Service of Protection Order"},
        
    {pathway:"certificateOfService",                        pdfType:"CSV",   appType:"CSV",          familyType:"CSV",    fullName:"Certificate of Service"},
    {pathway:"consentAdjournment",                          pdfType:"CONA",  appType:"CONA",         familyType:"CONA",   fullName:"Consent adjournment"},    
    {pathway:"consentOrder",                                pdfType:"COR",   appType:"COR",          familyType:"COR",    fullName:"Consent Order"},
    {pathway:"consentInformalTrial",                        pdfType:"CIFT",  appType:"CIFT",         familyType:"CIFT",   fullName:"Consent to an Informal Trial (Kamloops only)"},
    {pathway:"electronicFilingStatement",                   pdfType:"EFSP",  appType:"EFSP",         familyType:"EFSP",   fullName:"Electronic Filing Statement"},
    {pathway:"faxFilingCoverPage",                          pdfType:"FF",    appType:"FF",           familyType:"FF",     fullName:"Fax Filing Cover Page"},
    
    {pathway:"financialStatement",                          pdfType:"FS",    appType:"FS",           familyType:"FS",     fullName:"Financial Statement"},
    {pathway:"guardianshipAffidavit",                       pdfType:"GA",    appType:"GA",           familyType:"GA",     fullName:"Guardianship Affidavit"},  
    {pathway:"noticeOfAddressChange",                       pdfType:"NCD",   appType:"NCD",          familyType:"NCD",    fullName:"Notice of Address Change"},         
    {pathway:"noticeDiscontinuance",                        pdfType:"NDT",   appType:"NDT",          familyType:"NDT",    fullName:"Notice of Discontinuance"},
    {pathway:"noticeExemptionParentingEducationProgram",    pdfType:"PASE",  appType:"PASE",         familyType:"PASE",   fullName:"Notice of Exemption from Parenting Education Program"},
    {pathway:"noticeIntentionProceed",                      pdfType:"NPR",   appType:"NPR",          familyType:"NPR",    fullName:"Notice of Intention to Proceed"},        
    {pathway:"noticeLawyerChild",                           pdfType:"NLC",   appType:"NLC",          familyType:"NLC",    fullName:"Notice of Lawyer for Child"},
    {pathway:"noticeLawyerParty",                           pdfType:"NLP",   appType:"NLP",          familyType:"NLP",    fullName:"Notice of Lawyer for Party"},    
    {pathway:"noticeParticipation",                         pdfType:"NP",    appType:"NP",           familyType:"NP",     fullName:"Notice of Participation"},    
    {pathway:"noticeRemoveLawyerChild",                     pdfType:"NLCR",  appType:"NLCR",         familyType:"NLCR",   fullName:"Notice of Removal of Lawyer for Child"},
    {pathway:"noticeRemoveLawyerParty",                     pdfType:"NLPR",  appType:"NLPR",         familyType:"NLPR",   fullName:"Notice of Removal of Lawyer for Party"},
    {pathway:"order",                                       pdfType:"ORD",   appType:"ORD",          familyType:"ORD",    fullName:"Order – General"},
    {pathway:"referralRequest",                             pdfType:"REF",   appType:"REF",          familyType:"REF",    fullName:"Referral Request"},
    {pathway:"requestScheduling",                           pdfType:"RQS",   appType:"RQS",          familyType:"RQS",    fullName:"Request for Scheduling"},    
    {pathway:"requestServiceDocuments",                     pdfType:"RFS",   appType:"RFS",          familyType:"RFS",    fullName:"Request for Service of Documents"},
    {pathway:"requestServiceFPO",                           pdfType:"RPS",   appType:"RPS",          familyType:"RPS",    fullName:"Request for Service of Family Protection Order"},
    {pathway:"trialReadinessStatement",                     pdfType:"TRIS",  appType:"TRIS",         familyType:"TRIS",   fullName:"Trial Readiness Statement"},

    {pathway:"summons",                                     pdfType:"SUM",   appType:"SUM",          familyType:"SUM",    fullName:"Summons – General"},
    {pathway:"summonsCommintal",                            pdfType:"SCH",   appType:"SCH",          familyType:"SCH",    fullName:"Summons to a Committal Hearing"},
    {pathway:"summonsDefault",                              pdfType:"SDH",   appType:"SDH",          familyType:"SDH",    fullName:"Summons to a Default Hearing"},
    {pathway:"requisition",                                 pdfType:"REQ",   appType:"REQ",          familyType:"REQ",    fullName:"Requisition"},
    {pathway:"requestTeleconference",                       pdfType:"RFT",   appType:"RFT",          familyType:"RFT",    fullName:"Request to be heard by teleconference or videoconference"}    
];