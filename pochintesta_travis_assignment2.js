//	Travis J. Pochintesta
//	SDI 1302
//	Project 2
//	Functions & Loops

//  Non-Function Global Variables

/*Pertains to Initial Procedure in Main Code*/
var offOn = "Yes";
/*Pertains to Array Function*/
var techList = ["Moss", "Roy"/*,"Jan"*/]; /*Temporarily commented out index 2 test part of my Array Function*/
/*Pertains to String Function*/
var arrive = " will arrive shortly.";

//  Functions

/*Boolean Function*/
var isOn = function(computerOn, monitorOn, allOn) {
	
	if((computerOn && monitorOn) || allOn) {
			console.log("Excellent!  Now we just need a little more information to complete your ticket.");
	} else {
			console.log("Please do so now.");
				return isOn;
	}
	}
	
/*Number Function*/
var whichFloor = function(floor) {

		while (floor < 8) {
			console.log("Determining Tier...");
				floor++; 
			}console.log("A Tier 2 ticket has been created.");
		return whichFloor;
		}
	
/*Array Function*/
var whichTech = function(tech) {
			for (var  tech = 0; tech < techList.length; tech++) {
				console.log("Determining Tech...");
				}
			if(techList.length < 3) {
				console.log(techList.length + " techs are currently available.");
			} else {
				console.log("All techs are available.");
				}
				console.log( techList[1] + " is the tech on call.");
			return whichTech;
			}
			
/*String Function*/
var techName = function(name) {
		if(name = "Roy") {
			console.log(name + arrive);
		} else {
			console.log("A tech is on the way.");
		} 
		return techName;
		}
	
//  Main Code

/*Initial Procedure*/

console.log("Welcome to the IT Dept.  Have you tried turning it off and on again?");

	if (offOn === "Yes") { 
			console.log("Excellent!  Now we just need a little more information to complete your ticket.");
	} else {
			console.log("Please do so now.");
	}
			
/*Boolean Function Call*/

console.log("Is everything turned on?");
	
		(isOn(true, false, true));
		
/*Number Function Call*/

console.log("On which floor are you located?");

		(whichFloor(7));

/*Array Function Call*/

console.log("Determining tech on call.");

		(whichTech(2));
		
/*String Function Call*/

		(techName("Roy"));