

//--------------
// Decalre constants from play.html
//--------------
const returnButton = document.getElementById("returnButton");
const refreshButton = document.getElementById("refreshButton");
const collapseButtons=document.querySelectorAll(".collapseButton");

//const playClass1=document.getElementById("playClass1");
const sorcererInfoButton1 = document.getElementById("sorcererInfoButton1");
const sorcererInfoButton2 = document.getElementById("sorcererInfoButton2");
const sorcererInfoButton3 = document.getElementById("sorcererInfoButton3");
//const sorcererInfoText1 = document.getElementById("sorcererInfoText1");


// const playRace1=document.getElementById("playRace1");
// const playRace2=document.getElementById("playRace2");
// const playRace3=document.getElementById("playRace3");

const raceInfoButton1 = document.getElementById("raceInfoButton1");
const raceInfoButton2 = document.getElementById("raceInfoButton2");
const raceInfoButton3 = document.getElementById("raceInfoButton3");

//const raceInfoText1 = document.getElementById("raceInfoText1");

//const playDeity1=document.getElementById("playDeity1");
const deityInfoButton1 = document.getElementById("deityInfoButton1");
const deityInfoButton2 = document.getElementById("deityInfoButton2");
const deityInfoButton3 = document.getElementById("deityInfoButton3");
//const deityInfoText1 = document.getElementById("deityInfoText1");

//const playLevel1=document.getElementById("playLevel1");

const famInfoButton1=document.getElementById("famInfoButton1");
const famInfoButton2=document.getElementById("famInfoButton2");
const famInfoButton3=document.getElementById("famInfoButton3");

const retInfoButton1=document.getElementById("retInfoButton1");
const retInfoButton2=document.getElementById("retInfoButton2");
const retInfoButton3=document.getElementById("retInfoButton3");
const retInfoButton4=document.getElementById("retInfoButton4");
const retInfoButton5=document.getElementById("retInfoButton5");
const retInfoButton6=document.getElementById("retInfoButton6");


const playState ={
        sorcerers:[
                {
                        currentHealth:"",
                        currentStrength:"",
                        currentMana:"",
                        currentVoid:"",
                        currentMove:"",
                        currentDefense:"",

                        currentFamHealth:"",
                        currentFamStrength:"",
                        currentFamMana:"",
                        currentFamVoid:"",
                        currentFamMove:"",
                        currentFamDefense:"",
                        
                        currentRet1Health:"",
                        currentRet1Strength:"",
                        currentRet1Mana:"",
                        currentRet1Void:"",
                        currentRet1Move:"",
                        currentRet1Defense:"",

                        currentRet2Health:"",
                        currentRet2Strength:"",
                        currentRet2Mana:"",
                        currentRet2Void:"",
                        currentRet2Move:"",
                        currentRet2Defense:"",

                        usedItems:[],
                        usedAbilities:[]
                },
                {
                        currentHealth:"",
                        currentStrength:"",
                        currentMana:"",
                        currentVoid:"",
                        currentMove:"",
                        currentDefense:"",

                        currentFamHealth:"",
                        currentFamStrength:"",
                        currentFamMana:"",
                        currentFamVoid:"",
                        currentFamMove:"",
                        currentFamDefense:"",
                        
                        currentRet1Health:"",
                        currentRet1Strength:"",
                        currentRet1Mana:"",
                        currentRet1Void:"",
                        currentRet1Move:"",
                        currentRet1Defense:"",

                        currentRet2Health:"",
                        currentRet2Strength:"",
                        currentRet2Mana:"",
                        currentRet2Void:"",
                        currentRet2Move:"",
                        currentRet2Defense:"",

                        usedItems:[],
                        usedAbilities:[]
                },
                {
                        currentHealth:"",
                        currentStrength:"",
                        currentMana:"",
                        currentVoid:"",
                        currentMove:"",
                        currentDefense:"",

                        currentFamHealth:"",
                        currentFamStrength:"",
                        currentFamMana:"",
                        currentFamVoid:"",
                        currentFamMove:"",
                        currentFamDefense:"",
                        
                        currentRet1Health:"",
                        currentRet1Strength:"",
                        currentRet1Mana:"",
                        currentRet1Void:"",
                        currentRet1Move:"",
                        currentRet1Defense:"",

                        currentRet2Health:"",
                        currentRet2Strength:"",
                        currentRet2Mana:"",
                        currentRet2Void:"",
                        currentRet2Move:"",
                        currentRet2Defense:"",

                        usedItems:[],
                        usedAbilities:[]
                }
        ]
}

