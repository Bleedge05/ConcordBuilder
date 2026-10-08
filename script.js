//-------------------
//PAGE DATA
//-------------------

const circlePointTotal= document.getElementById("circlePointTotal");
const pointAllotmentCircle= document.getElementById("pointAllotmentCircle");
const validCircle= document.getElementById("validCircle");
const exportCircle = document.getElementById("exportCircle");
const launchPlay = document.getElementById("launchPlay");
const circleName = document.getElementById("circleName");
const clearAll = document.getElementById("clearAll");
const collapseButtons=document.querySelectorAll(".collapseButton");

const circleLevelTotal= document.getElementById("circleLevelTotal");
const levelAllotmentCircle= document.getElementById("levelAllotmentCircle");

const sorcerer1Name = document.getElementById("sorcerer1Name");
const sorcerer1 = document.getElementById("sorcerer1");
const aspect1 = document.getElementById("aspect1");
const sorcererLevel1 = document.getElementById("sorcererLevel1");
const sorcererInfoButton1 = document.getElementById("sorcererInfoButton1");
const sorcererInfoText1 = document.getElementById("sorcererInfoText1");

const race1 = document.getElementById("race1");
const raceInfoButton1 = document.getElementById("raceInfoButton1");
const raceInfoText1 = document.getElementById("raceInfoText1");

const deity1 = document.getElementById("deity1");
const deityInfoButton1 = document.getElementById("deityInfoButton1");
const deityInfoText1 = document.getElementById("deityInfoText1");

const Health1 = document.getElementById("Health1");
const Strength1 = document.getElementById("Strength1");
const Mana1 = document.getElementById("Mana1");
const Void1 = document.getElementById("Void1");
const Move1 = document.getElementById("Move1");
const Defense1 = document.getElementById("Defense1");

const familiarList1=document.getElementById("familiarList1");
const addFamiliar1=document.getElementById("addFamiliar1");

const retainerList1=document.getElementById("retainerList1");
const addRetainer1=document.getElementById("addRetainer1");

const itemList1=document.getElementById("itemList1");
const addItem1=document.getElementById("addItem1");

const sorcerer1PointTotal=document.getElementById("sorcerer1PointTotal");
const pointAllotmentSorcerer1=document.getElementById("pointAllotmentSorcerer1");


const sorcerer2Name = document.getElementById("sorcerer2Name");
const sorcerer2 = document.getElementById("sorcerer2");
const sorcererLevel2 = document.getElementById("sorcererLevel2");
const sorcererInfoButton2 = document.getElementById("sorcererInfoButton2");
const sorcererInfoText2 = document.getElementById("sorcererInfoText2");

const race2 = document.getElementById("race2");
const raceInfoButton2 = document.getElementById("raceInfoButton2");
const raceInfoText2 = document.getElementById("raceInfoText2");

const deity2 = document.getElementById("deity2");
const deityInfoButton2 = document.getElementById("deityInfoButton2");
const deityInfoText2 = document.getElementById("deityInfoText2");

const Health2 = document.getElementById("Health2");
const Strength2 = document.getElementById("Strength2");
const Mana2 = document.getElementById("Mana2");
const Void2 = document.getElementById("Void2");
const Move2 = document.getElementById("Move2");
const Defense2 = document.getElementById("Defense2");

const familiarList2=document.getElementById("familiarList2");
const addFamiliar2=document.getElementById("addFamiliar2");

const retainerList2=document.getElementById("retainerList2");
const addRetainer2=document.getElementById("addRetainer2");

const itemList2=document.getElementById("itemList2");
const addItem2=document.getElementById("addItem2");

const sorcerer2PointTotal=document.getElementById("sorcerer2PointTotal");
const pointAllotmentSorcerer2=document.getElementById("pointAllotmentSorcerer2");

const addSorcerer3 = document.getElementById("addSorcerer3");
const sorcerer3Container = document.getElementById("sorcerer3Container");
const deleteSorcerer3 = document.getElementById("deleteSorcerer3");

const sorcerer3Name = document.getElementById("sorcerer3Name");
const sorcerer3 = document.getElementById("sorcerer3");
const sorcererLevel3 = document.getElementById("sorcererLevel3");
const sorcererInfoButton3 = document.getElementById("sorcererInfoButton3");
const sorcererInfoText3 = document.getElementById("sorcererInfoText3");

const race3 = document.getElementById("race3");
const raceInfoButton3 = document.getElementById("raceInfoButton3");
const raceInfoText3 = document.getElementById("raceInfoText3");

const deity3 = document.getElementById("deity3");
const deityInfoButton3 = document.getElementById("deityInfoButton3");
const deityInfoText3 = document.getElementById("deityInfoText3");

const Health3 = document.getElementById("Health3");
const Strength3 = document.getElementById("Strength3");
const Mana3 = document.getElementById("Mana3");
const Void3 = document.getElementById("Void3");
const Move3 = document.getElementById("Move3");
const Defense3 = document.getElementById("Defense3");

const familiarList3=document.getElementById("familiarList3");
const addFamiliar3=document.getElementById("addFamiliar3");

const retainerList3=document.getElementById("retainerList3");
const addRetainer3=document.getElementById("addRetainer3");

const itemList3=document.getElementById("itemList3");
const addItem3=document.getElementById("addItem3");

const sorcerer3PointTotal=document.getElementById("sorcerer3PointTotal");
const pointAllotmentSorcerer3=document.getElementById("pointAllotmentSorcerer3");

//-------------------
//EVENTS
//-------------------
exportCircle.addEventListener("click", function(){ 
        const circle = buildCircle();
        exportCirclePdf(circle);
});

clearAll.addEventListener("click", function(){
        
        for (const select of document.querySelectorAll("select")){
                select.selectedIndex=0;
        }
        for (const input of document.querySelectorAll("input")){
                input.value="";
        }


        location.reload()
});

launchPlay.addEventListener("click",function(){
        const circle = buildCircle();
        startPlayMode(circle);
});

