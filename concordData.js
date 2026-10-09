//-------------------
//SOURCE DATA
//-------------------

// const characterisitics ={
//         health: calculatedHealth,
//         strength: calculatedStrength,
//         mana: calculatedMana,
//         void: calculatedVoid,
//         move: calculatedMove,
//         defense: calculatedDefense
// }

const scenarios ={
        1:{
                name: "Magical Flux",
                runeSpacing: "6",
                rules: "Score 1 point at the end of each turn if you have a model within 2 inches of the center of the board."

        },
        2:{                
                name: "Supremancy",
                runeSpacing: "4",
                rules: "Score 1 point at the end of each turn if you have at least 1 model in 3 of the 4 table quadrants. A single model may only count for 1 table quadrant."},
        3:{                
                name: "Hostile Takeover",
                runeSpacing: "8",
                rules: "Score 2 points at the end of each turn if you have at least 1 model in your oppoentn's deployment zone."}
}

const classes = {
        EMPTY: {
                name: "EMPTY",
                basehealth: 0,
                perlevelhealth: 0,
                basestrength: 0,
                perlevelstrength: 0,
                basemana: 0,
                perlevelmana: 0,
                basevoid: 0,
                perlevelvoid: 0,
                basemove: 0,
                perlevelmove: 0,
                basedefense: 0,
                perleveldefense:0,
                Xrace:"",
                rules:""
        },
        Aeliothurge: {
                name: "Aeliothurge",
                basehealth: 7,
                perlevelhealth: 1,
                basestrength: 3,
                perlevelstrength: 0,
                basemana: 2,
                perlevelmana: 2,
                basevoid: 1,
                perlevelvoid: 1,
                basemove: 8,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"Dwarf",
                rules:"A highly mobile summoner and battlefield-control caster.\n" +
                        "Uses wind magic to reposition models, increase or reduce movement, and disrupt enemy positioning while fielding a wide variety of Summons.\n " +
                        "Its special Stance combines EVADE and COUNTER."
        },
        BriarWitch: {
                name: "Briar Witch",
                basehealth: 5,
                perlevelhealth: 2,
                basestrength: 3,
                perlevelstrength: 0,
                basemana: 1,
                perlevelmana: 2,
                basevoid: 1,
                perlevelvoid: 1,
                basemove: 4,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"",
                rules:"A flexible support and control caster built around choosing a Bear, Stag, or Owl Aspect.\n " +
                        "Uses healing, movement denial, terrain interaction, and Totems, while Skinwalk and the Primeval change depending on the chosen Aspect.\n " +
                        "Its playstyle can shift between combat, mobility, and spellcasting."
        },
        Cryothurge: {
                name: "Cryothurge",
                basehealth: 8,
                perlevelhealth: 1,
                basestrength: 3,
                perlevelstrength: 0,
                basemana: 0,
                perlevelmana: 2,
                basevoid: 1,
                perlevelvoid: 1,
                basemove: 5,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"Bufo",
                rules:"A control caster focused on slowing enemies and denying their movement, then punishing models whose Move has been reduced. \n" +
                        "Can create Blocking terrain, improve its own durability, and transition into powerful close combat at higher levels. \n" +
                        "Its special EVADE Stance can cause an opponent to lo   se its next Move Action."
        },
        Djinn: {
                name: "Djinn",
                basehealth: 4,
                perlevelhealth: 3,
                basestrength: 4,
                perlevelstrength: 0,
                basemana: 2,
                perlevelmana: 1,
                basevoid: 1,
                perlevelvoid: 1,
                basemove: 6,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"",
                rules:"A flexible caster whose spells change between Solar and Lunar effects. \n" +
                        "Successful spells alternate the Djinn between the two states, shifting its options between damage, support, movement, and control.\n " +
                        "Its special Stance counts as both ATTACK and COUNTER, with different drawbacks depending on its current state."
        },
        Geomancer: {
                name: "Geomancer",
                basehealth: 10,
                perlevelhealth: 1,
                basestrength: 4,
                perlevelstrength: 0,
                basemana: 2,
                perlevelmana: 1,
                basevoid: 1,
                perlevelvoid: 1,
                basemove: 3,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"Horu",
                rules:"A durable battlefield-control caster focused on manipulating terrain and positioning. \n" +
                        "Creates Blocking terrain, protects friendly models, Pushes models around the battlefield, and summons resilient constructs.\n " +
                        "Its special ATTACK Stance can concentrate four bonus dice into one Duel at the cost of Defense."
        },
        Harbinger: {
                name: "Harbinger",
                basehealth: 10,
                perlevelhealth: 2,
                basestrength: 2,
                perlevelstrength: 0,
                basemana: 3,
                perlevelmana: 1,
                basevoid: 0,
                perlevelvoid: 1,
                basemove: 4,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"Troll",
                rules:"An attrition and control caster built around disease, debuffs, and expendable undead Summons. \n" +
                        "Spreading Sickness damages nearby enemies while its spells weaken characteristics, restrict movement, and punish enemy actions. \n" +
                        "Its special COUNTER Stance can trigger Spreading Sickness again after combat."
        },
        Hierophant: {
                name: "Hierophant",
                basehealth: 9,
                perlevelhealth: 1,
                basestrength: 5,
                perlevelstrength: 0,
                basemana: 0,
                perlevelmana: 1,
                basevoid: 0,
                perlevelvoid: 1,
                basemove: 5,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"Venulli",
                rules:"A deity-driven support and combat caster. \n" +
                        "Each turn it may use a free Prayer determined by its chosen Deity, while its spells heal, protect, empower, and reposition friendly models or punish enemies. \n" +
                        "Several abilities become stronger when friendly or enemy models share the Hierophant's Deity."
        },
        Pyromancer: {
                name: "Pyromancer",
                basehealth: 6,
                perlevelhealth: 2,
                basestrength: 3,
                perlevelstrength: 0,
                basemana: 1,
                perlevelmana: 2,
                basevoid: 1,
                perlevelvoid: 1,
                basemove: 5,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"Asrai",
                rules:"An aggressive damage caster specializing in direct damage, Burning, and area denial. \n" +
                        "Its spells can create Dangerous terrain, amplify later damage, and threaten large areas of the battlefield. \n" +
                        "Its special COUNTER Stance punishes enemies that attack it in close combat."
        },
        SeaShaper: {
                name: "Sea Shaper",
                basehealth: 7,
                perlevelhealth: 2,
                basestrength: 4,
                perlevelstrength: 0,
                basemana: 2,
                perlevelmana: 2,
                basevoid: 1,
                perlevelvoid: 1,
                basemove: 4,
                perlevelmove: 0,
                basedefense: 4,
                perleveldefense:0,
                Xrace:"Magni",
                rules:"A battlefield-control caster built around creating and exploiting Water Features. \n" +
                        "Uses water to heal allies, hinder enemies, manipulate movement, interfere with magical resources, and support aquatic Summons. \n" +
                        "Its special ATTACK Stance sacrifices Strength while forcing enemy ATTACK dice to be rerolled."
        }

};
const races = {
        EMPTY: {
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "",
                exportRule:[],
                rules:""
        }, 
        Asrai: {
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "Pyromancer",
                exportRule: ["Arcane Insight", "Fish out of Water"],

                rules:
                        "Arcane Insight: This model gains a +1 modifier to Dispel Rolls.\n" +
                        "Fish out of Water: This model does not gain a bonus dice to Duels when charging.\n" +
                        "Forbidden Sorcerer Type: Pyromancer\n" +
                        "Base Size: 30mm"
                },

        Bufo: {
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "Cryothurge",
                exportRule: ["Noxious", "Regrow Limb"],

                rules:
                        "Noxious: When an enemy model inflicts damage on this model using an ATTACK as part of a Duel, that model gains Poisoned.\n" +
                        "Regrow Limb: Once per game, at the start of the Stability Phase, this model Heals 3.\n" +
                        "Forbidden Sorcerer Type: Cryothurge\n" +
                        "Base Size: 40mm"
                },

        Dwarf: {
                healthMod: 3,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "Aeliothurge",
                exportRule: ["Stout"],

                rules:
                        "Hearty: +3 Starting Health.\n" +
                        "Stout: This model may reduce the distance of a Push effect by 1 to a minimum of 1.\n" +
                        "Forbidden Sorcerer Type: Aeliothurge\n" +
                        "Base Size: 30mm"
                },

        Horu: {
                healthMod: -2,
                strengthMod: 0,
                manaMod: 1,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "Geomancer",
                exportRule: ["Soar"],

                rules:
                        "Academics: +1 Starting Mana and -2 Starting Health.\n" +
                        "Soar: Once per game, instead of taking a Move Action, this model may be Placed within 4 inches of its current location.\n" +
                        "Forbidden Sorcerer Type: Geomancer\n" +
                        "Base Size: 30mm"
                },

        Human: {
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "",
                exportRule: ["Mortal Ingenuity", "Learn from Failure"],

                rules:
                        "Mortal Ingenuity: When this model suffers Magical Feedback, reduce the dice lost from the Mana Pool by 1 to a minimum of 0.\n" +
                        "Learn from Failure: Once per game, after another friendly Sorcerer suffers Broken Concentration, this model may gain a +1 Casting Modifier until the end of that Casting Phase.\n" +
                        "Forbidden Sorcerer Type: None\n" +
                        "Base Size: 30mm"
                },

        Magni: {
                healthMod: 0,
                strengthMod: 1,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "SeaShaper",
                exportRule: ["Blood of Ignis"],

                rules:
                        "War Traditions: +1 Starting Strength.\n" +
                        "Blood of Ignis: When this model rolls dice in a Duel, for each natural 6 rolled, roll one additional dice for that Duel. These additional dice cannot generate further dice.\n" +
                        "Forbidden Sorcerer Type: Sea Shaper\n" +
                        "Base Size: 40mm"
                },

        Troll: {
                healthMod: 1,
                strengthMod: 1,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                Xclass: "Harbinger",
                exportRule: ["Battle Trance"],

                rules:
                        "Monstrous: +1 Starting Health and +1 Starting Strength.\n" +
                        "Battle Trance: During Turns 4 and 5, this model gains a +1 Casting and Dispel Modifier.\n" +
                        "Forbidden Sorcerer Type: Harbinger\n" +
                        "Base Size: 50mm"
                },

        Venulli: {
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 1,
                defenseMod: 0,
                Xclass: "Hierophant",
                exportRule: ["Studied"],

                rules:
                        "Aerialists: +1 Starting Move.\n" +
                        "Studied: At the start of each game, choose one spell from this model's Spellbook. This model gains a +1 Casting Modifier when casting that spell.\n" +
                        "Forbidden Sorcerer Type: Hierophant\n" +
                        "Base Size: 40mm"},
};
const deities = {
        EMPTY: {
                name:"",
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                exportRule:[],
                rules:""
        },
        Avar: {
                name:"Avar",
                healthMod: 0,
                strengthMod: 0,
                manaMod: 1,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                exportRule:["In the beginning"],
                rules:"+1 Starting Mana. \n" + "Add +1 to the roll to determine activation order. This is cumulative if multiple models have this rule."
        },
        GhulThur: {
                name:"Ghul Thur",
                healthMod: 2,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                exportRule:["Salvation Through Strength"],
                rules:" +2 Starting Health. \n"+ "Once per game: At the Start of the Close Combat Phase, increase this model’s Defense by 1 until the end of the phase"
        },
        Ignis: {
                name:"Ignis",
                healthMod: 0,
                strengthMod: 1,
                manaMod: 0,
                voidMod: 0,
                moveMod: 0,
                defenseMod: 0,
                exportRule:["Fickle as the Flame"],
                rules:" +1 Starting Strength. \n" +" Once per game: Before this model assigns dice to Duels, this model may treat the Defense of all enemy models in base contact as 1 less than normal, to a minimum of 2 until the start of next Stability Phase."
        },
        Mendax: {
                name:"Mendax",
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 0,
                moveMod: 1,
                defenseMod: 0,
                exportRule:["Only Mendax's Verdict is Final"],
                rules:"+1 Starting Move. \n" + "Once per game: This model may reroll any single dice."
        },
        Sorun: {
                name:"Sorun",
                healthMod: 0,
                strengthMod: 0,
                manaMod: 0,
                voidMod: 1,
                moveMod: 0,
                defenseMod: 0,
                exportRule:["And where do we come from?"],
                rules:"+1 Starting Void. \n" + "Once per game: At the start of the Stability Phase, Push this model 3 inches in any direction."
        }
};
const familiars = {
        EMPTY: {
                name: "",
                health: 0,
                strength: 0,
                mana: 0,
                void: 0,
                move: 0,
                defense: 0,
                rules:""
        },
        Mystic: {
                name: "Mystic",
                health: 2,
                strength: 4,
                mana: 1,
                void: 0,
                move: 5,
                defense: 2,
                rules:"2/4/1/0/5/2 - Can cast the first level 1 spell in the Sorcerer's Spellbook. \n"
        },
        Predator: {
                name: "Predator",
                health: 4,
                strength: 3,
                mana: 0,
                void: 0,
                move: 8,
                defense: 3,
                rules:"4/3/0/0/8/3 - Forces opponents to COUNTER when it charges. \n"
        },
        Sprinter: {
                name: "Sprinter",
                health: 4,
                strength: 3,
                mana: 0,
                void: 0,
                move: 6,
                defense: 3,
                rules:"4/3/0/0/6/3 - Repositions 6 inches at the start of the Casting Phase. \n"
        },
        Stalker: {
                name: "Stalker",
                health: 5,
                strength: 4,
                mana: 0,
                void: 0,
                move: 6,
                defense: 4,
                rules:"5/4/0/0/6/4 - Cannot be targeted by magic missiles. \n"
        },
        Trickster: {
                name: "Trickster",
                health: 4,
                strength: 3,
                mana: 0,
                void: 0,
                move: 4,
                defense: 4,
                rules:"4/3/0/0/4/4 - Once per game it can teleport to the Sorcerer or vice versa. \n"
        },
        Warden: {
                name: "Warden",
                health: 5,
                strength: 4,
                mana: 0,
                void: 0,
                move: 3,
                defense: 5,
                rules:"5/4/0/0/3/5 - This model cannot be moved by enemy models. \n"
        }

}

