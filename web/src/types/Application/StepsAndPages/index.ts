export interface stepsAndPagesNumberInfoType{
    GETSTART: GETSTARTstPgTypes;
    PO: POstPgTypes;
    COMMON: COMMONstPgTypes;
    RFLM: RFLMstPgTypes;
    WR: WRstPgTypes;
    CA: CAstPgTypes;    
    FLM: FLMstPgTypes;
    CM: CMstPgTypes;
    PPM: PPMstPgTypes;
    RELOC: RELOCstPgTypes;
    ENFRC: ENFRCstPgTypes;
    CONNECT: CONNECTstPgTypes;
    OTHER: OTHERstPgTypes;
    NCD: NCDstPgTypes;
    NDT: NDTstPgTypes;
    NPR: NPRstPgTypes;
    NLC: NLCstPgTypes;
    SUBMIT: SUBMITstPgTypes;
}
 
export interface GETSTARTstPgTypes{
    _StepNo: number;   
    
    SelectActivity: number;
    ReplyToApplication: number;
    GettingStarted: number; // Apply for an order
    FlmInfo: number;
}

export interface POstPgTypes{
    _StepNo: number;
    
    PoQuestionnaire: number;
    YourinformationPO: number;
    ProtectionFromWhom: number;
    PoFilingLocation: number;
    RemovePerson: number;
    NoGo: number;
    NoContact: number;
    WeaponsFirearms: number;
    Background: number;
    YourStory: number;
    OtherParty: number;
    About: number;
    Urgency: number;
    ReviewYourAnswers: number;
    PreviewForms: number;    
}
  
export interface COMMONstPgTypes{
    _StepNo: number;
    
    SafetyCheck: number;
    Notice: number;
    YourInformation: number;
    OtherPartyCommon: number;
    FilingLocation: number;
}

export interface RFLMstPgTypes{
    _StepNo: number;  

    RflmQuestionnaire: number;
    RflmCounterApp: number;
    RflmBackground: number;
    RflmChildrenInfo: number;  
    ReplyNewParentingArrangements: number;
    ReplyNewParentalResponsibilities: number;
    ReplyNewParentingTime: number;
    ReplyNewConditionsParentingTime: number;
    ReplyExistingParentingArrangements: number;
    ReplyNewChildSupport: number;
    RelationshipToChild: number;
    DisagreeChildSupport: number;
    RflmCalculatingChildSupport: number;
    ReplyExistingChildSupport: number;
    RflmUnpaidChildSupport: number;
    DisagreeExistingChildSupport: number; 
    ReplyNewContactWithChild: number;
    DisagreeContactWithChild: number;
    ReplyExistingContactWithChild: number;
    ReplyAppointingGuardianOfChild: number;
    DisagreeAppointingGuardianOfChild: number;
    ReplyCancellingGuardianOfChild: number;
    DisagreeCancellingGuardianOfChild: number;
    ReplyNewSpouseSupport: number;
    RelationshipToOtherParty: number;
    DisagreeSpouseSupport: number;
    RflmSpouseSupportOrder: number;
    RflmCalculatingSpouseSupport: number;
    ReplyExistingSpouseSupport: number;
    RflmUnpaidSpouseSupport: number;
    DisagreeExistingSpouseSupport: number;    
    RflmAdditionalDocuments: number;
    YourApplication: number;
    ParentingArrangements: number;
    ParentalResponsibilities: number;
    ParentingTime: number;
    OtherParentingArrangements: number;
    ParentingOrderAgreement: number;
    AboutParentingArrangements: number;
    ParentingArrangementChanges: number;
    BestInterestsOfChild: number;
    ChildSupport: number;
    ChildSupportCurrentArrangements: number;
    IncomeAndEarningPotential: number;
    AboutChildSupportOrder: number;
    ChildSupportOrderAgreement: number;
    AboutExistingChildSupport: number;
    CalculatingChildSupport: number;
    UndueHardship: number;
    SpecialAndExtraordinaryExpenses: number;
    AboutChildSupportChanges: number;
    UnpaidChildSupport: number;
    ContactWithChild: number;
    ContactWithChildOrder: number;
    AboutContactWithChildOrder: number;
    ContactWithChildBestInterestsOfChild: number;
    GuardianOfChild: number;
    GuardianOfChildBestInterestsOfChild: number;
    IndigenousAncestryOfChild: number;
    SpousalSupport: number;
    SpousalSupportIncomeAndEarningPotential: number;
    AboutSpousalSupportOrder: number;
    ExistingSpousalSupportOrderAgreement: number;
    ExistingSpousalSupportFinalOrder: number;
    ExistingSpousalSupportAgreement: number;
    CalculatingSpousalSupport: number;
    AboutExistingSpousalSupportOrder: number;
    UnpaidSpousalSupport: number;
    FlmAdditionalDocuments: number;
    ReviewYourAnswersRFLM: number;
    PreviewFormsRFLM: number; 
}

export interface WRstPgTypes{
    _StepNo: number;  

    WrReplyingToApplication: number;  
    AgreeDisagree: number;
    AboutWrittenResponseOrder: number; 

    ReviewYourAnswersWR: number;
    PreviewFormsWR: number;
}

export interface CAstPgTypes{
    _StepNo: number;  

    CounterApplication: number;   
}

export interface FLMstPgTypes{
    _StepNo: number;