for (const button of collapseButtons){
        button.addEventListener("click", function (){
                const body = document.getElementById(button.dataset.target);
                body.hidden = !body.hidden;
                button.textContent = body.hidden ? "Expand":"Collapse";
        });
}
sorcerer1.addEventListener("change", function() {updateCircle(1)});
sorcerer1.addEventListener("change", function() {hideSorcererInfo(1)});
sorcererInfoButton1.addEventListener("click",function() {showSorcererInfo(1)});
sorcererLevel1.addEventListener("change", function() {updateCircle(1)});
race1.addEventListener("change", function() {updateCircle(1)});
race1.addEventListener("change", function() {hideRaceInfo(1)});
raceInfoButton1.addEventListener("click",function() {showRaceInfo(1)});
deity1.addEventListener("change", function() {updateCircle(1)});
deity1.addEventListener("change", function() {hideDeityInfo(1)});
deityInfoButton1.addEventListener("click",function() {showDeityInfo(1)});

addFamiliar1.addEventListener("click", function() {updateFamiliar(1)});
addRetainer1.addEventListener("click", function() {updateRetainer(1)});
addItem1.addEventListener("click", function() {updateItem(1)});

sorcerer2.addEventListener("change", function() {updateCircle(2)});
sorcerer2.addEventListener("change", function() {hideSorcererInfo(2)});
sorcererInfoButton2.addEventListener("click",function() {showSorcererInfo(2)});
sorcererLevel2.addEventListener("change", function() {updateCircle(2)});
race2.addEventListener("change", function() {updateCircle(2)});
race2.addEventListener("change", function() {hideRaceInfo(2)});
raceInfoButton2.addEventListener("click",function() {showRaceInfo(2)});
deity2.addEventListener("change", function() {updateCircle(2)});
deity2.addEventListener("change", function() {hideDeityInfo(2)});
deityInfoButton2.addEventListener("click",function() {showDeityInfo(2)});

addFamiliar2.addEventListener("click", function() {updateFamiliar(2)});
addRetainer2.addEventListener("click", function() {updateRetainer(2)});
addItem2.addEventListener("click", function() {updateItem(2)});

addSorcerer3.addEventListener("click", function(){
        sorcerer3Container.style.display = "block";
        addSorcerer3.style.display = "none";
});


deleteSorcerer3.addEventListener("click", delete3rdSorcerer);

sorcerer3.addEventListener("change", function() {updateCircle(3)});
sorcerer3.addEventListener("change", function() {hideSorcererInfo(3)});
sorcererInfoButton3.addEventListener("click",function() {showSorcererInfo(3)});
sorcererLevel3.addEventListener("change", function() {updateCircle(3)});
race3.addEventListener("change", function() {updateCircle(3)});
race3.addEventListener("change", function() {hideRaceInfo(3)});
raceInfoButton3.addEventListener("click",function() {showRaceInfo(3)});
deity3.addEventListener("change", function() {updateCircle(3)});
deity3.addEventListener("change", function() {hideDeityInfo(3)});
deityInfoButton3.addEventListener("click",function() {showDeityInfo(3)});

addFamiliar3.addEventListener("click", function() {updateFamiliar(3)});
addRetainer3.addEventListener("click", function() {updateRetainer(3)});
addItem3.addEventListener("click", function() {updateItem(3)});

//-------------------
// Master FUNCTIONS
//-------------------

function updateCircle(i){
        updateRaceoptions(i);
        updateSorcerer(i);
        validateCircle(i);
        updateItemOptions(i);

}



//-------------------
//FUNCTIONS
//-------------------
function buildCircle(){
        
        const sorcerers = [];
        for (let i=1; i<=3; i++){
                sorcerers.push(buildSorcererData(i));
        }
        const circle = {sorcerers: sorcerers};
        console.log(circle);
        return circle
        
}