const familiarTraits = {
        EMPTY: {
                name: "",
                rules:""
        },
        Aggressive: {
                name: "Aggressive",
                rules:"This model may make use of the following special Stance: Rip and Tear.",
        },
        Defensive: {
                name: "Defensive",
                rules:"If this model is in base contact with the Sorcerer who hired it, damage suffered by the Sorcerer may be transferred to this model instead. This damage cannot be Reduced or transferred to another model.",
        },
        MagicAttuned: {
                name: "Magic Attuned",
                rules:"This model has 1 Void. This can never be increased in any way.",
        },
        Meek: {
                name: "Meek",
                rules:"This model reduces the damage of all Direct Damage spells to 0.",
        },
        Loyal: {
                name: "Loyal",
                rules:"Whenever this model is within 4 inches of the Sorcerer who hired it, this model gains +1 Strength."
        },
        Relentless: {
                name: "Relentless",
                rules: "If this model would suffer enough damage to reduce it to 0 or less Health, it is not killed and remains at 1 Health. This model cannot suffer any more damage. At the start of the next Stability Phase, this model is killed."
        }
}

const retainers = {
        EMPTY: {
                name:"",
                health: 0,
                strength: 0,
                mana: 0,
                void: 0,
                move: 0,
                defense: 0,
                abilities:[],
                rules:""
        },
        Apprentice: {
                name:"Apprentice",
                health: 3,
                strength: 2,
                mana: 1,
                void: 0,
                move: 4,
                defense: 4,
                abilities:["Adept"],
                rules:"3/2/1/0/4/4 - Adept"
        },
        Assassin: {
                name:"Assassin",
                health: 3,
                strength: 6,
                mana: 0,
                void: 0,
                move: 6,
                defense: 4,
                abilities:["Cruel, Magister, Scout","Camouflaged"],
                rules:"3/6/0/0/6/4 - Cruel - Magister - Scout - Camouflaged"
        },
        Courtier: {
                name:"Courtier",
                health: 3,
                strength: 2,
                mana: 0,
                void: 0,
                move: 6,
                defense: 2,
                abilities:["Adept", "Lure"],
                rules:"3/2/0/0/6/2 - Adept - Lure"
        },
        Defender: {
                name:"Defender",
                health: 6,
                strength: 3,
                mana: 0,
                void: 0,
                move: 3,
                defense: 5,
                abilities:[],
                rules:"6/3/0/0/3/5"
        },
        Hunter: {
                name:"Hunter",
                health: 5,
                strength: 3,
                mana: 0,
                void: 0,
                move: 8,
                defense: 3,
                abilities:["Archer", "Hit and Run"],
                rules:"5/3/0/0/8/3 - Archer - Hit & Run"
        },
        Longbowmen: {
                name:"Longbowmen",
                health: 3,
                strength: 4,
                mana: 0,
                void: 0,
                move: 4,
                defense: 3,
                abilities:["Archer", "Scout"],
                rules:"3/4/0/0/4/3 - Archer - Stalker"
        },
        Outrider: {
                name:"Outrider",
                health: 5,
                strength: 3,
                mana: 0,
                void: 0,
                move: 8,
                defense: 4,
                abilities:["Cruel", "Scout"],
                rules:"5/3/0/0/8/4 - Cruel - Scout"
        },
        Paragon: {
                name:"Paragon",
                health: 4,
                strength: 4,
                mana: 0,
                void: 0,
                move: 4,
                defense: 4,
                abilities:["Cruel", "Hold the Line"],
                rules:"4/4/0/0/4/4 - Cruel - Hold the Line"
        },
        Priest: {
                name:"Priest",
                health: 5,
                strength: 1,
                mana: 0,
                void: 0,
                move: 4,
                defense: 3,
                abilities:["Healer", "Magician"],
                rules:"5/1/0/0/4/5 - Healer - Magician"
        },
        Sage: {
                name:"Sage",
                health: 2,
                strength: 2,
                mana: 0,
                void: 0,
                move: 2,
                defense: 3,
                abilities:["Adept, Magician", "Magister"],
                rules:"2/2/0/0/2/3 - Adept - Magician - Magister"
        },
        Zealot: {
                name:"Zealot",
                health: 4,
                strength: 4,
                mana: 0,
                void: 0,
                move: 4,
                defense: 4,
                abilities:["Supplicant"],
                rules:"4/4/0/0/4/4 - Supplicant"
        }
}