    FlmQuestionnaire: number;
    FlmBackground: number;
    ChildrenInfo: number;
    ParentingArrangements: number;
    ParentalResponsibilities: number;
    ParentingTime: number;
    OtherParentingArrangements: number;
    ParentingOrderAgreement: number;
    AboutParentingArrangements: number;
    ParentingArrangementChanges: number;
    BestInterestsOfChild: number;
    ChildSupport: number;
    ChildSupportCurrentArrangements: number;
    IncomeAndEarningPotential: number;
    AboutChildSupportOrder: number;
    ChildSupportOrderAgreement: number;
    AboutExistingChildSupport: number;
    CalculatingChildSupport: number;
    UndueHardship: number;
    SpecialAndExtraordinaryExpenses: number;
    AboutChildSupportChanges: number;
    UnpaidChildSupport: number;
    ContactWithChild: number;
    ContactWithChildOrder: number;
    AboutContactWithChildOrder: number;
    ContactWithChildBestInterestsOfChild: number;
    GuardianOfChild: number;
    GuardianOfChildBestInterestsOfChild: number;
    IndigenousAncestryOfChild: number;
    SpousalSupport: number;
    SpousalSupportIncomeAndEarningPotential: number;
    AboutSpousalSupportOrder: number;
    ExistingSpousalSupportOrderAgreement: number;
    ExistingSpousalSupportFinalOrder: number;
    ExistingSpousalSupportAgreement: number;
    CalculatingSpousalSupport: number;
    AboutExistingSpousalSupportOrder: number;
    UnpaidSpousalSupport: number;
    FlmAdditionalDocuments: number;
    ReviewYourAnswersFLM: number;
    PreviewFormsFLM: number;
}

export interface CMstPgTypes{
    _StepNo: number;

    CmQuestionnaire: number;
    OtherPersons: number;
    WithoutNoticeOrAttendance: number;
    ByConsent: number;
    CmNotice: number;
    Scheduling: number;
    AboutCaseManagementOrder: number;
    CmChildrenInfo: number;
    AttendanceUsingElectronicCommunication: number;
    ChangingOrCancellingAServiceOrNotice: number;
    ChangingOrCancellingAnyOtherRequirement: number;
    RequiringAccessToInformation: number;
    RecognizingAnOrderFromOutsideBc: number; 
    ContactInformationOtherParty: number;   
    ReviewYourAnswersCM: number;
    PreviewForm10CM: number;
    PreviewForm11CM: number;
}

export interface PPMstPgTypes{
    _StepNo: number;
    
    PpmQuestionnaire: number;
    PriorityParentingMatterOrder: number;
    PpmBackground: number;
    PpmChildrenInfo: number;
    AboutPriorityParentingMatterOrder: number;
    PpmIndigenousAncestryOfChild: number;
    PpmAdditionalDocuments: number;
    ReviewYourAnswersPPM: number;
    PreviewFormsPPM: number;  
}

export interface RELOCstPgTypes{
    _StepNo: number;
    
    RelocQuestionnaire: number;
    RelocChildrenInfo: number;
    RelocChildBestInterestInfo: number;
    ReviewYourAnswersRELOC: number;
    PreviewFormsRELOC: number;
}

export interface ENFRCstPgTypes{
    _StepNo: number;
    
    EnfrcQuestionnaire: number;
    DetermineAnAmountOwingForExpenses: number;
    DetermineArrears: number;
    EnforceAgreementOrOrder: number;
    EnforceChangeOrSetAsideDetermination: number;
    AboutTheOrderEnforcement: number;
    ReviewYourAnswersENFRC: number;
    PreviewForm26ENFRC: number;
    PreviewForm27ENFRC: number;
    PreviewForm28ENFRC: number;
    PreviewForm29ENFRC: number;   
}

export interface CONNECTstPgTypes{
    _StepNo: number;
    
    ReviewAndConnect: number;   
}

export interface OTHERstPgTypes{
    _StepNo: number;

    OtherForms: number; 
    CompleteOtherForms: number;   
    OtherFormFilingLocation: number;
}

export interface NCDstPgTypes{
    _StepNo: number;
    
    AddressChange: number;
    AddressChangeNotice: number; 
    ReviewYourAnswersNCD: number;
    PreviewFormsNCD: number;
}

export interface NDTstPgTypes{
    _StepNo: number;    
    
    NoticeDiscontinuance: number;
    DiscontinuanceInformation: number;
    MoreInformation: number;
    ReviewYourAnswersNDT: number;
    PreviewFormsNDT: number;
}

export interface NPRstPgTypes{
    _StepNo: number;

    NoticeIntentionProceed: number;
    YourInformationNpr: number;    
    OtherPartyNpr: number;
    ReviewYourAnswersNPR: number;
    PreviewFormsNPR: number;
}

export interface NLCstPgTypes{
    _StepNo: number;

    NoticeLawyerChild: number;
    LawyerChildInformation: number;
    MoreInformationNLC: number;
    ReviewYourAnswersNLC: number;
    PreviewFormsNLC: number;
}

export interface SUBMITstPgTypes{
    _StepNo: number;

    FilingOptions: number;
    ReviewAndPrint: number;
    ReviewAndSave: number;
    ReviewAndSubmit: number;
    OtherFile: number;
    NextSteps: number;    
}