// //--------------
// //EVENT LISTENERS
// //--------------
returnButton.addEventListener("click", function(){
        window.open("index.html", "_self")
});

refreshButton.addEventListener("click", function() {sessionStorage.removeItem("concordPlayState"), location.reload()});

const statButtons=document.querySelectorAll(".statButton");

for (const button of statButtons){
        button.addEventListener("click", function() {updateStats(button.dataset.stat, Number(button.dataset.delta), Number(button.dataset.sorc)), savePlayState()});
}

for (const button of collapseButtons){
        button.addEventListener("click", function (){
                const body = document.getElementById(button.dataset.target);
                body.hidden = !body.hidden;
                button.textContent = body.hidden ? "Expand":"Collapse";
        });
}

sorcererInfoButton1.addEventListener("click",function() {showSorcererInfo(1)});
raceInfoButton1.addEventListener("click",function() {showRaceInfo(1)});
deityInfoButton1.addEventListener("click",function() {showDeityInfo(1)});

famInfoButton1.addEventListener("click",function() {showFamInfo(1)});
retInfoButton1.addEventListener("click",function() {showRetInfo(1)});
retInfoButton2.addEventListener("click",function() {showRetInfo(2)});

sorcererInfoButton2.addEventListener("click",function() {showSorcererInfo(2)});
raceInfoButton2.addEventListener("click",function() {showRaceInfo(2)});
deityInfoButton2.addEventListener("click",function() {showDeityInfo(2)});

famInfoButton2.addEventListener("click",function() {showFamInfo(2)});
retInfoButton3.addEventListener("click",function() {showRetInfo(3)});
retInfoButton4.addEventListener("click",function() {showRetInfo(4)});

sorcererInfoButton3.addEventListener("click",function() {showSorcererInfo(3)});
raceInfoButton3.addEventListener("click",function() {showRaceInfo(3)});
deityInfoButton3.addEventListener("click",function() {showDeityInfo(3)});

famInfoButton3.addEventListener("click",function() {showFamInfo(3)});
retInfoButton5.addEventListener("click",function() {showRetInfo(5)});
retInfoButton6.addEventListener("click",function() {showRetInfo(6)});

//----------
//Functions
//---------
function updateStats(stat,delta, i){
    const currentStat = document.getElementById("current"+stat+i);
    const maxHealth = document.getElementById("Health"+i);
    const startingDefense = document.getElementById("Defense"+i);

    if(delta===1){
        if(stat==="Health" && currentStat.textContent!==maxHealth.textContent){
        currentStat.textContent =  Number(currentStat.textContent) + 1;}
        else if ( stat === "Defense" && Number(currentStat.textContent)<=Number(startingDefense.textContent)){
        currentStat.textContent =  Number(currentStat.textContent) + 1;}  
        else if ( stat !== "Health" && stat!=="Defense"){
        currentStat.textContent =  Number(currentStat.textContent) + 1;}                
    }else if (delta===-1 && currentStat.textContent!=="0"){
        if ( stat === "Defense" && Number(currentStat.textContent)>=Number(startingDefense.textContent)){
        currentStat.textContent =  Number(currentStat.textContent) - 1;}
        else if (stat!=="Defense"){
        currentStat.textContent =  Number(currentStat.textContent) - 1;}
    };

    if (String(i)[0]==="1" && String(i)[1]){
        playState.sorcerers[Number(String(i)[1])-1]["currentFam"+stat]=Number(currentStat.textContent)
    }else if (String(i)[0]==="2"&& String(i)[1]){
        playState.sorcerers[Number(String(i)[1])-1]["currentRet1"+stat]=Number(currentStat.textContent)
    }else if (String(i)[0]==="3"&& String(i)[1]){
        playState.sorcerers[Number(String(i)[1])-1]["currentRet2"+stat]=Number(currentStat.textContent)
    }else {
        playState.sorcerers[Number(String(i)[0])-1]["current"+stat]=Number(currentStat.textContent)
    }
};