function startPlayMode(circle){

        sessionStorage.setItem("concordCircle", JSON.stringify(circle));
        sessionStorage.removeItem("concordPlayState");
        window.open("play.html", "_self");
}
async function exportCirclePdf(circle){
        validateCircle();


        if (validCircle.textContent !== "") {
                if(!confirm("This Circle is not legal. Are you sure you want to export?")){
                        return;
                }
        }

        //new
        // const pdfWindow = window.open("", "_blank");

        // if (!pdfWindow) {
        //         alert("Please allow pop-ups to export the pdf.");
        // }

        //pdfWindow.document.body.innerHTML = "<p>1 - Generating Concord Circle Sheet. </p>"
        //End new

        //Load Template PDF
const fetchStart = performance.now();
        const pdfBytes = await fetch("templates/CircleSheet.pdf")
        .then (response =>response.arrayBuffer());
const fetchEnd = performance.now();
const loadStart = performance.now();
        const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
const loadEnd = performance.now();

const getFieldsStart = performance.now();

        const form = pdfDoc.getForm();

        const fields = form.getFields();

        const fieldMap ={};

        for (const field of fields){
                fieldMap[field.getName()]=field;
        }
const getFieldsEnd = performance.now();
const inputFieldsStart = performance.now();
        //header content
        fieldMap["Circle Level"].setText(circleLevelTotal.textContent); 
        fieldMap["Circle points"].setText(circlePointTotal.textContent); 
        fieldMap["Circle Name 1"].setText(circleName.value); 
        

        //loop across sorcerers
        for (let xx = 0; xx <=2; xx++){
                //Input field
                fieldMap["Name_"+Number(xx+1)].setText(circle.sorcerers[xx].name??""); 
                fieldMap["Level_"+Number(xx+1)].setText(circle.sorcerers[xx].level??"");
                fieldMap["Class_"+Number(xx+1)].setText(circle.sorcerers[xx].class??"");
                fieldMap["Race_"+Number(xx+1)].setText(circle.sorcerers[xx].race??"");
                fieldMap["Deity_"+Number(xx+1)].setText(deities[circle.sorcerers[xx].deity]?.name??"");

                fieldMap["Racial Ability_"+Number(xx+1)].setText(races[circle.sorcerers[xx].race]?.exportRule[0]??"");
                fieldMap["Deity Ability_"+Number(xx+1)].setText(deities[circle.sorcerers[xx].deity]?.exportRule[0]??"");
                fieldMap["Other Ability_"+Number(2*xx+1)].setText(races[circle.sorcerers[xx].race]?.exportRule[1]??"");
                //Reserved for Briar Witch Aspect
                fieldMap["Other Ability_"+Number(2*xx+2)].setText(circle.sorcerers[xx].aspect??"");

                fieldMap["Health_"+Number(xx+1)].setText(String(circle.sorcerers[xx].characteristics.health)??"");
                fieldMap["Strength_"+Number(xx+1)].setText(String(circle.sorcerers[xx].characteristics.strength)??"");
                fieldMap["Mana_"+Number(xx+1)].setText(String(circle.sorcerers[xx].characteristics.mana)??"");
                fieldMap["Void_"+Number(xx+1)].setText(String(circle.sorcerers[xx].characteristics.void)??""); 
                fieldMap["Move_"+Number(xx+1)].setText(String(circle.sorcerers[xx].characteristics.move)??"");
                fieldMap["Defense_"+Number(xx+1)].setText(String(circle.sorcerers[xx].characteristics.defense)??"");    

                fieldMap["Familiar_1_"+Number(xx+1)].setText(familiars[circle.sorcerers[xx].familiar[0]]?.name??"");
                fieldMap['FamiliarPoints_'+Number(xx+1)].setText(String(circle.sorcerers[xx].familiarPoints??""));

                fieldMap["Retainer_1_"+Number(xx+1)].setText(retainers[circle.sorcerers[xx].retainers[0]]?.name??"");
                fieldMap["Retainer_2_"+Number(xx+1)].setText(retainers[circle.sorcerers[xx].retainers[1]]?.name??"");

                //Magic Items
                for (let i = 1; i <= 8; i++) {
                        const fieldName1 = 'Magic Items '+i+'_'+Number(xx+1);
                        const fieldName2 = 'Cost '+i+'_'+Number(xx+1);;
                        fieldMap[fieldName1].setText(items[circle.sorcerers[xx].items[i-1]]?.name??"");
                        fieldMap[fieldName2].setText(String(items[circle.sorcerers[xx].items[i-1]]?.cost??""));
                };

                //Familiar Info on Back                       
                        //get trait
                        
                        fieldMap['Familiar_'+Number(1+xx)].setText(String(circle.sorcerers[xx].familiar[0]??""));
                        const famStats = getFamiliarCharacteristics(circle.sorcerers[xx]);
                        fieldMap['fam_Health_' + Number(1 + xx)].setText(String(famStats?.health ?? ""));
                        fieldMap['fam_Strength_' + Number(1 + xx)].setText(String(famStats?.strength ?? ""));
                        fieldMap['fam_Mana_' + Number(1 + xx)].setText(String(famStats?.mana ?? ""));
                        fieldMap['fam_Void_' + Number(1 + xx)].setText(String(famStats?.void ?? ""));
                        fieldMap['fam_Move_' + Number(1 + xx)].setText(String(famStats?.move ?? ""));
                        fieldMap['fam_Defense_' + Number(1 + xx)].setText(String(famStats?.defense ?? ""));
                        
                        fieldMap['Trait_'+Number(1+xx)].setText(String(circle.sorcerers[xx].familiar[1]??""));
                        fieldMap['fam_item_1_'+Number(1+xx)].setText(String(circle.sorcerers[xx].familiar[2]??""));
                        fieldMap['fam_item_2_'+Number(1+xx)].setText(String(circle.sorcerers[xx].familiar[3]??""));


                //Retainer Info on Back
                for (let i = 0; i <= 1; i++) {
                        fieldMap['Retainer_'+Number(i+1+2*xx)].setText(retainers[circle.sorcerers[xx].retainers[i]]?.name??"");
                        fieldMap['ret_Health_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.health??""));
                        fieldMap['ret_Strength_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.strength??""));
                        fieldMap['ret_Mana_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.mana??""));
                        fieldMap['ret_Void_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.void??""));
                        fieldMap['ret_Move_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.move??""));
                        fieldMap['ret_Defense_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.defense??""));
                        fieldMap['ret_Ability_1_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.abilities[0]??""));
                        fieldMap['ret_Ability_2_'+Number(i+1+2*xx)].setText(String(retainers[circle.sorcerers[xx].retainers[i]]?.abilities[1]??""));

                };
        };
const inputFieldsEnd = performance.now();
        //pdfWindow.document.body.innerHTML = "<p>2 - done inputting stats. </p>"
const saveStart = performance.now();
        //save modified PDF
        const finshedPdf = await pdfDoc.save();
       // pdfWindow.document.body.innerHTML = "<p>3 - saving...</p>"
const saveEnd = performance.now();
const finalStart = performance.now();


        //create broswer object
        const blob = new Blob(
                        [finshedPdf], { type: "application/pdf"}
        );

        const url = URL.createObjectURL(blob);
        //pdfWindow.document.body.innerHTML = "<p>4 - opening...</p>"

        const isMobile = navigator.userAgentData?.mobile;
        if(isMobile){
                window.location.href = url;
        }else{
                const pdfWindow = window.open("", "_blank");
                pdfWindow.location.href = url;
        }
const finalEnd = performance.now();

console.log("Fetch :" + Number(fetchEnd-fetchStart));
console.log("load" + Number(loadEnd-loadStart));
console.log("getField" + Number(getFieldsEnd-getFieldsStart));
console.log("inputFields" + Number(inputFieldsEnd-inputFieldsStart));
console.log("save" + Number(saveEnd-saveStart));
console.log("finalstart" + Number(finalEnd-finalStart));

        // //create temporary link
        // const link = document.createElement("a");
        // link.href = url;
        // link.download="untitled.pdf";

        // window.open(url, "_blank");
        
        // URL.revokeObjectURL(url);


}
function getFamiliarCharacteristics(sorcerer) {

    const familiarKey = sorcerer.familiar[0];

    if (!familiarKey || familiarKey === "EMPTY") {
        return null;
    }

    const familiar = familiars[familiarKey];

    const characteristics = {
        health: familiar.health,
        strength: familiar.strength,
        mana: familiar.mana,
        void: familiar.void,
        move: familiar.move,
        defense: familiar.defense
    };

    // Familiar items start at familiar[2]
    for (let j = 2; j < sorcerer.familiar.length; j++) {

        const itemKey = sorcerer.familiar[j];

        if (!itemKey || itemKey === "EMPTY") continue;

        const selectedItem = items[itemKey];

        if (selectedItem?.startingMods) {
            for (const stat in selectedItem.startingMods) {
                characteristics[stat] += selectedItem.startingMods[stat];
            }
        }
    }

    // Trait effects
    if (sorcerer.familiar[1] === "MagicAttuned") {
        characteristics.void = 1;
    }

    return characteristics;
}

function buildSorcererData(i){
        const familiarList = document.getElementById("familiarList"+i);
        const retainerList = document.getElementById("retainerList"+i);
        const itemList = document.getElementById("itemList"+i);
        const sorcererLevel = document.getElementById("sorcererLevel"+i);

        const itemSelections=itemList.querySelectorAll(".itemSelect"); 
        const allItemSelections = new Set();

        for (const itemSelect of itemSelections){
                if (itemSelect.value === "EMPTY"){
                        continue;
                }

                allItemSelections.add(itemSelect.value);
        }

        const familiarItemSelections=familiarList.querySelectorAll(".familiarItemSelect"); 
        const allFamiliarItemSelections = new Set();

        allFamiliarItemSelections.add(familiarList.querySelector(".familiarSelect")?.value);
        allFamiliarItemSelections.add(familiarList.querySelector(".familiarTrait")?.value);

        let familiarPoints =0;
        const familiarValue = familiarList.querySelector(".familiarSelect")?.value;
        if (familiarValue && familiarValue!=="EMPTY"){
                familiarPoints+=6-Number(sorcererLevel.value);
        }

        for (const familiarItemSelect of familiarItemSelections){
                if (familiarItemSelect.value === "EMPTY"){
                        continue;
                }

                allFamiliarItemSelections.add(familiarItemSelect.value);
                familiarPoints+=items[familiarItemSelect.value].cost;
        }

        const retainerSelections=retainerList.querySelectorAll(".retainerSelect"); 
        const allRetainerSelections = new Set();

        for (const retainerSelect of retainerSelections){
                if (retainerSelect === "EMPTY"){
                        continue;
                }

                allRetainerSelections.add(retainerSelect.value);
        }

        const sorcererName = document.getElementById("sorcerer"+i+"Name");
        const sorcerer = document.getElementById("sorcerer"+i);
        const aspect = document.getElementById("aspect"+i);
        const race = document.getElementById("race"+i);
        const deity = document.getElementById("deity"+i);
        const sorcererPointTotal= document.getElementById("sorcererPointTotal"+i);

        const Health = document.getElementById("Health"+i);
        const Strength = document.getElementById("Strength"+i);
        const Mana = document.getElementById("Mana"+i);
        const Void = document.getElementById("Void"+i);
        const Move = document.getElementById("Move"+i);
        const Defense = document.getElementById("Defense"+i);

        return{
                name: sorcererName.value,
                class: sorcerer.value==="EMPTY"?"":sorcerer.value,
                aspect: aspect.value==="EMPTY"?"":aspect.value,
                level: sorcererLevel.value,
                race: race.value==="EMPTY"?"":race.value,
                deity: deity.value==="EMPTY"?"":deity.value,
                points: sorcererPointTotal.textContent,

                characteristics: {
                        health: Number(Health.textContent),
                        strength: Number(Strength.textContent),
                        mana: Number(Mana.textContent),
                        void: Number(Void.textContent),
                        move: Number(Move.textContent),
                        defense: Number(Defense.textContent)
                },

                items:[...allItemSelections],
                familiar: [...allFamiliarItemSelections],
                familiarPoints:familiarPoints,
                retainers:[...allRetainerSelections]
        };
        
}
function validateCircle() {
        
        validCircle.textContent = "";
        validCircle.style.display = "none";
        //Check Points
        if (Number(circlePointTotal.textContent) > Number(pointAllotmentCircle.textContent)){
                validCircle.textContent = validCircle.textContent + " " + "Too many points.\n";
                validCircle.style.display = "block";
                
        }
        //Check Levels
        if (Number(circleLevelTotal.textContent) > Number(levelAllotmentCircle.textContent)){
                validCircle.textContent = validCircle.textContent + " " + "Too many levels.\n"
                validCircle.style.display = "block";
        }else if (Number(circleLevelTotal.textContent) < Number(levelAllotmentCircle.textContent)){
                validCircle.textContent = validCircle.textContent + " " + "Too few levels. \n"
                validCircle.style.display = "block";
                
        }
        //Check Item uniqueness
        //const itemList = document.getElementById("itemList"+i);
        const itemSelections=document.querySelectorAll(".itemSelect"); 
        const allItemSelections = new Set();

        for (const itemSelect of itemSelections){
                if (itemSelect.value === "EMPTY"){
                        continue;
                }
                if (allItemSelections.has(itemSelect.value)){
                        validCircle.textContent = validCircle.textContent + " " + " Item Duplicate: " + itemSelect.value+"\n";
                        validCircle.style.display = "block";
                        
                }
                allItemSelections.add(itemSelect.value);
        }
        const familiarItemSelections=document.querySelectorAll(".familiarItemSelect"); 
        const allFamiliarItemSelections = new Set();

        for (const familiarItemSelect of familiarItemSelections){
                if (familiarItemSelect.value === "EMPTY"){
                        continue;
                }
                if (allFamiliarItemSelections.has(familiarItemSelect.value)){
                        validCircle.textContent = validCircle.textContent + " " + " Familiar Item Duplicate: " + familiarItemSelect.value+"\n";
                        validCircle.style.display = "block";
                        
                }
                allFamiliarItemSelections.add(familiarItemSelect.value);
        }
}
function showSorcererInfo(i){
        const classSelect = document.getElementById("sorcerer"+i);
        const sorcererInfoText =document.getElementById("sorcererInfoText"+i);
        const selectedSorcerer=classes[classSelect.value];
        if (sorcererInfoText.style.display==="block"){
                sorcererInfoText.style.display="none";
        }else{
                sorcererInfoText.style.display="block";
                sorcererInfoText.textContent = selectedSorcerer.rules;
        }
}
function showRaceInfo(i){
        const raceSelect = document.getElementById("race"+i);
        const raceInfoText =document.getElementById("raceInfoText"+i);
        const selectedRace=races[raceSelect.value];

        if (raceInfoText.style.display==="block"){
                raceInfoText.style.display="none";
        }else{
                raceInfoText.style.display="block";
                raceInfoText.textContent = selectedRace.rules;
        }
}
function showDeityInfo(i){
        const deitySelect = document.getElementById("deity"+i);
        const deityInfoText =document.getElementById("deityInfoText"+i);
        const selectedDeity=deities[deitySelect.value];

        if (deityInfoText.style.display==="block"){
                deityInfoText.style.display="none";
        }else{
                deityInfoText.style.display="block";
                deityInfoText.textContent = selectedDeity.rules;
        }
}
function hideSorcererInfo(i){
        const sorcererInfoText =document.getElementById("sorcererInfoText"+i);
        sorcererInfoText.style.display="none";
}
function hideRaceInfo(i){
        const raceInfoText =document.getElementById("raceInfoText"+i);
        raceInfoText.style.display="none";
}
function hideDeityInfo(i){
        const deityInfoText =document.getElementById("deityInfoText"+i);
        deityInfoText.style.display="none";
}
function updateSorcerer (i){
		const classSelect = document.getElementById("sorcerer"+i);
		const raceSelect = document.getElementById("race"+i);
		const deitySelect = document.getElementById("deity"+i);
		const levelSelect = document.getElementById("sorcererLevel"+i);
	
        const selectedClass = classes[classSelect.value];  
        const aspect = document.getElementById("aspect"+i);

        if (selectedClass.name==="Briar Witch"){
                aspect.style.display = "inline-block";
        } else {
                aspect.style.display = "none";
                aspect.value="EMPTY";
        }
        const selectedRace = races[raceSelect.value];   
        const selectedDeity = deities[deitySelect.value];   
        const selectedLevel = Number(levelSelect.value); 
        
        //Calculate Starting Charactersistics
        const characteristics = {
                health: selectedClass.basehealth+selectedClass.perlevelhealth*selectedLevel+selectedRace.healthMod+selectedDeity.healthMod,
                strength:selectedClass.basestrength+selectedClass.perlevelstrength*selectedLevel+selectedRace.strengthMod+selectedDeity.strengthMod,
                mana: selectedClass.basemana+selectedClass.perlevelmana*selectedLevel+selectedRace.manaMod+selectedDeity.manaMod,
                void: selectedClass.basevoid+selectedClass.perlevelvoid*selectedLevel+selectedRace.voidMod+selectedDeity.voidMod,
                move: selectedClass.basemove+selectedClass.perlevelmove*selectedLevel+selectedRace.moveMod+selectedDeity.moveMod,
                defense: selectedClass.basedefense+selectedClass.perleveldefense*selectedLevel+selectedRace.defenseMod+selectedDeity.defenseMod
        }
        
        updateItemOptions(i);
	const itemList = document.getElementById("itemList"+i);
		
        const selectedItems = itemList.querySelectorAll(".itemSelect");
        for (const itemSelect of selectedItems) {
                if (itemSelect.value==="EMPTY"){
                        continue;
                }
                const selectedItem = items[itemSelect.value];
                if (selectedItem.startingMods){
                        for (const stat in selectedItem.startingMods){
                                characteristics[stat]+= selectedItem.startingMods[stat];

                        }
                }
        }

		const health = document.getElementById("Health"+i);
		const strength = document.getElementById("Strength"+i);
		const mana = document.getElementById("Mana"+i);
		const Void = document.getElementById("Void"+i);
		const move = document.getElementById("Move"+i);
		const defense = document.getElementById("Defense"+i);


        health.textContent = characteristics.health;
        strength.textContent = characteristics.strength;
        mana.textContent =  characteristics.mana;
        Void.textContent = characteristics.void;
        move.textContent = characteristics.move;
        defense.textContent = characteristics.defense;

        //----------------------------------------------------------------------
        //Calculate POINT totals
        //----------------------------------------------------------------------
        
		const sorcererPointTotal = document.getElementById("sorcererPointTotal"+i);
		const pointAllotmentSorcerer = document.getElementById("pointAllotmentSorcerer"+i);
		
		sorcererPointTotal.textContent =0;    
        pointAllotmentSorcerer.textContent = 5*selectedLevel;
      
	  
        //Familiar
		const familiarList = document.getElementById("familiarList"+i);
		
        const selectedFamiliars = familiarList.querySelectorAll(".familiarSelect");
        for (const familiarSelect of selectedFamiliars) {
                if (familiarSelect.value!=="EMPTY"){
                        sorcererPointTotal.textContent=Number(sorcererPointTotal.textContent)+ 6 - selectedLevel;
                        familiarList.querySelector(".familiarCost").textContent= (6 - selectedLevel)+" pts";
                }
        }
        const selectedFamiliarItems = familiarList.querySelectorAll(".familiarItemSelect");
        for (const familiarItemSelect of selectedFamiliarItems){
                if (familiarItemSelect.value !== "EMPTY"){
                        sorcererPointTotal.textContent=Number(sorcererPointTotal.textContent)+Number(items[familiarItemSelect.value].cost);
                }
        }

        //Retainers
		const retainerList = document.getElementById("retainerList"+i);

        const selectedRetainers = retainerList.querySelectorAll(".retainerSelect");
        for (const retainerSelect of selectedRetainers) {
			if(retainerSelect.value!=="EMPTY"){
                sorcererPointTotal.textContent=Number(sorcererPointTotal.textContent)+ 5;
				}
        }

        //items
        for (const itemSelect of selectedItems) {
			if(itemSelect.value!=="EMPTY"){
                sorcererPointTotal.textContent=Number(sorcererPointTotal.textContent)+ Number(items[itemSelect.value].cost);
			}
        }

        //Check Points
        if (Number(sorcererPointTotal.textContent)>Number(pointAllotmentSorcerer.textContent)){
                sorcererPointTotal.style.color="red";
        
        }else{
                sorcererPointTotal.style.color="black";
        };

        const sPoints1 = document.getElementById("sorcererPointTotal1");
        const sPoints2 = document.getElementById("sorcererPointTotal2");
        const sPoints3 = document.getElementById("sorcererPointTotal3");
        const sLevels1 = document.getElementById("sorcererLevel1");
        const sLevels2 = document.getElementById("sorcererLevel2");
        const sLevels3 = document.getElementById("sorcererLevel3");

        circlePointTotal.textContent= Number(sPoints1.textContent)+Number(sPoints2.textContent)+Number(sPoints3.textContent);
        pointAllotmentCircle.textContent= 30;
        
        circleLevelTotal.textContent= Number(sLevels1.value)+Number(sLevels2.value)+Number(sLevels3.value);
        levelAllotmentCircle.textContent= 6;
        
}
function updateRaceoptions (i){
        const classSelect = document.getElementById("sorcerer"+i);
        const raceSelect = document.getElementById("race"+i);

        const selectedSorcererrace = races[raceSelect.value];   
        const selectedSorcerer = classes[classSelect.value]; 

        for (const option1 of classSelect.options){
                option1.disabled = option1.value===selectedSorcererrace.Xclass
        }

        for (const option2 of raceSelect.options){
                option2.disabled = option2.value===selectedSorcerer.Xrace
        }       
}
function updateFamiliar(i){
        const familiarList = document.getElementById("familiarList"+i);
        const familiarMainRow = document.createElement("div");
        familiarMainRow.className = "familiarMainRow";
        const familiarRow =document.createElement("div")
        familiarRow.className = "familiarRow";
                
        // Create Dropdown
        const newFamiliar = document.createElement("select");
        newFamiliar.className = "familiarSelect";

        const emptyOption = document.createElement("option");
        emptyOption.value = "EMPTY";
        emptyOption.textContent = "Choose a Familiar";
        newFamiliar.appendChild(emptyOption);
                const deleteButton = document.createElement("button");
                deleteButton.type="button";
                deleteButton.className = "deleteButton";
                deleteButton.textContent="x"


        for (const familiarKey in familiars) {

                const option = document.createElement("option");

                option.value = familiarKey;
                option.textContent = familiars[familiarKey].name;

                newFamiliar.appendChild(option);
        }


        //Create Point Val
        const familiarCost = document.createElement("span");
        const levelSelect = document.getElementById("sorcererLevel"+i);
        const addFamiliar = document.getElementById("addFamiliar"+i)

	const sorcererLevel = Number(levelSelect.value); 

        familiarCost.className="familiarCost";
        familiarCost.textContent = "0 pts";

        newFamiliar.addEventListener("change", function(){
                if (newFamiliar.value==="EMPTY"){
                        familiarCost.textContent=" 0 pts";
                        return;
                }
                familiarCost.textContent=(6-sorcererLevel)+" pts";

                updateSorcerer(i);
                validateCircle(i);   
        });

        //Delete this Row
        deleteButton.addEventListener("click", function(){
                familiarRow.remove();
                addFamiliar.style.display ="inline-block";
                updateSorcerer(i);
        });

        //Add Familiar Traits in Line
        const trait1 = document.createElement("select");
        trait1.className = "familiarTrait";

        const emptyTrait = document.createElement("option");
        emptyTrait.value = "EMPTY";
        emptyTrait.textContent="Choose a Trait";

        trait1.appendChild(emptyTrait);

        for (const traitKey in familiarTraits){
                const option = document.createElement("option");
                option.value=traitKey;
                option.textContent=familiarTraits[traitKey].name;
                trait1.appendChild(option);
        }
        
        // Create Familiar item Dropdown
        const familiarItemList = document.createElement("div");
        familiarItemList.classname="familiarItemList";

        const addFamiliarItem = document.createElement("button");
        addFamiliarItem.type="button";
        addFamiliarItem.className="addButton";
        addFamiliarItem.textContent="Add Familiar Item";
        addFamiliarItem.addEventListener("click",function(){
                addFamiliarItemRow(familiarItemList,i);
        });
        	 //familiar Information button   
        const familiarInfoButton = document.createElement("button");
        familiarInfoButton.type="button";
        familiarInfoButton.className="infoButton";
        familiarInfoButton.textContent="i";

        const familiarInfoText = document.createElement("div");
        familiarInfoText.className = "infoText";
        familiarInfoText.style.display ="none";

        familiarInfoButton.addEventListener("click", function(){
                
                if (newFamiliar.value==="EMPTY"){
                        
                        return;
                }
                

                if(familiarInfoText.style.display==="none"){
                        familiarInfoText.style.display="block";
			familiarInfoText.textContent = familiars[newFamiliar.value].rules+ " " + familiarTraits[trait1.value].rules;
                } else {
			familiarInfoText.style.display ="none";
                }
        });


        //Put all pieces in row
        familiarMainRow.appendChild(newFamiliar);
        familiarMainRow.appendChild(trait1);
        familiarMainRow.appendChild(familiarCost);
        familiarMainRow.appendChild(deleteButton);
        familiarMainRow.appendChild(familiarInfoButton);
        familiarMainRow.appendChild(familiarInfoText);

        familiarRow.appendChild(familiarMainRow);
        familiarRow.appendChild(familiarItemList);
        familiarRow.appendChild(addFamiliarItem);



        //Put Row on Page
        familiarList.appendChild(familiarRow);

        if (familiarList.querySelectorAll(".familiarRow").length>=1){
                addFamiliar.style.display = "none";
        }

        
        newFamiliar.addEventListener("change",function(){
                familiarInfoText.style.display="none";
        });

        trait1.addEventListener("change",function(){
                familiarInfoText.style.display="none";
        });
        validateCircle(i)        
}
function addFamiliarItemRow(familiarItemList,i) {

    // Create row
    const familiarItemRow = document.createElement("div");
    familiarItemRow.className = "familiarItemRow";


    // Create dropdown
    const newFamiliarItem = document.createElement("select");
    newFamiliarItem.className = "familiarItemSelect";


    // Create EMPTY option
    const emptyOption = document.createElement("option");
    emptyOption.value = "EMPTY";
    emptyOption.textContent = "Choose a Familiar Item";

    newFamiliarItem.appendChild(emptyOption);


    // Populate dropdown
    for (const itemKey in items) {

        const item = items[itemKey];

        if (item.familiarItem) {

            const option = document.createElement("option");

            option.value = itemKey;
            option.textContent = item.cost + " pts - "+item.name;

            newFamiliarItem.appendChild(option);
        }
    }

        //Create Point Val
    const itemFamiliarCost = document.createElement("span");
    itemFamiliarCost.className="itemFamiliarCost";
    itemFamiliarCost.textContent = "0 pts";

    newFamiliarItem.addEventListener("change", function(){
        if (newFamiliarItem.value==="EMPTY"){
                itemFamiliarCost.textContent=" 0 pts";
                return;
        }
        itemFamiliarCost.textContent=items[newFamiliarItem.value].cost + " pts";
        updateCircle(i)
    });


    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "x";

    deleteButton.addEventListener("click", function() {
        familiarItemRow.remove();
        updateCircle(i);
    });
	 //familiar item Information button   
        const familiarItemInfoButton = document.createElement("button");
        familiarItemInfoButton.type="button";
        familiarItemInfoButton.className="infoButton";
        familiarItemInfoButton.textContent="i";

        const familiarItemInfoText = document.createElement("div");
        familiarItemInfoText.className = "infoText";
        familiarItemInfoText.style.display ="none";

        familiarItemInfoButton.addEventListener("click", function(){
                
                if (newFamiliarItem.value==="EMPTY"){
                        
                        return;
                }
                

                if(familiarItemInfoText.style.display==="none"){
                        familiarItemInfoText.style.display="block";
			familiarItemInfoText.textContent = items[newFamiliarItem.value].rules;
                } else {
			familiarItemInfoText.style.display ="none";
                }
        });

    // Put dropdown + delete button in row
    familiarItemRow.appendChild(newFamiliarItem);
    familiarItemRow.appendChild(itemFamiliarCost);
    familiarItemRow.appendChild(deleteButton);
        familiarItemRow.appendChild(familiarItemInfoButton);
        familiarItemRow.appendChild(familiarItemInfoText);

    // Put row inside Familiar Item container
    familiarItemList.appendChild(familiarItemRow);

        newFamiliarItem.addEventListener("change",function(){
                familiarItemInfoText.style.display="none";
        });
        validateCircle(i) 
}
function updateRetainer(i){
        const retainerList = document.getElementById("retainerList"+i);
        const addRetainer = document.getElementById("addRetainer"+i);
        const retainerRow = document.createElement("div");
        retainerRow.className = "retainerRow";
        
        // Create Dropdown
        const newRetainer = document.createElement("select");
        newRetainer.className = "retainerSelect";

        const emptyOption = document.createElement("option");
        emptyOption.value = "EMPTY";
        emptyOption.textContent = "Choose a Retainer";
        newRetainer.appendChild(emptyOption);
                const deleteButton = document.createElement("button");
                deleteButton.type="button";
                deleteButton.className = "deleteButton";
                deleteButton.textContent="x"


        for (const retainerKey in retainers) {

                const option = document.createElement("option");
               
                option.value = retainerKey;
                option.textContent = retainers[retainerKey].name;
                
                newRetainer.appendChild(option);
        }

        

        //Create Point Val
        const retainerCost = document.createElement("span");
        retainerCost.className="retainerCost";
        retainerCost.textContent = "0 pts";

        newRetainer.addEventListener("change", function(){
                if (newRetainer.value==="EMPTY"){
                        retainerCost.textContent=" 0 pts";
                        return;
                }
                retainerCost.textContent="5 pts";
                updateSorcerer(i)
                updateRetainerOptions(i);
                validateCircle(i)   
                
        });

        //Delete this Row
        deleteButton.addEventListener("click", function(){
                retainerRow.remove();
                addRetainer.style.display ="inline-block";
                updateSorcerer(i)
                updateRetainerOptions(i);
        });

        //Retainer Information button   
        const retainerInfoButton = document.createElement("button");
        retainerInfoButton.type="button";
        retainerInfoButton.className="infoButton";
        retainerInfoButton.textContent="i";

        const retainerInfoText = document.createElement("div");
        retainerInfoText.className = "infoText";
        retainerInfoText.style.display ="none";

        retainerInfoButton.addEventListener("click", function(){
                
                if (newRetainer.value==="EMPTY"){
                        
                        return;
                }
                

                if(retainerInfoText.style.display==="none"){

                        retainerInfoText.style.display="block";
			retainerInfoText.textContent = retainers[newRetainer.value].rules;
                } else {
			retainerInfoText.style.display ="none";
                }
        });

        //Put all pieces in row
        retainerRow.appendChild(newRetainer);
        retainerRow.appendChild(retainerCost);
        retainerRow.appendChild(deleteButton);
        retainerRow.appendChild(retainerInfoButton);
        retainerRow.appendChild(retainerInfoText);

        //Put Row on Page
        retainerList.appendChild(retainerRow);

        if (retainerList.querySelectorAll(".retainerRow").length>=2){
                addRetainer.style.display = "none";
        }

        newRetainer.addEventListener("change",function(){
                retainerInfoText.style.display="none";
        });

        updateRetainerOptions(i);
        validateCircle(i) 
}
function updateRetainerOptions(i){
        //look at existing retainer dropdowns

                const existingRetainers = document.querySelectorAll(".retainerSelect");
                
                for(const existingRetainer of existingRetainers){
                        for(const option of existingRetainer.options){
                                if(option.value==="EMPTY"){
                                        continue;
                                }
                                option.disabled=false;

                                for (const otherRetainer of existingRetainers){
                                        if (otherRetainer!== existingRetainer && otherRetainer.value ===option.value){
                                                option.disabled=true;
                                        }
                                }
                        }

                }
        
}
function updateItem(i){
        const itemList = document.getElementById("itemList"+i);
    const itemRow = document.createElement("div");
    itemRow.className = "itemRow";

// Create Dropdown
    const newItem = document.createElement("select");
    newItem.className = "itemSelect";

    const emptyOption = document.createElement("option");
    emptyOption.value = "EMPTY";
    emptyOption.textContent = "Choose an Item";
    newItem.appendChild(emptyOption);
        const deleteButton = document.createElement("button");
        deleteButton.type="button";
        deleteButton.className = "deleteButton";
        deleteButton.textContent="x"


    for (const itemKey in items) {
        const item = items[itemKey];

        if (!item.familiarItem & isItemLegal(item,i)){
                const option = document.createElement("option");

                option.value = itemKey;
                option.textContent = item.cost+ " pts - "+item.name;
                newItem.appendChild(option);
        }
    }


    //Create Point Val
    const itemCost = document.createElement("span");
    itemCost.className="itemCost";
    itemCost.textContent = "0 pts";

    newItem.addEventListener("change", function(){
        if (newItem.value==="EMPTY"){
                itemCost.textContent=" 0 pts";
                return;
        }
        itemCost.textContent=items[newItem.value].cost + " pts";
        updateSorcerer(i)
        validateCircle(i)   
    });

    //Delete this Row
    deleteButton.addEventListener("click", function(){
        itemRow.remove();
        updateSorcerer(i)
        validateCircle(i)   
    });
    const infoButton = document.createElement("button");
    infoButton.type="button";
    infoButton.className="infoButton";
    infoButton.textContent="i";

    const itemInfo = document.createElement("div");
    itemInfo.className = "infoText";
    itemInfo.style.display ="none";

        infoButton.addEventListener("click", function(){
                if (newItem.value==="EMPTY"){
                        return;
                }
                itemInfo.textContent = items[newItem.value].rules;

                if(itemInfo.style.display==="none"){
                        itemInfo.style.display="block";
                } else {
                        itemInfo.style.display ="none";
                }
        });

        newItem.addEventListener("change",function(){
                itemInfo.style.display="none";

        });

    //Put all pieces in row
    itemRow.appendChild(newItem);
    itemRow.appendChild(itemCost);
    itemRow.appendChild(deleteButton);
    itemRow.appendChild(infoButton);
    itemRow.appendChild(itemInfo);

    //Put Row on Page
    itemList.appendChild(itemRow);
    validateCircle(i);
}
function isItemLegal (item, i){

        const sorcerer =document.getElementById("sorcerer"+i);
        const race = document.getElementById("race"+i);
        const deity = document.getElementById("deity"+i);
        const level = document.getElementById("sorcererLevel"+i);

        const selectedClass = sorcerer.value;
        const selectedRace = race.value;
        const selectedDeity = deity.value;
        const selectedLevel=level.value;
        
        if(item.classRestrictions?.length>0 && !item.classRestrictions.includes(selectedClass)){
                return false;
        }
        if(item.raceRestrictions?.length>0 && !item.raceRestrictions.includes(selectedRace)){
                return false;
        }
        if(item.deityRestrictions?.length>0 && !item.deityRestrictions.includes(selectedDeity)){
                return false;
        }
        if(item.minLevel && selectedLevel<item.minLevel){
                return false;
        }
        
        
        return true;
}
function validateItems(i){
        const itemList = document.getElementById("itemList"+i);
        const itemSelections=itemList.querySelectorAll(".itemSelect");
        for (const itemSelect of itemSelections){
                if (itemSelect.value === "EMPTY") {
                        continue;
                }

                const selectedItem = items[itemSelect.value];
                if(!isItemLegal(selectedItem)){
                        itemSelect.value="Empty";
                }
        }
        updateSorcerer(i)
        validateCircle(i) 
}
function updateItemOptions(i) {
        const itemList = document.getElementById("itemList"+i);
    const itemSelects = itemList.querySelectorAll(".itemSelect");

    for (const itemSelect of itemSelects) {

        const currentSelection = itemSelect.value;

        // Find the row this dropdown belongs to and remove info displays
        const itemRow = itemSelect.closest(".itemRow");
        const infoBox = itemRow.querySelector(".itemInfo");       
        if (infoBox){
                infoBox.style.display ="none";
        }
        // Find the cost display inside that same row
        const itemCost = itemRow.querySelector(".itemCost");

        itemSelect.innerHTML = "";

        const emptyOption = document.createElement("option");
        emptyOption.value = "EMPTY";
        emptyOption.textContent = "Choose an Item";
        itemSelect.appendChild(emptyOption);

        for (const itemKey in items) {

            const item = items[itemKey];

            if (!item.familiarItem && isItemLegal(item,i)) {

                const option = document.createElement("option");
                option.value = itemKey;
                option.textContent = item.cost+ " pts - "+item.name;
                itemSelect.appendChild(option);
            }
        }

        // Restore selection if still legal
        if (
            currentSelection !== "EMPTY" &&
            items[currentSelection] &&
            isItemLegal(items[currentSelection],i)
        ) {
            itemSelect.value = currentSelection;

            // Keep/display its cost
            itemCost.textContent =
                items[currentSelection].cost + " pts";

        } else {

            // Item is no longer legal
            itemSelect.value = "EMPTY";
            itemCost.textContent = "0 pts";
        }
    }

    
}

function delete3rdSorcerer(){
        sorcerer3Container.style.display = "none";
        addSorcerer3.style.display = "block";

        sorcererLevel3.value = 0;
        sorcerer3Name.value="";
        sorcerer3.value="EMPTY";
        race3.value="EMPTY";
        deity3.value="EMPTY";


        familiarList3.innerHTML="";
        addFamiliar3.style.display="block";
        retainerList3.innerHTML="";
        addRetainer3.style.display="block";
        itemList3.innerHTML="";
        updateRetainerOptions(1)
        updateRetainerOptions(2)
        updateRetainerOptions(3)
        updateCircle(3)



}
//----------------------------------------------------
//ON LOAD CALL UPDATE
//----------------------------------------------------

updateCircle(3);