const items = {
        EMPTY: {
                name: "",
                cost: 0,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: ""
        },

        // CLASS-SPECIFIC ITEMS
        CloakOfFlies: {
                name: "Cloak of Flies",
                cost: 1,
                category: "",
                classRestrictions: ["Aeliothurge"],
                familiarItem: false,
                startingMods: {},
                rules: "This Sorcerer may have up to 4 Locust Swarms summoned at one time."
        },
        SnowGlobe: {
                name: "Snow Globe",
                cost: 1,
                category: "",
                classRestrictions: ["Cryothurge"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of an enemy model’s Move Action within 8 inches, reduce that model’s Move characteristic by 2 for that action."
        },
        TimeLocket: {
                name: "Time Locket",
                cost: 1,
                category: "",
                classRestrictions: ["Djinn"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: Before casting a spell, this model may immediately change from the Solar state to Lunar state or from the Lunar state to the Solar state."
        },
        GillsOfTheShark: {
                name: "Gills of the Shark",
                cost: 2,
                category: "",
                classRestrictions: ["SeaShaper"],
                familiarItem: false,
                startingMods: {},
                rules: "At the start of the game select one friendly model in your Circle; that model gains Aquatic."
        },
        HolyIcon: {
                name: "Holy Icon",
                cost: 2,
                category: "",
                classRestrictions: ["Hierophant"],
                familiarItem: false,
                startingMods: {health: 2},
                rules: "This model gains +2 Starting Health."
        },
        ImperialSeal: {
                name: "Imperial Seal",
                cost: 2,
                category: "",
                classRestrictions: ["Djinn"],
                familiarItem: false,
                startingMods: {},
                rules: "Any enemy model in base contact with this model suffers 1 damage the first time a spell cast by this model is dispelled in each Casting Phase."
        },
        PendantOfTheFirstOak: {
                name: "Pendant of the First Oak",
                cost: 2,
                category: "",
                classRestrictions: ["BriarWitch"],
                familiarItem: false,
                startingMods: {},
                rules: "Whenever a Summoned model created by this Sorcerer suffers damage, this model may suffer any amount of that damage instead. Damage transferred to this model in this way cannot be Reduced or transferred again."
        },
        TheDisembowler: {
                name: "The Disembowler",
                cost: 2,
                category: "",
                classRestrictions: ["Harbinger"],
                familiarItem: false,
                startingMods: {},
                rules: "If this model declares an ATTACK Stance, enemy models that also declared an ATTACK Stance reduce the number of Remaining Successes in the opposed Duel by 1."
        },
        AncestralRune: {
                name: "Ancestral Rune",
                cost: 3,
                category: "",
                classRestrictions: ["Geomancer"],
                familiarItem: false,
                startingMods: {},
                raceRestrictions: ["Dwarf"],
                rules: "Dwarf Only: During step 1 of the friendly Casting Phase, roll a number of D6 equal to this model’s Mana. For each 6 rolled, add an additional Mana Dice to the Mana Pool."
        },
        AstralCogwheel: {
                name: "Astral Cogwheel",
                cost: 3,
                category: "",
                classRestrictions: ["Djinn"],
                familiarItem: false,
                startingMods: {},
                rules: "This model gains the spell Gateway from the Djinn level 4 Spellbook."
        },
        BrassPendulum: {
                name: "Brass Pendulum",
                cost: 3,
                category: "",
                classRestrictions: ["Djinn"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: This model may select any Manifestation at the start of Step 3 in the friendly Casting Phase. That Manifestation cannot be dispelled this turn."
        },
        ClaspOfTheTides: {
                name: "Clasp of the Tides",
                cost: 3,
                category: "",
                classRestrictions: ["SeaShaper"],
                familiarItem: false,
                startingMods: {},
                rules: "If this model begins its Move Action inside a Water Feature, increase this model’s Move characteristic by 4 until the end of the phase."
        },
        DragonForgeRing: {
                name: "Dragon Forge Ring",
                cost: 3,
                category: "",
                classRestrictions: ["Pyromancer"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                minLevel: 3,
                rules: "One Use Only: Before Casting a Spell, you may remove 2 dice from your Mana Pool. The spell “Dragon Fire” is cast automatically and cannot be dispelled. This item may only be taken by a level 3 or level 4 Pyromancer."
        },
        DragonScale: {
                name: "Dragon Scale",
                cost: 3,
                category: "",
                classRestrictions: ["Aeliothurge"],
                familiarItem: false,
                startingMods: {},
                rules: "All Summoning spells cast by this model have their Casting Value reduced by 1."
        },
        FishingSpear: {
                name: "Fishing Spear",
                cost: 3,
                category: "",
                classRestrictions: ["SeaShaper"],
                familiarItem: false,
                startingMods: {strength: 1},
                rules: "This model gains +1 Starting Strength. This model Heals 1 at the start of the Stability Phase if it is within a Water Feature."
        },
        FrozenHeart: {
                name: "Frozen Heart",
                cost: 3,
                category: "",
                classRestrictions: ["Cryothurge"],
                familiarItem: false,
                startingMods: {},
                rules: "Whenever this model casts Icebind and the spell is not dispelled, add 1 dice to your Mana Pool."
        },
        PrayerBook: {
                name: "Prayer Book",
                cost: 3,
                category: "",
                classRestrictions: ["Hierophant"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: This model may use one Prayer belonging to any Deity, regardless of its chosen Deity. This Prayer does not count toward the number of Prayers this model may use this turn."
        },
        SnowLeopardPelt: {
                name: "Snow Leopard Pelt",
                cost: 3,
                category: "",
                classRestrictions: ["Cryothurge"],
                familiarItem: false,
                startingMods: {},
                rules: "This model gains 1 bonus dice in Duels with models whose Current Move is less than its Starting Move."
        },
        SpiritPendant: {
                name: "Spirit Pendant",
                cost: 3,
                category: "",
                classRestrictions: ["BriarWitch"],
                familiarItem: false,
                startingMods: {},
                rules: "At the start of any Stability Phase, this model may choose to change its Aspect."
        },
        StoneIdol: {
                name: "Stone Idol",
                cost: 3,
                category: "",
                classRestrictions: ["Geomancer"],
                familiarItem: false,
                startingMods: {},
                rules: "This model Reduces all damage suffered in the Close Combat Phase by 1 to a minimum of 0."
        },
        StuffedCrowHat: {
                name: "Stuffed Crow Hat",
                cost: 3,
                category: "",
                classRestrictions: ["Aeliothurge"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: When the spell Feeding Time is successfully cast, you may use this item. The spell cannot be dispelled."
        },
        SwordOfNatureSWrath: {
                name: "Sword of Nature’s Wrath",
                cost: 3,
                category: "",
                classRestrictions: ["BriarWitch"],
                familiarItem: false,
                startingMods: {},
                rules: "At the Start of the Close Combat Phase, this model may suffer 1 damage; if it does, it treats the Defense of all enemy models in base contact as 1 lower, to a minimum of 2."
        },
        CarrionVeil: {
                name: "Carrion Veil",
                cost: 4,
                category: "",
                classRestrictions: ["Harbinger"],
                familiarItem: false,
                startingMods: {},
                rules: "When this model declares it is using Pox Ward, it may treat that Stance as an EVADE instead of a COUNTER for the remainder of this Close Combat Phase."
        },
        PyromancerSWand: {
                name: "Pyromancer’s Wand",
                cost: 4,
                category: "",
                classRestrictions: ["Pyromancer"],
                familiarItem: false,
                startingMods: {},
                rules: "The first time this model casts Fireball each turn, the spell deals 2 damage instead of 1."
        },
        SpearOfGorutuk: {
                name: "Spear of Gorutuk",
                cost: 4,
                category: "",
                classRestrictions: ["Cryothurge"],
                familiarItem: false,
                startingMods: {strength: 1},
                rules: "This model gains +1 Starting Strength. When this model inflicts damage on an enemy model when using ATTACK, that model loses its Move Action in the following Move Phase."
        },
        StaffOfCruelty: {
                name: "Staff of Cruelty",
                cost: 4,
                category: "",
                classRestrictions: ["Harbinger"],
                familiarItem: false,
                startingMods: {strength: 1},
                rules: "This model gains +1 Starting Strength. In addition, this model gains 2 bonus dice in each Duel against a non-Sorcerer model."
        },
        TreasureMap: {
                name: "Treasure Map",
                cost: 4,
                category: "",
                classRestrictions: ["Geomancer"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of the Move Phase, this model may be Placed so that it is touching any Blocking terrain feature."
        },
        EyeOfThePriestess: {
                name: "Eye of the Priestess",
                cost: 5,
                category: "",
                classRestrictions: ["SeaShaper"],
                familiarItem: false,
                startingMods: {},
                rules: "Water Features lose the Difficult terrain trait. Instead, models without Aquatic while within a Water Feature suffer -2 to Casting Rolls."
        },
        LeprousHand: {
                name: "Leprous Hand",
                cost: 5,
                category: "",
                classRestrictions: ["Harbinger"],
                familiarItem: false,
                startingMods: {},
                rules: "During step 2 of the opponent’s Casting Phase, add 1 Void Dice to the Void Pool for each enemy model within 3 inches of this model, to a maximum of 2 additional dice."
        },
        LuckyRabbitSFoot: {
                name: "Lucky Rabbit’s Foot",
                cost: 5,
                category: "",
                classRestrictions: ["BriarWitch"],
                familiarItem: false,
                startingMods: {},
                rules: "Once per turn, this model may reroll 1 dice as part of a casting roll, dispel roll, or Duel. If you do so the second result stands and cannot be rerolled again by another effect."
        },
        MinerSPick: {
                name: "Miner’s Pick",
                cost: 5,
                category: "",
                classRestrictions: ["Geomancer"],
                familiarItem: false,
                startingMods: {},
                rules: "Summoned models from the Geomancer’s Bestiary may be Placed within 2 inches of a Blocking terrain feature rather than within 2 inches of the Sorcerer."
        },
        MoonPendant: {
                name: "Moon Pendant",
                cost: 5,
                category: "",
                classRestrictions: ["SeaShaper"],
                familiarItem: false,
                startingMods: {},
                rules: "Once per game: At the end of the Stability Phase declare the use of this item. Magic Missile spells cannot be cast during the opponent’s Casting Phase this turn."
        },
        RighteousBlade: {
                name: "Righteous Blade",
                cost: 5,
                category: "",
                classRestrictions: ["Hierophant"],
                familiarItem: false,
                startingMods: {},
                rules: "This model may make use of the following special Stance: HOLY STRIKE: Treat this Stance as an ATTACK. In addition, if this model has more Remaining Successes in a Duel than its opponent, the enemy model suffers 2 additional damage."
        },
        SandstormPendant: {
                name: "Sandstorm Pendant",
                cost: 5,
                category: "",
                classRestrictions: ["Geomancer"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: Use at the end of the Stability Phase. For the remainder of the turn, Line of Sight cannot be drawn between models further than 4 inches apart."
        },
        CircletOfInnerFlame: {
                name: "Circlet of Inner Flame",
                cost: 6,
                category: "",
                classRestrictions: ["Pyromancer"],
                familiarItem: false,
                startingMods: {},
                rules: "At the end of the Stability Phase, this model may reduce its Mana characteristic by 1 and increase its Void characteristic by 1 until the start of the next Stability Phase."
        },
        FeldorSMandible: {
                name: "Feldor’s Mandible",
                cost: 6,
                category: "",
                classRestrictions: ["Harbinger"],
                familiarItem: false,
                startingMods: {},
                rules: "Skeleton Warriors summoned via The Grave Stirs may ignore the normal Summoning restriction against being Placed in base contact with an enemy model."
        },
        FlameGauntlet: {
                name: "Flame Gauntlet",
                cost: 6,
                category: "",
                classRestrictions: ["Pyromancer"],
                familiarItem: false,
                startingMods: {},
                rules: "Instead of taking a Move Action, all models within a Cone suffer 1 damage."
        },
        ForgeOfMasterDugran: {
                name: "Forge of Master Dugran",
                cost: 6,
                category: "",
                classRestrictions: ["Geomancer"],
                familiarItem: false,
                startingMods: {},
                rules: "This model gains the following Spell: Summon Forge Fiend Casting Value: 11 Summoning: Place a Forge Fiend within 2 inches of this model."
        },
        WingsOfFortune: {
                name: "Wings of Fortune",
                cost: 6,
                category: "",
                classRestrictions: ["Aeliothurge"],
                familiarItem: false,
                startingMods: {},
                rules: "Each time this model casts a Summoning spell, it may reroll 1 dice that is not a natural 6. If the rerolled dice is a natural 6, roll an additional dice as normal."
        },
        CloakOfDarkness: {
                name: "Cloak of Darkness",
                cost: 7,
                category: "",
                classRestrictions: ["Djinn"],
                familiarItem: false,
                startingMods: {},
                rules: "When this model is in the Lunar State, it adds 1 to its final casting total."
        },
        AmuletOfTheSpiritGuide: {
                name: "Amulet of the Spirit Guide",
                cost: 9,
                category: "",
                classRestrictions: ["BriarWitch"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only. At the start of the Stability Phase, this model may use this item. Until the start of the next Stability Phase, this model has a second Aspect in addition to its original Aspect. While this item is active, effects that reference this model's Aspect use the effects of both Aspects."
        },
        BlackTorch: {
                name: "Black Torch",
                cost: 10,
                category: "",
                classRestrictions: ["Harbinger"],
                familiarItem: false,
                startingMods: {},
                rules: "The first time each turn this model’s spell is dispelled, it may return up to 3 Mana Dice to the Mana Pool."
        },
        PrayerIcon: {
                name: "Prayer Icon",
                cost: 10,
                category: "",
                classRestrictions: ["Hierophant"],
                familiarItem: false,
                startingMods: {},
                rules: "His devotion burns fervently and his prayers are always answered. This model may use 2 Prayers each turn, instead of the normal limit of 1."
        },
        ReliquaryOfTheFirstSaint: {
                name: "Reliquary of the First Saint",
                cost: 10,
                category: "",
                classRestrictions: ["Hierophant"],
                familiarItem: false,
                startingMods: {mana: 2, void: 1},
                rules: "This model gains +2 Starting Mana and +1 Starting Void."
        },
        TheKingsCrown: {
                name: "The King’s Crown",
                cost: 10,
                category: "",
                classRestrictions: ["Cryothurge"],
		raceRestrictions: ["Troll"],
                familiarItem: false,
                startingMods: {mana: 1, void: 1},
                rules: "Troll Only: This model gains +1 Starting Mana and +1 Starting Void. In addition, this model’s Battle Trance ability occurs on Turns 3, 4, and 5."
        },

        // FAMILIAR MAGIC ITEMS
        RubyCollar: {
                name: "Ruby Collar",
                cost: 1,
                category: "",
                familiarItem: true,
                startingMods: {health: 1},
                rules: "This model gains +1 Starting Health."
        },
        GemmedHarness: {
                name: "Gemmed Harness",
                cost: 2,
                category: "",
                familiarItem: true,
                startingMods: {},
                rules: "This model Reduces all damage suffered by 1 to a minimum of 1."
        },
        GoldenWings: {
                name: "Golden Wings",
                cost: 2,
                category: "",
                familiarItem: true,
                startingMods: {move: 3},
                rules: "This model gains +3 to its Starting Move characteristic."
        },
        OpalCollar: {
                name: "Opal Collar",
                cost: 2,
                category: "",
                familiarItem: true,
                startingMods: {},
                rules: "When this model would suffer damage, you may have another friendly model within 2 inches suffer the damage instead. This damage cannot be Reduced or transferred to another model."
        },
        SapphireCollar: {
                name: "Sapphire Collar",
                cost: 3,
                category: "",
                familiarItem: true,
                startingMods: {health: 2},
                rules: "This model gains +2 Starting Health."
        },
        RunicSymbol: {
                name: "Runic Symbol",
                cost: 5,
                category: "",
                familiarItem: true,
                startingMods: {void: 2},
                rules: "This model gains +2 Starting Void."
        },

        // GENERAL MAGIC ITEMS
        AcidArrow: {
                name: "Acid Arrow",
                cost: 1,
                category: "Arrow",
                familiarItem: false,
                startingMods: {},
                rules: "<Arrow> When making a <Bow> Strike you may apply the Poisoned effect if you inflict any damage on the target."
        },
        BarbedArrow: {
                name: "Barbed Arrow",
                cost: 1,
                category: "Arrow",
                familiarItem: false,
                startingMods: {},
                rules: "<Arrow> When making a <Bow> Strike you may apply the Crippled effect if you inflict any damage on the target."
        },
        FlamingArrow: {
                name: "Flaming Arrow",
                cost: 1,
                category: "Arrow",
                familiarItem: false,
                startingMods: {},
                rules: "<Arrow> When making a <Bow> Strike you may apply the Burning effect if you inflict any damage on the target."
        },
        HealingSalve: {
                name: "Healing Salve",
                cost: 1,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the end of the Stability Phase, you may remove the Poisoned, Burning, or Crippled effect from this model or any other model in base contact."
        },
        ParadoxCube: {
                name: "Paradox Cube",
                cost: 1,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: Before making a Casting Roll using 1 or 2 Mana Dice, this model may activate this item. For that Casting Roll, results of 4, 5, or 6 generate an additional dice instead of only 6’s."
        },
        PiercingArrow: {
                name: "Piercing Arrow",
                cost: 1,
                category: "Arrow",
                familiarItem: false,
                startingMods: {},
                rules: "<Arrow> When making a <Bow> Strike the damage may not be Reduced."
        },
        PowerStoneI: {
                name: "Power Stone I",
                cost: 1,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: When creating the Mana Pool, add 1 additional Mana Dice."
        },
        SpeedPotion: {
                name: "Speed Potion",
                cost: 1,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of the Move Phase, add +2 Move until the start of the next Stability Phase."
        },
        StrengthPotion: {
                name: "Strength Potion",
                cost: 1,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of the Close Combat Phase, add +1 Strength until the start of the next Stability Phase."
        },
        BarbedPoleax: {
                name: "Barbed Poleax",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "If this model ends a Move Action within 1 inch of one or more enemy models, this model may choose to Push one of those models directly into base contact."
        },
        DragonSBaneArrow: {
                name: "Dragon’s Bane Arrow",
                cost: 2,
                category: "Arrow",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: <Arrow> When making a <Bow> Strike you may add 3 Strength to the Strike."
        },
        FloatingDisc: {
                name: "Floating Disc",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {move: 1},
                rules: "This model gains +1 Starting Move."
        },
        FlyingCarpet: {
                name: "Flying Carpet",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model ignores the traits of terrain features when performing a Move Action."
        },
        GoldenSpear: {
                name: "Golden Spear",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model gains +1 bonus dice in Duels when using the COUNTER Stance."
        },
        HealingPotion: {
                name: "Healing Potion",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: This model Heals 4. This is only usable in the Stability Phase."
        },
        HuntingArrow: {
                name: "Hunting Arrow",
                cost: 2,
                category: "Arrow",
                familiarItem: false,
                startingMods: {},
                rules: "<Arrow> When making a <Bow> Strike you may add 1 Strength to the Strike."
        },
        HuntingBow: {
                name: "Hunting Bow",
                cost: 2,
                category: "Bow",
                familiarItem: false,
                startingMods: {},
                rules: "<Bow> This model may change its Move characteristic to 2 until the end of the Move Phase. If it does so, at the end of its Move Action, if this model is not in base contact with an enemy model, it may make a Strength 2 Strike against one model within 8 inches and line of sight. When making this Strike you may apply the effects of a single <Arrow> Magic item."
        },
        IonStoneI: {
                name: "Ion Stone I",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: When creating the Void Pool, add 1 additional Void Dice."
        },
        JadeAetherStone: {
                name: "Jade Aether Stone",
                cost: 2,
                category: "AetherStone",
                familiarItem: false,
                startingMods: {},
                rules: "<Aether Stone> Once per turn, after rolling dice to cast a spell, you may add 1 to the Casting Roll. Only one <Aether Stone> may be chosen per Sorcerer."
        },
        LapisLazuliAetherStone: {
                name: "Lapis Lazuli Aether Stone",
                cost: 2,
                category: "AetherStone",
                familiarItem: false,
                startingMods: {},
                rules: "<Aether Stone> Once per turn, after rolling dice to dispel a spell, you may remove 2 Void Dice still remaining in the Void Pool to add 6 to the total Dispel Roll. Only one <Aether Stone> may be chosen per Sorcerer."
        },
        OpalAetherStone: {
                name: "Opal Aether Stone",
                cost: 2,
                category: "AetherStone",
                familiarItem: false,
                startingMods: {},
                rules: "<Aether Stone> Once per turn, after rolling dice to dispel a spell, you may add 1 to the Dispel Roll. Only one <Aether Stone> may be chosen per Sorcerer."
        },
        PowerStoneII: {
                name: "Power Stone II",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: When creating the Mana Pool, add 2 additional Mana Dice."
        },
        ScrollOfCleansing: {
                name: "Scroll of Cleansing",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of any phase, end 1 Manifestation or remove the effects of 1 Invocation affecting a target friendly model anywhere on the board."
        },
        ShadowTunic: {
                name: "Shadow Tunic",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: Use at the end of the Stability Phase. This model cannot be targeted by Magic Missile spells until the start of the next Stability Phase."
        },
        StarReliquary: {
                name: "Star Reliquary",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model may ignore the typical restriction on <Aether Stone>; instead they may carry up to 3."
        },
        VoidCharm: {
                name: "Void Charm",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: This model may Dispel a Manifestation without rolling any dice during step 3 of the enemy Casting Phase."
        },
        WingedCrown: {
                name: "Winged Crown",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "At the start of the game, before the first Stability Phase, this model may be Pushed up to its Move characteristic in any direction."
        },
        WitchwoodBuckler: {
                name: "Witchwood Buckler",
                cost: 2,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model Reduces all damage suffered by 1 to a minimum of 0 when being attacked by <Bow> Strikes."
        },
        BladedArrow: {
                name: "Bladed Arrow",
                cost: 3,
                category: "Arrow",
                familiarItem: false,
                startingMods: {},
                rules: "<Arrow> When making a <Bow> Strike, you may add 2 Strength to the Strike."
        },
        DemonicBlade: {
                name: "Demonic Blade",
                cost: 3,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "The damage this model inflicts in the Close Combat Phase can never be Reduced."
        },
        DispelScroll: {
                name: "Dispel Scroll",
                cost: 3,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: After a spell is cast, you may dispel the spell without spending any Void Dice. That spell may not be cast by that Sorcerer again this phase."
        },
        FrozenWarAxe: {
                name: "Frozen War Axe",
                cost: 3,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "When an enemy model declares an EVADE Stance, it must reroll all dice that Generated Successes in a Duel against this model."
        },
        GolemSDrum: {
                name: "Golem’s Drum",
                cost: 3,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of the Move Phase, Push all models in base contact with this model 4 inches directly away."
        },
        HelmOfDomination: {
                name: "Helm of Domination",
                cost: 3,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "At the start of the Move Phase this model may roll a D6 and add 1 for each Retainer within 6 inches of it. If the total is 6 or more, it may control a target enemy Retainer within 6 inches during the following Move and Close Combat Phases as if it were a friendly model."
        },
        MutilatingDagger: {
                name: "Mutilating Dagger",
                cost: 3,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "During Step 1 of your friendly Casting Phase, this model may suffer 1 damage to add 1 Mana Dice to the Mana Pool."
        },
        RepeaterCrossbow: {
                name: "Repeater Crossbow",
                cost: 3,
                category: "Bow",
                familiarItem: false,
                startingMods: {},
                rules: "<Bow> This model may change its Move characteristic to 2 until the end of the Move Phase. If it does so, at the end of its Move Action, if this model is not in base contact with an enemy model, it may make a Strength 2 Strike against one model within 8 inches and line of sight. When making this Strike you may apply the effects of up to 2 <Arrow> Magic items."
        },
        RubyAetherStone: {
                name: "Ruby Aether Stone",
                cost: 3,
                category: "AetherStone",
                familiarItem: false,
                startingMods: {},
                rules: "<Aether Stone> Once per Casting Phase, before casting a spell, you may remove 2 Mana Dice from your Mana Pool. Your opponent must remove 1 Void Dice from their Void Pool. Only one <Aether Stone> may be chosen per Sorcerer."
        },
        SorunSTomeOfPossibility: {
                name: "Sorun’s Tome of Possibility",
                cost: 3,
                category: "",
                deityRestrictions: ["Sorun"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the beginning of Step 4 of the enemy’s Casting Phase, before any spells are cast, choose an enemy Sorcerer. During this phase, when that Sorcerer rolls a 6 during a Casting Roll, it does not generate an additional dice. This item may only be taken by models with the keyword The Students of the Teacher."
        },
        TopazAetherStone: {
                name: "Topaz Aether Stone",
                cost: 3,
                category: "AetherStone",
                familiarItem: false,
                startingMods: {},
                rules: "<Aether Stone> Once per Casting Phase, you may roll an additional Mana Dice from your Mana Pool to your Casting Roll after seeing the Dispel Roll. This dice may cause additional rolls on a natural 6 or cause Magical Feedback as normal. Only one <Aether Stone> may be chosen per Sorcerer."
        },
        TowerShield: {
                name: "Tower Shield",
                cost: 3,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "Increase this Model’s Defense by 1 when targeted by a <Bow> Strike."
        },
        AmethystAetherStone: {
                name: "Amethyst Aether Stone",
                cost: 4,
                category: "AetherStone",
                familiarItem: false,
                startingMods: {},
                rules: "<Aether Stone> Once per Casting Phase, after attempting to cast a spell which was dispelled by your opponent, you may return one dice to your Mana Pool. Only one <Aether Stone> may be chosen per Sorcerer."
        },
        BloodyTome: {
                name: "Bloody Tome",
                cost: 4,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the end of the Stability Phase, this model may target another friendly model within 6 inches. That model suffers damage equal to its remaining Health which may not be Reduced. This model Heals an equal amount."
        },
        BulwarkShield: {
                name: "Bulwark Shield",
                cost: 4,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model cannot be targeted by <Bow> Strikes but reduces its Move by 1."
        },
        DeathMask: {
                name: "Death Mask",
                cost: 4,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the end of the Stability Phase, target an enemy model within 6 inches. Until the start of the next Stability Phase, whenever that model attempts to cast a spell, it may remove 1 Mana Dice from its Mana Pool. If it does not, it suffers 1 damage."
        },
        EnduringStone: {
                name: "Enduring Stone",
                cost: 4,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model cannot be Pushed or Placed by another model, friendly or enemy."
        },
        GreatBow: {
                name: "Great Bow",
                cost: 4,
                category: "Bow",
                familiarItem: false,
                startingMods: {},
                rules: "<Bow> This model may change its Move characteristic to 2 until the end of the Move Phase. If it does so, at the end of its Move Action, if this model is not in base contact with an enemy model, it may make a Strength 3 Strike against one model within 8 inches and line of sight. When making this Strike you may apply the effects of a single <Arrow> Magic item."
        },
        IonStoneII: {
                name: "Ion Stone II",
                cost: 4,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: When creating the Void Pool, add 2 additional Void Dice."
        },
        ScrollOfTheAsrai: {
                name: "Scroll of the Asrai",
                cost: 4,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "After this model is deployed, choose 1 spell in this model’s Spellbook that is 1 level higher than this model’s Sorcerer level. This model may cast that spell this game. This item cannot be chosen by a level 4 Sorcerer."
        },
        BookOfTheHoru: {
                name: "Book of the Horu",
                cost: 5,
                category: "",
                raceRestrictions: ["Horu"],
                familiarItem: false,
                startingMods: {},
                rules: "Horu Only. During Step 1 of the friendly Casting Phase, roll a number of dice equal to this model’s Mana characteristic. For each 6, this model adds 1 Mana Dice to the Mana Pool."
        },
        CelestialCloak: {
                name: "Celestial Cloak",
                cost: 5,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model may draw Line of Sight through Obscuring Terrain when determining Line of Sight for Magic Missile spells."
        },
        SapphireAetherStone: {
                name: "Sapphire Aether Stone",
                cost: 5,
                category: "AetherStone",
                familiarItem: false,
                startingMods: {},
                rules: "<Aether Stone> After attempting to dispel a spell whether it was a success or not, you may return a single dice back into your Void Pool if at least 2 Void Dice were used to attempt the dispel. Only one <Aether Stone> may be chosen per Sorcerer."
        },
        ScrollOfMendax: {
                name: "Scroll of Mendax",
                cost: 5,
                category: "",
                deityRestrictions: ["Mendax"],
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "This item may only be chosen by models with the Worshipper of Mendax keyword. One Use Only: At the end of the Stability Phase, select 1 spell from any Spellbook in the game of equal or lesser level than this Sorcerer. Until the start of the next Stability Phase, this model may cast that spell as if it was in their Spellbook."
        },
        CharmedIdol: {
                name: "Charmed Idol",
                cost: 6,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: If this model is reduced to 0 or less Health, this model instead remains in the game with 1 Health remaining."
        },
        CompoundBow: {
                name: "Compound Bow",
                cost: 6,
                category: "Bow",
                familiarItem: false,
                startingMods: {},
                rules: "<Bow> This model may change its Move characteristic to 0 until the end of the Move Phase. If it does so, at the end of its Move Action, if this model is not in base contact with an enemy model, it may make a Strength 4 Strike against one model within 8 inches and line of sight. When making this Strike you may apply the effects of a single <Arrow> Magic item."
        },
        GoreTotem: {
                name: "Gore Totem",
                cost: 6,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "At the end of any phase in which this model inflicted damage on enemy models, this model Heals 1."
        },
        LightningSword: {
                name: "Lightning Sword",
                cost: 6,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model treats the Defense characteristic of all enemy models in base contact with it as 1 lower than normal, to a minimum of 2."
        },
        RingOfProtection: {
                name: "Ring of Protection",
                cost: 6,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "Spells that target this model increase the Casting Value by 1 if cast by an enemy Sorcerer."
        },
        TranscendentPearl: {
                name: "Transcendent Pearl",
                cost: 6,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the beginning of any Phase, activate this Item. During that phase, this model reduces all damage suffered to 1."
        },
        EtherealChains: {
                name: "Ethereal Chains",
                cost: 7,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of the Move Phase, select another model within 6 inches. If that model makes a Move Action this phase, at the end of that Move, Place this model into base contact with the target model."
        },
        DiamondSkull: {
                name: "Diamond Skull",
                cost: 8,
                category: "",
                familiarItem: false,
                startingMods: {},
                rules: "This model may have 2 Summons of the same spell active at the same time, rather than the usual limit of 1. This has no effect on Summoning spells that normally allow more than 1 Summon to be in play."
        },
        DjinniLamp: {
                name: "Djinni Lamp",
                cost: 8,
                category: "",
                familiarItem: false,
                startingMods: {},
                singleUse: true,
                rules: "One Use Only: At the start of Step 4 of a friendly Casting Phase, this model may choose a Summoning spell from the list of spells it knows. That spell is automatically cast, without making a Casting Roll or spending Mana Dice. This spell cannot be dispelled."
        },
        GhulThurSBreastplate: {
                name: "Ghul Thur’s Breastplate",
                cost: 9,
                category: "",
                deityRestrictions: ["GhulThur"],
                familiarItem: false,
                startingMods: {defense: 1},
                rules: "This item may only be chosen by models with the Devout of Ghul Thur keyword. This model increases its Starting Defense characteristic by 1."
        }
};

const preCons = {

    FireMesa: {
        name: "Envoys of the Fire Mesa",

        sorcerers: [
            {
                name: "Steve",
                class: "Geomancer",
                race: "Dwarf",
                deity: "Avar",
                level: 4,

                items: [
                    "CharmedIdol"
                ],

                retainers: [
                    "Defender",
                    "Paragon"
                ],

                familiar: [
                    "Warden",
                    "Loyal",
                    "GemmedHarness"
                ]
            },

            {
                name: "Haldor",
                class: "Pyromancer",
                race: "Human",
                deity: "Ignis",
                level: 2,

                items: [
                    "FlameGauntlet",
                    "DispelScroll",
                    "PowerStoneI"
                ],

                retainers: [],

                familiar: []
            },

            {
                name: "",
                class: "",
                race: "",
                deity: "",
                level: "",

                items: [],

                retainers: [],

                familiar: []
            }
        ]
    },


    FreezingPlague: {
        name: "Disciples of the Freezing Plague",

        sorcerers: [
            {
                name: "Brakka",
                class: "Harbinger",
                race: "Human",
                deity: "Sorun",
                level: 4,

                items: [
                    "StaffOfCruelty",
                    "DispelScroll",
                    "StrengthPotion"
                ],

                retainers: [
                    "Longbowmen",
                    "Paragon"
                ],

                familiar: [
                    "Stalker",
                    "Aggressive"
                ]
            },

            {
                name: "Lucan",
                class: "Cryothurge",
                race: "Troll",
                deity: "Mendax",
                level: 2,

                items: [
                    "TheKingsCrown"
                ],

                retainers: [],

                familiar: []
            },

            {
                name: "",
                class: "",
                race: "",
                deity: "",
                level: "",

                items: [],

                retainers: [],

                familiar: []
            }
        ]
    }
};