function showSorcererInfo(i){
        const sorcererInfoText =document.getElementById("sorcererInfoText"+i);

        if (sorcererInfoText.style.display==="block"){
                sorcererInfoText.style.display="none";
        }else{
                sorcererInfoText.style.display="block";
        }
}
function showRaceInfo(i){
    
        const raceSelect = document.getElementById("playRace"+i);
        const raceInfoText =document.getElementById("raceInfoText"+i);
        const selectedRace=races[raceSelect.textContent];

        

        if (raceInfoText.style.display==="block"){
                raceInfoText.style.display="none";
        }else{
                raceInfoText.style.display="block";
                raceInfoText.textContent = selectedRace.rules;
        }
}
function showDeityInfo(i){
        const deitySelect = document.getElementById("playDeity"+i);
        const deityInfoText =document.getElementById("deityInfoText"+i);
        const selectedDeity=deities[deitySelect.textContent];

        if (deityInfoText.style.display==="block"){
                deityInfoText.style.display="none";
        }else{
                deityInfoText.style.display="block";
                deityInfoText.textContent = selectedDeity.rules;
        }
}

function showFamInfo(i){
        const famSelect = document.getElementById("famName"+i);
        const traitSelect = document.getElementById("famTrait"+i);
        const famInfoText =document.getElementById("famInfoText"+i);
        const selectedFamiliar=familiars[famSelect.textContent];
        const selectedTrait=familiarTraits[traitSelect.textContent];
       
        if (famInfoText.style.display==="block"){
                famInfoText.style.display="none";
        }else{
                famInfoText.style.display="block";
                famInfoText.textContent = selectedFamiliar.rules + "\n" +selectedTrait.rules;
        }
}
function showRetInfo(i){
        const retSelect = document.getElementById("retName"+i);
        const retInfoText =document.getElementById("retInfoText"+i);
        const selectedRetainer=retainers[retSelect.textContent];
       
        if (retInfoText.style.display==="block"){
                retInfoText.style.display="none";
        }else{
                retInfoText.style.display="block";
                retInfoText.textContent = selectedRetainer.rules;
        }
}
function savePlayState(){
        console.log("this is what will be saved")
        console.log(playState);
        sessionStorage.setItem("concordPlayState", JSON.stringify(playState));
}

