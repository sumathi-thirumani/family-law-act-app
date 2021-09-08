import store from '@/store';

export function SearchForChildrenData(stepName){
  
    let children = [];

    const steps = store.state.Application.steps
    const stPgNo = store.state.Application.stPgNo;

    if(stepName == 'FLM'){
        children = PO();   if(children.length>0) return children
        children = PPM();  if(children.length>0) return children
        children = RELOC();if(children.length>0) return children
        children = CM();                         return children
    }

    if(stepName == 'CM'){
        children = FLM();  if(children.length>0) return children
        children = PO();   if(children.length>0) return children
        children = PPM();  if(children.length>0) return children
        children = RELOC();                      return children
    }  

    if(stepName == 'PPM'){
        children = FLM();  if(children.length>0) return children
        children = PO();   if(children.length>0) return children
        children = RELOC();if(children.length>0) return children
        children = CM();                         return children
    }   

    if(stepName == 'RELOC'){
        children = FLM();  if(children.length>0) return children
        children = PO();   if(children.length>0) return children
        children = PPM();  if(children.length>0) return children
        children = CM();                         return children
    } 
    
    return children
    

    // PO(4) FLM(5) CM(2) PPM(4) RELOC(3)

    function PO(){ //4-Fields               
        const stepPO = steps[stPgNo.PO._StepNo]
        const childrenData =[];

        if( stepPO.active && 
            stepPO.pages[stPgNo.PO.ProtectionFromWhom].active &&
            stepPO.result?.protectionFromWhomSurvey?.data?.allchildren?.length>0
        ){            
            const children = stepPO.result.protectionFromWhomSurvey.data.allchildren;
            let inx= 0;
            for(const child of children){
                childrenData.push({
                    name:          child.childName, 
                    dob:           child.childDOB, 
                    relation:      '',
                    opRelation:    child.childRelationship,  
                    currentLiving: child.childLivingWith, 
                    id:            ++inx
                })
            }
            // childDOB: "2020-01-03"
            // childLivingWith: "grandparent"
            // childName: Object
            // childRelationship: "father" //opRelation
        }
        return childrenData
    }

    function FLM(){// 5-Fields        
        const stepFLM =  steps[stPgNo.FLM._StepNo]
        const childrenData =[];
        
        if( stepFLM.active &&
            stepFLM.pages[stPgNo.FLM.ChildrenInfo].active &&
            stepFLM.result?.childrenInfoSurvey?.data?.length>0
        ){            
            const children = stepFLM.result.childrenInfoSurvey.data;
            let inx= 0;
            for(const child of children){
                childrenData.push({
                    name:          child.name, 
                    dob:           child.dob, 
                    relation:      child.relation,
                    opRelation:    child.opRelation,  
                    currentLiving: child.currentLiving,
                    id:            ++inx
                })
            }
            // currentLiving: "person"
            // dob: "2017-07-07"
            // id:1
            // name: Object {first: (...)last: (...)middle: (...)}
            // opRelation: "other party's relation"
            // relation: "your relation "
        }
        return childrenData
    }

    function CM(){// 2-Fields
        const stepCM =  steps[stPgNo.CM._StepNo]
        const childrenData =[];

        if( stepCM.active &&
            stepCM.pages[stPgNo.CM.CmChildrenInfo].active &&
            stepCM.result?.cmChildrenInfoSurvey?.data?.childData?.length>0 &&
            stepCM.result?.cmChildrenInfoSurvey?.data?.childRelatedType == "A party to the case and the case involves a child-related issue"
        ){            
            const children = stepCM.result.cmChildrenInfoSurvey.data.childData;
            let inx = 0;
            for(const child of children){
                childrenData.push({
                    name:          child.name, 
                    dob:           child.dob, 
                    relation:      '',
                    opRelation:    '',  
                    currentLiving: '',
                    id:            ++inx
                })
            }
            // dob: "2006-10-20"
            // id:1
            // name: Object
        }
        return childrenData
    }

    function PPM(){ // 4-Fields
        const stepPPM =  steps[stPgNo.PPM._StepNo]
        const childrenData =[];

        if( stepPPM.active &&
            stepPPM.pages[stPgNo.PPM.PpmChildrenInfo].active &&
            stepPPM.result?.ppmChildrenInfoSurvey?.data?.length>0
        ){            
            const children = stepPPM.result.ppmChildrenInfoSurvey.data;
            let inx = 0;
            for(const child of children){
                childrenData.push({
                    name:          child.name, 
                    dob:           child.dob, 
                    relation:      child.relation,
                    opRelation:    child.opRelation,  
                    currentLiving: '', 
                    id:            ++inx
                })
            }
            // dob: "2021-01-01"
            // id: 1
            // name: Object
            // opRelation: "describes itdescribes it"
            // relation: "describes it"
        }
        return childrenData
    }

    function RELOC(){//3-Fields        
        const stepRELOC =  steps[ stPgNo.RELOC._StepNo]
        const childrenData =[];

        if( stepRELOC.active &&
            stepRELOC.pages[stPgNo.RELOC.RelocChildrenInfo].active &&
            stepRELOC.result?.relocChildrenInfoSurvey?.data?.length>0
        ){            
            const children = stepRELOC.result.relocChildrenInfoSurvey.data;
            let inx = 0;
            for(const child of children){
                childrenData.push({
                    name:          child.name, 
                    dob:           child.dob, 
                    relation:      '',
                    opRelation:    '',  
                    currentLiving: child.currentLiving,
                    id:            ++inx
                })
            }
            // currentLiving: "living with"
            // dob: "2020-02-02"
            // id: 1
            // name: Object
        }
        return childrenData
    }
}