function initPlayMode() {
        const concordCircle=JSON.parse(sessionStorage.getItem("concordCircle"));
        const concordPlayState =JSON.parse(sessionStorage.getItem("concordPlayState"));
        console.log("build info");
        console.log(concordCircle);

        console.log("play info");
        console.log(concordPlayState);

        if(!concordPlayState){
                console.log("play state false, we will write new values");
        }


        for (let xx=0;xx<=2;xx++){
                let itemCount =1;
                const sorcererCard=document.getElementById("card"+Number(xx+1));
                const sorcererName=document.getElementById("sorcererName"+Number(xx+1));
                const playClass = document.getElementById("playClass"+Number(xx+1));
                const playRace = document.getElementById("playRace"+Number(xx+1));
                const playDeity = document.getElementById("playDeity"+Number(xx+1));
                const playLevel = document.getElementById("playLevel"+Number(xx+1));
                const sorcererPointTotal=document.getElementById("sorcererPointTotal"+Number(xx+1));
                const pointAllotmentSorcerer=document.getElementById("pointAllotmentSorcerer"+Number(xx+1));
                const sorcererInfoText=document.getElementById("sorcererInfoText"+Number(xx+1));
                const raceAbility=document.getElementById("raceAbility"+Number(xx+1));
                const deityAbility=document.getElementById("deityAbility"+Number(xx+1));
                const otherAbility=document.getElementById("otherAbility"+Number(xx+1));

                sorcererName.textContent=concordCircle.sorcerers[xx].name 

                if(concordCircle.sorcerers[xx].aspect){
                        playClass.textContent = concordCircle.sorcerers[xx].class+ " - " + concordCircle.sorcerers[xx].aspect + "Aspect";
                }else{
                        playClass.textContent = concordCircle.sorcerers[xx].class;
                }   

                if (playClass.textContent===""){
                        sorcererCard.style.display="none";
                        continue;
                }else{
                        sorcererCard.style.display="block";
                }        

                playRace.textContent = concordCircle.sorcerers[xx].race;
                playDeity.textContent = concordCircle.sorcerers[xx].deity;
                playLevel.textContent= "LEVEL - " + concordCircle.sorcerers[xx].level;

                raceAbility.textContent= races[concordCircle.sorcerers[xx].race]?.exportRule[0];
                if(raceAbility.textContent===""){
                        const checkbox = document.querySelector(`.usedCheckBox[data-sorcerer="${xx}"][data-key="0"]`);
                        checkbox.style.display = "none";
                }
                deityAbility.textContent= deities[concordCircle.sorcerers[xx].deity]?.exportRule[0];
                if(deityAbility.textContent===""){
                        const checkbox = document.querySelector(`.usedCheckBox[data-sorcerer="${xx}"][data-key="1"]`);
                        checkbox.style.display = "none";
                }
                otherAbility.textContent= races[concordCircle.sorcerers[xx].race]?.exportRule[1];
                if(otherAbility.textContent===""){
                        const checkbox = document.querySelector(`.usedCheckBox[data-sorcerer="${xx}"][data-key="2"]`);
                        checkbox.style.display = "none";
                }

                const img1 = document.createElement("img");
                img1.src ="libraries/"+concordCircle.sorcerers[xx].class+".png";
                img1.classList.add("spellPanelImage");
                img1.alt=concordCircle.sorcerers[xx].class+" spells";
                sorcererInfoText.appendChild(img1);

                sorcererPointTotal.textContent=concordCircle.sorcerers[xx].points;
                pointAllotmentSorcerer.textContent=Number(concordCircle.sorcerers[xx].level)*5;

                const Health=document.getElementById("Health"+Number(xx+1));
		const Strength=document.getElementById("Strength"+Number(xx+1));
                const Mana=document.getElementById("Mana"+Number(xx+1));
                const Void=document.getElementById("Void"+Number(xx+1));
                const Move=document.getElementById("Move"+Number(xx+1));
                const Defense=document.getElementById("Defense"+Number(xx+1));
	        Health.textContent=concordCircle.sorcerers[xx].characteristics.health;
                Strength.textContent=concordCircle.sorcerers[xx].characteristics.strength;
                Mana.textContent=concordCircle.sorcerers[xx].characteristics.mana;
                Void.textContent=concordCircle.sorcerers[xx].characteristics.void; 
                Move.textContent=concordCircle.sorcerers[xx].characteristics.move;
                Defense.textContent=concordCircle.sorcerers[xx].characteristics.defense;

                                        const currentHealth=document.getElementById("currentHealth"+Number(xx+1));
                                        const currentStrength=document.getElementById("currentStrength"+Number(xx+1));
                                        const currentMana=document.getElementById("currentMana"+Number(xx+1));
                                        const currentVoid=document.getElementById("currentVoid"+Number(xx+1));
                                        const currentMove=document.getElementById("currentMove"+Number(xx+1));
                                        const currentDefense=document.getElementById("currentDefense"+Number(xx+1));    
                                if(!concordPlayState){
                                        currentHealth.textContent=Health.textContent;
                                        currentStrength.textContent=Strength.textContent;
                                        currentMana.textContent=Mana.textContent;
                                        currentVoid.textContent=Void.textContent; 
                                        currentMove.textContent=Move.textContent;
                                        currentDefense.textContent=Defense.textContent;
                                }else{
                                        currentHealth.textContent=concordPlayState.sorcerers[xx]["currentHealth"];
                                        currentStrength.textContent=concordPlayState.sorcerers[xx]["currentStrength"];
                                        currentMana.textContent=concordPlayState.sorcerers[xx]["currentMana"];
                                        currentVoid.textContent=concordPlayState.sorcerers[xx]["currentVoid"];
                                        currentMove.textContent=concordPlayState.sorcerers[xx]["currentMove"];
                                        currentDefense.textContent=concordPlayState.sorcerers[xx]["currentDefense"];
                                }
                                        playState.sorcerers[xx]["currentHealth"]=currentHealth.textContent;
                                        playState.sorcerers[xx]["currentStrength"]=currentStrength.textContent;
                                        playState.sorcerers[xx]["currentMana"]=currentMana.textContent;
                                        playState.sorcerers[xx]["currentVoid"]=currentVoid.textContent; 
                                        playState.sorcerers[xx]["currentMove"]=currentMove.textContent;
                                        playState.sorcerers[xx]["currentDefense"]=currentDefense.textContent;

                const familiarList=document.getElementById("familiarList"+Number(xx+1));
                if(concordCircle.sorcerers[xx].familiar[0] && concordCircle.sorcerers[xx].familiar[0] !=="EMPTY"){
                        familiarList.style.display="block";
                        const famName = document.getElementById("famName"+Number(xx+1));
                        const famTrait = document.getElementById("famTrait"+Number(xx+1));
                        famName.textContent =concordCircle.sorcerers[xx].familiar[0];
                        famTrait.textContent=concordCircle.sorcerers[xx].familiar[1];


                        const Health=document.getElementById("Health1"+Number(xx+1));
                        const Strength=document.getElementById("Strength1"+Number(xx+1));
                        const Mana=document.getElementById("Mana1"+Number(xx+1));
                        const Void=document.getElementById("Void1"+Number(xx+1));
                        const Move=document.getElementById("Move1"+Number(xx+1));
                        const Defense=document.getElementById("Defense1"+Number(xx+1));
                        const famStats = getFamiliarCharacteristics(concordCircle.sorcerers[xx]);
                        Health.textContent=famStats.health;
                        Strength.textContent=famStats.strength;
                        Mana.textContent=famStats.mana;
                        Void.textContent=famStats.void; 
                        Move.textContent=famStats.move;
                        Defense.textContent=famStats.defense;

                        
                        const currentHealth=document.getElementById("currentHealth1"+Number(xx+1));
                        const currentStrength=document.getElementById("currentStrength1"+Number(xx+1));
                        const currentMana=document.getElementById("currentMana1"+Number(xx+1));
                        const currentVoid=document.getElementById("currentVoid1"+Number(xx+1));
                        const currentMove=document.getElementById("currentMove1"+Number(xx+1));
                        const currentDefense=document.getElementById("currentDefense1"+Number(xx+1));

                         if(!concordPlayState){
                                currentHealth.textContent=Health.textContent;
                                currentStrength.textContent=Strength.textContent;
                                currentMana.textContent=Mana.textContent;
                                currentVoid.textContent=Void.textContent; 
                                currentMove.textContent=Move.textContent;
                                currentDefense.textContent=Defense.textContent;
                         }else{
                                currentHealth.textContent=concordPlayState.sorcerers[xx]["currentFamHealth"];
                                currentStrength.textContent=concordPlayState.sorcerers[xx]["currentFamStrength"];
                                currentMana.textContent=concordPlayState.sorcerers[xx]["currentFamMana"];
                                currentVoid.textContent=concordPlayState.sorcerers[xx]["currentFamVoid"];
                                currentMove.textContent=concordPlayState.sorcerers[xx]["currentFamMove"];
                                currentDefense.textContent=concordPlayState.sorcerers[xx]["currentFamDefense"];
                         }
                                playState.sorcerers[xx]["currentFamHealth"]=currentHealth.textContent;
				playState.sorcerers[xx]["currentFamStrength"]=currentStrength.textContent;
                                playState.sorcerers[xx]["currentFamMana"]=currentMana.textContent;
                                playState.sorcerers[xx]["currentFamVoid"]=currentVoid.textContent; 
                                playState.sorcerers[xx]["currentFamMove"]=currentMove.textContent;
                                playState.sorcerers[xx]["currentFamDefense"]=currentDefense.textContent;
                        
                        const familiarItemsDiv=document.getElementById("familiarItemsDiv1"+Number(xx+1));
                        const famItems = concordCircle.sorcerers[xx].familiar.slice(2);
                        for (const itemKey of famItems) {
                                addCheckListItem(familiarItemsDiv, itemKey, xx, itemCount);
                                itemCount++;
                        }      
                }else{
                        familiarList.style.display="none";            
                }
                for(let yy=0; yy<=1; yy++){
                        const retainerList=document.getElementById("retainerList"+Number(2*xx+yy+1))
                       
                        if(concordCircle.sorcerers[xx].retainers[yy] && concordCircle.sorcerers[xx].retainers[yy]!=="EMPTY"){
                                retainerList.style.display="block"; 
                                const retName=document.getElementById("retName"+Number(2*xx+yy+1));
                                retName.textContent=concordCircle.sorcerers[xx].retainers[yy];

                                const Health=document.getElementById("Health"+Number(yy+2)+Number(xx+1));
                                const Strength=document.getElementById("Strength"+Number(yy+2)+Number(xx+1));
                                const Mana=document.getElementById("Mana"+Number(yy+2)+Number(xx+1));
                                const Void=document.getElementById("Void"+Number(yy+2)+Number(xx+1));
                                const Move=document.getElementById("Move"+Number(yy+2)+Number(xx+1));
                                const Defense=document.getElementById("Defense"+Number(yy+2)+Number(xx+1));

                                Health.textContent=retainers[concordCircle.sorcerers[xx].retainers[yy]].health;
                                Strength.textContent=retainers[concordCircle.sorcerers[xx].retainers[yy]].strength;
                                Mana.textContent=retainers[concordCircle.sorcerers[xx].retainers[yy]].mana;
                                Void.textContent=retainers[concordCircle.sorcerers[xx].retainers[yy]].void; 
                                Move.textContent=retainers[concordCircle.sorcerers[xx].retainers[yy]].move;
                                Defense.textContent=retainers[concordCircle.sorcerers[xx].retainers[yy]].defense;
                                        
                                        const currentHealth=document.getElementById("currentHealth"+Number(yy+2)+Number(xx+1));
                                        const currentStrength=document.getElementById("currentStrength"+Number(yy+2)+Number(xx+1));
                                        const currentMana=document.getElementById("currentMana"+Number(yy+2)+Number(xx+1));
                                        const currentVoid=document.getElementById("currentVoid"+Number(yy+2)+Number(xx+1));
                                        const currentMove=document.getElementById("currentMove"+Number(yy+2)+Number(xx+1));
                                        const currentDefense=document.getElementById("currentDefense"+Number(yy+2)+Number(xx+1));
                                if(!concordPlayState){                                       
                                        currentHealth.textContent=Health.textContent;
                                        currentStrength.textContent=Strength.textContent;
                                        currentMana.textContent=Mana.textContent;
                                        currentVoid.textContent=Void.textContent; 
                                        currentMove.textContent=Move.textContent;
                                        currentDefense.textContent=Defense.textContent;
                                }else{
                                        currentHealth.textContent=concordPlayState.sorcerers[xx]["currentRet"+Number(yy+1)+"Health"];
                                        currentStrength.textContent=concordPlayState.sorcerers[xx]["currentRet"+Number(yy+1)+"Strength"];
                                        currentMana.textContent=concordPlayState.sorcerers[xx]["currentRet"+Number(yy+1)+"Mana"];
                                        currentVoid.textContent=concordPlayState.sorcerers[xx]["currentRet"+Number(yy+1)+"Void"];
                                        currentMove.textContent=concordPlayState.sorcerers[xx]["currentRet"+Number(yy+1)+"Move"];
                                        currentDefense.textContent=concordPlayState.sorcerers[xx]["currentRet"+Number(yy+1)+"Defense"];
                                }
                                        playState.sorcerers[xx]["currentRet"+Number(yy+1)+"Health"]=currentHealth.textContent;
                                        playState.sorcerers[xx]["currentRet"+Number(yy+1)+"Strength"]=currentStrength.textContent;
                                        playState.sorcerers[xx]["currentRet"+Number(yy+1)+"Mana"]=currentMana.textContent;
                                        playState.sorcerers[xx]["currentRet"+Number(yy+1)+"Void"]=currentVoid.textContent; 
                                        playState.sorcerers[xx]["currentRet"+Number(yy+1)+"Move"]=currentMove.textContent;
                                        playState.sorcerers[xx]["currentRet"+Number(yy+1)+"Defense"]=currentDefense.textContent;

                        }else{
                                retainerList.style.display="none"; 
                        }
                }
                const magicItemsDiv=document.getElementById("magicItemsDiv"+Number(xx+1));
                const items = concordCircle.sorcerers[xx].items;
                
                for (const itemKey of items) {
                        
                        addCheckListItem(magicItemsDiv, itemKey, xx, itemCount);
                        itemCount++;
                }
                //Reassign item checkboxes if there is an active playstate
                if(concordPlayState){  
                        for (let z = 0; z<=itemCount+1; z++){
                                if(concordPlayState.sorcerers[xx].usedItems[z]){
                                        const checkbox = document.querySelector(`.usedCheckBox[data-sorcerer="${xx}"][data-key="${z}"]`);
                                        checkbox.checked = true;
                                        playState.sorcerers[xx].usedItems[z]=true;
                                }
                        }
                }
        }

        //Assign a listener to all boxes
        const usedCheckBoxes=document.querySelectorAll(".usedCheckBox");
        for (const boxes of usedCheckBoxes){
                boxes.addEventListener("change", function (){
                        const sorcererIndex = Number(boxes.dataset.sorcerer);
                        console.log("this is the index" + sorcererIndex);
                                        const key = boxes.dataset.key;
                                        playState.sorcerers[sorcererIndex].usedItems[key]=boxes.checked;
                                savePlayState();
                });
        }

        if(!concordPlayState){
                savePlayState()
        }
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

function addCheckListItem(parent, itemKey, xx, itemCount) {

    const item = items[itemKey];

    const row = document.createElement("div");
    row.className = "playItemRow";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class","usedCheckBox");
    checkbox.dataset.sorcerer = xx;
    checkbox.dataset.key=Number(itemCount)+2;

    const name = document.createElement("span");
    name.textContent = item.name;

    const infoButton = document.createElement("button");
    infoButton.type = "button";
    infoButton.className = "infoButton";
    infoButton.textContent = "i";

    const infoText = document.createElement("div");
    infoText.className = "infoText";
    infoText.textContent = item.rules;
    infoText.style.display = "none";

    infoButton.addEventListener("click", function () {
        infoText.style.display=infoText.style.display==="none" ? "block" : "none";
    });

    row.appendChild(checkbox);
    row.appendChild(name);
    row.appendChild(infoButton);

    parent.appendChild(row);
    parent.appendChild(infoText);
}

//----------
//INIT
//----------

initPlayMode();
