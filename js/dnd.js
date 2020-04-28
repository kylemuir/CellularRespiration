const boxElements = document.querySelectorAll(".box");

boxElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  // elem.addEventListener("drag", drag);
  elem.addEventListener("dragend", dragEnd);
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});

function resetPage() {
 location.reload();
}

//testing boxes to easily show off CB modes
let cbox1 = document.getElementById("cbox1");
let cbox2 = document.getElementById("cbox2"); //yellow does not change
let cbox3 = document.getElementById("cbox3");

//global colors that can be updated via CB button
let CBgreen = "green"; //to be swapped with blue in event of CB enabled
let CBred = "red";     //to be swapped with dark yellow in event of CB enabled
let CByellow= "gold";  //unchanged but still kept as variable for quicker editing and testing
let CBindex = 0;
//**
//* CB works via a global counter CBindex and ++'s counter on every click
//* if counter is an Even then update colors to CB ones
//* else set colors to "normal" on Odd numbers
function CB() {
    if(CBindex % 2 === 0) { //if current button index is even then enable CB friendly colors
        CBgreen = "blue";     //swapped with blue in event of CB enabled
        CBred = "#837129";    //swapped with dark yellow in event of CB enabled
        //CB test area
        cbox1.style.borderColor = CBgreen;
        cbox3.style.borderColor = CBred;
    }
    else { //else reset CB friendly colors back to "normal"
        CBgreen = "green"; //reset to green
        CBred = "red";     //reset to red
        //CB test area
        cbox1.style.borderColor = CBgreen;
        cbox3.style.borderColor = CBred;
    }
    CBindex++;
    checkAnswers(); //this resets the borders of what user currently has placed with an updated CB mode enable
}

function checkAnswers() {
	//
    // Plant Cell Answer Checks
    //
    //TEXT 1
	var plant1array = ["thylakoid membrane",
      "Thylakoid Membrane",
      "Thylakoid membrane",
      "thylakoid Membrane",
      "THYLAKOID MEMBRANE"];
	// -> console.log(plant1array[0]);
	var plant1ans = document.getElementById("textP1").value;
	if (plant1array.includes(plant1ans)) {
		document.getElementById("textP1").style.borderWidth = "thick";   document.getElementById("textP1").style.borderStyle = "solid";     document.getElementById("textP1").style.borderColor = CBgreen;
	}
	else {
		document.getElementById("textP1").style.borderWidth = "thick";   document.getElementById("textP1").style.borderStyle = "dotted";     document.getElementById("textP1").style.borderColor = CBred;
	}

    //TEXT 2
    var plant2array = ["stroma",
      "Stroma",
      "STROMA"];
	var plant2ans = document.getElementById("textP2").value;
	if (plant2array.includes(plant2ans)) {
		document.getElementById("textP2").style.borderWidth = "thick";   document.getElementById("textP2").style.borderStyle = "solid";     document.getElementById("textP2").style.borderColor = CBgreen;
	}
	else {
		document.getElementById("textP2").style.borderWidth = "thick";   document.getElementById("textP2").style.borderStyle = "dotted";     document.getElementById("textP2").style.borderColor = CBred;
	}

    //TEXT 3
     var plant3array = ["thylakoid lumen",
      "Thylakoid Lumen",
      "THYLAKOID LUMEN",
	  "lumen", "Lumen", "LUMEN"];
	var plant3ans = document.getElementById("textP3").value;
	if (plant3array.includes(plant3ans)) {
		document.getElementById("textP3").style.borderWidth = "thick";   document.getElementById("textP3").style.borderStyle = "solid";     document.getElementById("textP3").style.borderColor = CBgreen;
	}
	else {
		document.getElementById("textP3").style.borderWidth = "thick";   document.getElementById("textP3").style.borderStyle = "dotted";     document.getElementById("textP3").style.borderColor = CBred;
	}

    //PLANT DROPDOWN
    //DD 1
    let drp1 = document.getElementById("dd1");
    let drptext1 = drp1.options[drp1.selectedIndex].text; //grabs the selected text from drop down list
    // let drp1_option1 = document.getElementById('div2').contains(drp1);
    if (drptext1 === "Low") { //change to Low or High depending on which is correct
        // alert("Drop1 True");
        drp1.style.borderWidth = "thick";    drp1.style.borderStyle = "solid";     drp1.style.borderColor = CBgreen;
    }
    else {
        drp1.style.borderWidth = "thick";    drp1.style.borderStyle = "dotted";     drp1.style.borderColor = CBred;
    }

    //DD 2
    let drp2 = document.getElementById("dd2");
    let drptext2 = drp2.options[drp2.selectedIndex].text; //grabs the selected text from drop down list
    // let drp1_option1 = document.getElementById('div2').contains(drp1);
    if (drptext2 === "High") { //change to Low or High depending on which is correct
        // alert("Drop1 True");
        drp2.style.borderWidth = "thick";    drp2.style.borderStyle = "solid";     drp2.style.borderColor = CBgreen;
    }
    else {
        drp2.style.borderWidth = "thick";    drp2.style.borderStyle = "dotted";     drp2.style.borderColor = CBred;
    }

    //PLANT IMAGE MATCHING BELOW
    //SPOT 1
    let img1a = document.getElementById("light1");
	let img1b = document.getElementById("light2");
    if (document.getElementById("div1").contains(img1a)) {
        // Spot 1 True
        img1a.style.borderWidth = "thick";    img1a.style.borderStyle = "solid";     img1a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div1").contains(img1b)) {
		img1b.style.borderWidth = "thick";    img1b.style.borderStyle = "solid";     img1b.style.borderColor = CBgreen;
	}
    else if(document.getElementById("container2").contains(img1a)) {
        // Spot 1 Wrong organ
        img1a.style.borderWidth = "thick";    img1a.style.borderStyle = "dotted";    img1a.style.borderColor = CBred;
    }
    else {
        // Spot 1 Wrong position
        img1a.style.borderWidth = "thick";    img1a.style.borderStyle = "dashed";    img1a.style.borderColor = CByellow;
    }

    //SPOT 2
    let img2 = document.getElementById("ps2");
    if (document.getElementById("div2").contains(img2)) {
        // Spot 2 True
        img2.style.borderWidth = "thick";    img2.style.borderStyle = "solid";     img2.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img2)) {
        // Spot 2 Wrong organ
        img2.style.borderWidth = "thick";    img2.style.borderStyle = "dotted";    img2.style.borderColor = CBred;
    }
    else {
        // Spot 2 Wrong position
        img2.style.borderWidth = "thick";    img2.style.borderStyle = "dashed";    img2.style.borderColor = CByellow;
    }

    //SPOT 3
    let img3 = document.getElementById("h20Split");
    if (document.getElementById("div3").contains(img3)) {
        // Spot 3 True
        img3.style.borderWidth = "thick";    img3.style.borderStyle = "solid";     img3.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img3)) {
        // Spot 3 Wrong organ
        img3.style.borderWidth = "thick";    img3.style.borderStyle = "dotted";    img3.style.borderColor = CBred;
    }
    else {
        // Spot 3 Wrong position
        img3.style.borderWidth = "thick";    img3.style.borderStyle = "dashed";    img3.style.borderColor = CByellow;
    }

    //SPOT 4
    let img4a = document.getElementById("hydrogen1");
	let img4b = document.getElementById("hydrogen2");
	let img4c = document.getElementById("hydrogen3");
	let img4d = document.getElementById("hydrogen4");
	let img4e = document.getElementById("hydrogen5");
	let img4f = document.getElementById("hydrogen6");
	let img4g = document.getElementById("hydrogen7");
	let img4h = document.getElementById("hydrogen8");
	let img4i = document.getElementById("hydrogen9");
	let img4j = document.getElementById("hydrogen10");
    if (document.getElementById("div4").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div4").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

    //SPOT 5
    let img5a = document.getElementById("electron1");
	let img5b = document.getElementById("electron2");
    if (document.getElementById("div5").contains(img5a)) {
        // Spot 5 True
        img5a.style.borderWidth = "thick";    img5a.style.borderStyle = "solid";     img5a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div5").contains(img5b)) {
		img5b.style.borderWidth = "thick";    img5b.style.borderStyle = "solid";
		img5b.style.borderColor = CBgreen;
	}
    else if(document.getElementById("container2").contains(img5a)) {
        // Spot 5 Wrong organ
        img5a.style.borderWidth = "thick";    img5a.style.borderStyle = "dotted";    img5a.style.borderColor = CBred;
    }
    else {
        // Spot 5 Wrong position
        img5a.style.borderWidth = "thick";    img5a.style.borderStyle = "dashed";    img5a.style.borderColor = CByellow;
    }

    //SPOT 6
    let img6a = document.getElementById("hydrogen2");
	let img6b = document.getElementById("hydrogen1");
	let img6c = document.getElementById("hydrogen3");
	let img6d = document.getElementById("hydrogen4");
	let img6e = document.getElementById("hydrogen5");
	let img6f = document.getElementById("hydrogen6");
	let img6g = document.getElementById("hydrogen7");
	let img6h = document.getElementById("hydrogen8");
	let img6i = document.getElementById("hydrogen9");
	let img6j = document.getElementById("hydrogen10");
    if (document.getElementById("div6").contains(img6a)) {
        // Spot 4 True
        img6a.style.borderWidth = "thick";    img6a.style.borderStyle = "solid";     img6a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6b)) {
        // Spot 4 True
        img6b.style.borderWidth = "thick";    img6b.style.borderStyle = "solid";     img6b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6c)) {
        // Spot 4 True
        img6c.style.borderWidth = "thick";    img6c.style.borderStyle = "solid";     img6c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6d)) {
        // Spot 4 True
        img6d.style.borderWidth = "thick";    img6d.style.borderStyle = "solid";     img6d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6e)) {
        // Spot 4 True
        img6e.style.borderWidth = "thick";    img6e.style.borderStyle = "solid";     img6e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6f)) {
        // Spot 4 True
        img6f.style.borderWidth = "thick";    img6f.style.borderStyle = "solid";     iimg6f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6g)) {
        // Spot 4 True
        img6g.style.borderWidth = "thick";    img6g.style.borderStyle = "solid";     img6g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6h)) {
        // Spot 4 True
        img6h.style.borderWidth = "thick";    img6h.style.borderStyle = "solid";     img6h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6i)) {
        // Spot 4 True
        img6i.style.borderWidth = "thick";    img6i.style.borderStyle = "solid";     img6i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div6").contains(img6j)) {
        // Spot 4 True
        img6j.style.borderWidth = "thick";    img6j.style.borderStyle = "solid";     img6j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img6a)) {
        // Spot 4 Wrong organ
        img6a.style.borderWidth = "thick";    img6a.style.borderStyle = "dotted";    img6a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img6a.style.borderWidth = "thick";    img6a.style.borderStyle = "dashed";    img6a.style.borderColor = CByellow;
    }

    //SPOT 7
    let img7a = document.getElementById("light2");
	let img7b = document.getElementById("light1");
    if (document.getElementById("div7").contains(img7a)) {
        // Spot 7 True
        img7a.style.borderWidth = "thick";    img7a.style.borderStyle = "solid";     img7a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div7").contains(img7b)){
		img7b.style.borderWidth = "thick";    img7b.style.borderStyle = "solid";     img7b.style.borderColor = CBgreen;
	}
    else if(document.getElementById("container2").contains(img7)) {
        // Spot 7 Wrong organ
        img7a.style.borderWidth = "thick";    img7a.style.borderStyle = "dotted";    img7a.style.borderColor = CBred;
    }
    else {
        // Spot 7 Wrong position
        img7a.style.borderWidth = "thick";    img7a.style.borderStyle = "dashed";    img7a.style.borderColor = CByellow;
    }

    //SPOT 8
    let img8 = document.getElementById("nadpTedactose");
    if (document.getElementById("div8").contains(img8)) {
        // Spot 8 True
        img8.style.borderWidth = "thick";    img8.style.borderStyle = "solid";     img8.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img8)) {
        // Spot 8 Wrong organ
        img8.style.borderWidth = "thick";    img8.style.borderStyle = "dotted";    img8.style.borderColor = CBred;
    }
    else {
        // Spot 8 Wrong position
        img8.style.borderWidth = "thick";    img8.style.borderStyle = "dashed";    img8.style.borderColor = CByellow;
    }

    //SPOT 9
    let img9 = document.getElementById("ps1");
    if (document.getElementById("div9").contains(img9)) {
        // Spot 9 True
        img9.style.borderWidth = "thick";    img9.style.borderStyle = "solid";     img9.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img9)) {
        // Spot 9 Wrong organ
        img9.style.borderWidth = "thick";    img9.style.borderStyle = "dotted";    img9.style.borderColor = CBred;
    }
    else {
        // Spot 9 Wrong position
        img9.style.borderWidth = "thick";    img9.style.borderStyle = "dashed";    img9.style.borderColor = CByellow;
    }

    //SPOT 10
    img4a = document.getElementById("hydrogen3");
	img4b = document.getElementById("hydrogen2");
	img4c = document.getElementById("hydrogen1");
	img4d = document.getElementById("hydrogen4");
	img4e = document.getElementById("hydrogen5");
	img4f = document.getElementById("hydrogen6");
	img4g = document.getElementById("hydrogen7");
	img4h = document.getElementById("hydrogen8");
	img4i = document.getElementById("hydrogen9");
	img4j = document.getElementById("hydrogen10");
    if (document.getElementById("div10").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div10").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

    //SPOT 11
    let img11 = document.getElementById("atpSynthese1");
    if (document.getElementById("div11").contains(img11)) {
        // Spot 11 True
        img11.style.borderWidth = "thick";    img11.style.borderStyle = "solid";     img11.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img11)) {
        // Spot 11 Wrong organ
        img11.style.borderWidth = "thick";    img11.style.borderStyle = "dotted";    img11.style.borderColor = CBred;
    }
    else {
        // Spot 11 Wrong position
        img11.style.borderWidth = "thick";    img11.style.borderStyle = "dashed";    img11.style.borderColor = CByellow;
    }

    //SPOT 12
    img4a = document.getElementById("hydrogen4");
	img4b = document.getElementById("hydrogen2");
	img4c = document.getElementById("hydrogen3");
	img4d = document.getElementById("hydrogen1");
	img4e = document.getElementById("hydrogen5");
	img4f = document.getElementById("hydrogen6");
	img4g = document.getElementById("hydrogen7");
	img4h = document.getElementById("hydrogen8");
	img4i = document.getElementById("hydrogen9");
	img4j = document.getElementById("hydrogen10");
    if (document.getElementById("div12").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("div12").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }


    // Hydrogen has spots : hydrogen1 - hydrogen10
	  // Animal Cell checks
    // Animal Element 1
    // id: glu
    if (document.getElementById("a1").contains(document.getElementById("glu"))) {
        // Spot 1 True
        document.getElementById("glu").style.borderWidth = "thick";
        document.getElementById("glu").style.borderStyle = "solid";
        document.getElementById("glu").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("glu"))) {
        // Spot 1 Wrong organ
        document.getElementById("glu").style.borderWidth = "thick";
        document.getElementById("glu").style.borderStyle = "dotted";
        document.getElementById("glu").style.borderColor = CBred;
    }
    else {
        // Spot 1 False
        document.getElementById("glu").style.borderWidth = "thick";
        document.getElementById("glu").style.borderStyle = "dashed";
        document.getElementById("glu").style.borderColor = CByellow;
    }
    // Animal Element 2
  // id pyr
    if (document.getElementById("a2").contains(document.getElementById("pyr"))) {
        // Spot 2 True
        document.getElementById("pyr").style.borderWidth = "thick";
        document.getElementById("pyr").style.borderStyle = "solid";
        document.getElementById("pyr").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("pyr"))) {
        // Spot 2 Wrong organ
        document.getElementById("pyr").style.borderWidth = "thick";
        document.getElementById("pyr").style.borderStyle = "dotted";
        document.getElementById("pyr").style.borderColor = CBred;
    }
    else {
        // Spot 2 False
        document.getElementById("pyr").style.borderWidth = "thick";
        document.getElementById("pyr").style.borderStyle = "dashed";
        document.getElementById("pyr").style.borderColor = CByellow;
    }
    // Animal Element 3
  // id: accoa
    if (document.getElementById("a3").contains(document.getElementById("accoa"))) {
        // Spot 3 True
        document.getElementById("accoa").style.borderWidth = "thick";
        document.getElementById("accoa").style.borderStyle = "solid";
        document.getElementById("accoa").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("accoa"))) {
        // Spot 3 Wrong organ
        document.getElementById("accoa").style.borderWidth = "thick";
        document.getElementById("accoa").style.borderStyle = "dotted";
        document.getElementById("accoa").style.borderColor = CBred;
    }
    else {
        // Spot 3 False
        document.getElementById("accoa").style.borderWidth = "thick";
        document.getElementById("accoa").style.borderStyle = "dashed";
        document.getElementById("accoa").style.borderColor = CByellow;
    }
    //Animal Element 4
	img4a = document.getElementById("hydrogen5");
	img4b = document.getElementById("hydrogen2");
	img4c = document.getElementById("hydrogen3");
	img4d = document.getElementById("hydrogen4");
	img4e = document.getElementById("hydrogen1");
	img4f = document.getElementById("hydrogen6");
	img4g = document.getElementById("hydrogen7");
	img4h = document.getElementById("hydrogen8");
	img4i = document.getElementById("hydrogen9");
	img4j = document.getElementById("hydrogen10");
    if (document.getElementById("a4").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a4").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

    //Animal Element 5
    // id complex1
    if (document.getElementById("a5").contains(document.getElementById("complex1"))) {
        // Spot 5 True
        document.getElementById("complex1").style.borderWidth = "thick";
        document.getElementById("complex1").style.borderStyle = "solid";
        document.getElementById("complex1").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("complex1"))) {
        // Spot 5 Wrong organ
        document.getElementById("complex1").style.borderWidth = "thick";
        document.getElementById("complex1").style.borderStyle = "dotted";
        document.getElementById("complex1").style.borderColor = CBred;
    }
    else {
        // Spot 5 False
        document.getElementById("complex1").style.borderWidth = "thick";
        document.getElementById("complex1").style.borderStyle = "dashed";
        document.getElementById("complex1").style.borderColor = CByellow;
    }

    //Animal Element 6
	img4a = document.getElementById("hydrogen6");
	img4b = document.getElementById("hydrogen2");
	img4c = document.getElementById("hydrogen3");
	img4d = document.getElementById("hydrogen4");
	img4e = document.getElementById("hydrogen5");
	img4f = document.getElementById("hydrogen1");
	img4g = document.getElementById("hydrogen7");
	img4h = document.getElementById("hydrogen8");
	img4i = document.getElementById("hydrogen9");
	img4j = document.getElementById("hydrogen10");
    if (document.getElementById("a6").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a6").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

    //Animal Element 7
    // id electron1 or electron2
	imgA7a = document.getElementById("electron2");
	imgA7b = document.getElementById("electron1");
    if (document.getElementById("a7").contains(imgA7a)) {
        // Spot 7 True
        imgA7a.style.borderWidth = "thick";
        imgA7a.style.borderStyle = "solid";
        imgA7a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a7").contains(imgA7b)) {
		imgA7b.style.borderWidth = "thick";
        imgA7b.style.borderStyle = "solid";
        imgA7b.style.borderColor = CBgreen;
	}
    else {
      // If electron 1 is in the animal cell but in the wrong spot{
        imgA7a.style.borderWidth = "thick";
        imgA7a.style.borderStyle = "dashed";
        imgA7a.style.borderColor = CByellow;
    }

    //Animal Element 8
    img4a = document.getElementById("hydrogen6");
    img4b = document.getElementById("hydrogen2");
    img4c = document.getElementById("hydrogen3");
    img4d = document.getElementById("hydrogen4");
    img4e = document.getElementById("hydrogen5");
    img4f = document.getElementById("hydrogen1");
    img4g = document.getElementById("hydrogen7");
    img4h = document.getElementById("hydrogen8");
    img4i = document.getElementById("hydrogen9");
    img4j = document.getElementById("hydrogen10");
    if (document.getElementById("a8").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a8").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

    //Animal Element 9
  //id complex4
    if (document.getElementById("a9").contains(document.getElementById("complex4"))) {
        // Spot 9 True
        document.getElementById("complex4").style.borderWidth = "thick";
        document.getElementById("complex4").style.borderStyle = "solid";
        document.getElementById("complex4").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("complex4"))) {
        // Spot 9 Wrong organ
        document.getElementById("complex4").style.borderWidth = "thick";
        document.getElementById("complex4").style.borderStyle = "dotted";
        document.getElementById("complex4").style.borderColor = CBred;
    }
    else {
        // Spot 9 False
        document.getElementById("complex4").style.borderWidth = "thick";
        document.getElementById("complex4").style.borderStyle = "dashed";
        document.getElementById("complex4").style.borderColor = CByellow;
    }

      //Animal Element 10
    img4a = document.getElementById("hydrogen8");
    img4b = document.getElementById("hydrogen2");
    img4c = document.getElementById("hydrogen3");
    img4d = document.getElementById("hydrogen4");
    img4e = document.getElementById("hydrogen5");
    img4f = document.getElementById("hydrogen6");
    img4g = document.getElementById("hydrogen7");
    img4h = document.getElementById("hydrogen1");
    img4i = document.getElementById("hydrogen9");
    img4j = document.getElementById("hydrogen10");
    if (document.getElementById("a10").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a10").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

    //Animal Element 11
  // id electron3
    if (document.getElementById("a11").contains(document.getElementById("electron3"))) {
        // Spot 11 True
        document.getElementById("electron3").style.borderWidth = "thick";
        document.getElementById("electron3").style.borderStyle = "solid";
        document.getElementById("electron3").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("electron3"))) {
        // Spot 11 Wrong organ
        document.getElementById("electron3").style.borderWidth = "thick";
        document.getElementById("electron3").style.borderStyle = "dotted";
        document.getElementById("electron3").style.borderColor = CBred;
    }
    else {
        // Spot 11 False
        document.getElementById("electron3").style.borderWidth = "thick";
        document.getElementById("electron3").style.borderStyle = "dashed";
        document.getElementById("electron3").style.borderColor = CByellow;
    }

    // Animal Element 12
    // id h20Fuse
    if (document.getElementById("a12").contains(document.getElementById("h20Fuse"))){
        document.getElementById("h20Fuse").style.borderWidth = "thick";
        document.getElementById("h20Fuse").style.borderStyle = "solid";
        document.getElementById("h20Fuse").style.borderColor = CBgreen;
  }
    else if(document.getElementById("container1").contains(document.getElementById("h20Fuse"))){
        document.getElementById("h20Fuse").style.borderWidth = "thick";
        document.getElementById("h20Fuse").style.borderStyle = "dotted";
        document.getElementById("h20Fuse").style.borderColor = CBred;
    }
    else{
        document.getElementById("h20Fuse").style.borderWidth = "thick";
        document.getElementById("h20Fuse").style.borderStyle = "solid";
        document.getElementById("h20Fuse").style.borderColor = CByellow;
  }
  // Animal Element 13
  // id tca
  if (document.getElementById("a13").contains(document.getElementById("tca"))){
    document.getElementById("tca").style.borderWidth = "thick";
    document.getElementById("tca").style.borderStyle = "solid";
    document.getElementById("tca").style.borderColor = CBgreen;
  }
  else if(document.getElementById("container1").contains(document.getElementById("tca"))){
    document.getElementById("tca").style.borderWidth = "thick";
    document.getElementById("tca").style.borderStyle = "dotted";
    document.getElementById("tca").style.borderColor = CBred;
  }
  else{
    document.getElementById("tca").style.borderWidth = "thick";
    document.getElementById("tca").style.borderStyle = "solid";
    document.getElementById("tca").style.borderColor = CByellow;
  }

    //Animal Element 14
    // hydrogen 1 - 10
    img4a = document.getElementById("hydrogen9");
    img4b = document.getElementById("hydrogen2");
    img4c = document.getElementById("hydrogen3");
    img4d = document.getElementById("hydrogen4");
    img4e = document.getElementById("hydrogen5");
    img4f = document.getElementById("hydrogen6");
    img4g = document.getElementById("hydrogen7");
    img4h = document.getElementById("hydrogen8");
    img4i = document.getElementById("hydrogen1");
    img4j = document.getElementById("hydrogen10");
    if (document.getElementById("a14").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a14").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

  // Animal Element 15
  // id atpSynthese2
  if (document.getElementById("a15").contains(document.getElementById("atpSynthese2"))){
    document.getElementById("atpSynthese2").style.borderWidth = "thick";
    document.getElementById("atpSynthese2").style.borderStyle = "solid";
    document.getElementById("atpSynthese2").style.borderColor = CBgreen;
  }
  else if(document.getElementById("container1").contains(document.getElementById("atpSynthese2"))){
    document.getElementById("atpSynthese2").style.borderWidth = "thick";
    document.getElementById("atpSynthese2").style.borderStyle = "dotted";
    document.getElementById("atpSynthese2").style.borderColor = CBred;
  }
  else{
    document.getElementById("atpSynthese2").style.borderWidth = "thick";
    document.getElementById("atpSynthese2").style.borderStyle = "solid";
    document.getElementById("atpSynthese2").style.borderColor = CByellow;
  }

	  //Animal Element 16
    img4a = document.getElementById("hydrogen10");
    img4b = document.getElementById("hydrogen2");
    img4c = document.getElementById("hydrogen3");
    img4d = document.getElementById("hydrogen4");
    img4e = document.getElementById("hydrogen5");
    img4f = document.getElementById("hydrogen6");
    img4g = document.getElementById("hydrogen7");
    img4h = document.getElementById("hydrogen8");
    img4i = document.getElementById("hydrogen9");
    img4j = document.getElementById("hydrogen1");
    if (document.getElementById("a16").contains(img4a)) {
        // Spot 4 True
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "solid";     img4a.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4b)) {
        // Spot 4 True
        img4b.style.borderWidth = "thick";    img4b.style.borderStyle = "solid";     img4b.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4c)) {
        // Spot 4 True
        img4c.style.borderWidth = "thick";    img4c.style.borderStyle = "solid";     img4c.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4d)) {
        // Spot 4 True
        img4d.style.borderWidth = "thick";    img4d.style.borderStyle = "solid";     img4d.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4e)) {
        // Spot 4 True
        img4e.style.borderWidth = "thick";    img4e.style.borderStyle = "solid";     img4e.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4f)) {
        // Spot 4 True
        img4f.style.borderWidth = "thick";    img4f.style.borderStyle = "solid";     img4f.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4g)) {
        // Spot 4 True
        img4g.style.borderWidth = "thick";    img4g.style.borderStyle = "solid";     img4g.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4h)) {
        // Spot 4 True
        img4h.style.borderWidth = "thick";    img4h.style.borderStyle = "solid";     img4h.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4i)) {
        // Spot 4 True
        img4i.style.borderWidth = "thick";    img4i.style.borderStyle = "solid";     img4i.style.borderColor = CBgreen;
    }
	else if (document.getElementById("a16").contains(img4j)) {
        // Spot 4 True
        img4j.style.borderWidth = "thick";    img4j.style.borderStyle = "solid";     img4j.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(img4a)) {
        // Spot 4 Wrong organ
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dotted";    img4a.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4a.style.borderWidth = "thick";    img4a.style.borderStyle = "dashed";    img4a.style.borderColor = CByellow;
    }

    // Animal Input Text Boxes
    // Getting the values:
    var inputText1 = document.getElementById("textA1").value;
    var inputText2 = document.getElementById("textA2").value;
    var inputText3 = document.getElementById("textA3").value;

    // The array for the multiple answers text box  1.
    var txt1array = [ "Inner Membrane",
        "Inner membrane",
        "inner membrane",
        "inner Membrane",
        "InnerMembrane",
        "innermembrane",
        "INNERMEMBRANE",
        "innerMembrane",
        "Innermembrane",
        ];
    let array1Size = txt1array.length;
    let textboxA1 = document.getElementById("textA1");
    var i;
    var true1 = 0;
    for(i = 0; i < array1Size; i++){
      if(inputText1 === txt1array[i]){
        textboxA1.style.borderWidth = "thick";  textboxA1.style.borderStyle = "solid";  textboxA1.style.borderColor = CBgreen;
        true1 = 1;
        break;
      }
    }
    if (true1 === 0){
      textboxA1.style.borderWidth = "thick";    textboxA1.style.borderStyle = "dotted";    textboxA1.style.borderColor = CBred;
    }

    // The array for the multiple answers text box 2.
    var txt2array = [ "matrix", "Matrix", "MATRIX"];
    var array2Size = txt2array.length;
    let textboxA2 = document.getElementById("textA2");
    var j;
    var true2 = 0;
    for(j = 0; j < array2Size; j++){
      if(inputText2 === txt2array[j]){
        textboxA2.style.borderWidth = "thick";  textboxA2.style.borderStyle = "solid";  textboxA2.style.borderColor = CBgreen;
        true2 = 1;
        break;
      }
    }
    if (true2 === 0){
      textboxA2.style.borderWidth = "thick";    textboxA2.style.borderStyle = "dotted";    textboxA2.style.borderColor = CBred;
    }

    // The array for the multiple answers text box 2.
    var txt3array = [ "intermembrane space",
        "Intermembrane Space",
        "Intermembrane space",
        "INTERMEMBRANE SPACE",
        "intermembrane Space",
        "intermembranespace",
        "interMembrane",
        "IntermembraneSpace",
        "Intermembranespace",
        "INTERMEMBRANESPACE",
        "Inter Membrane Space",
        "inter membrane space"];
    var array3Size = txt3array.length;
    let textboxA3 = document.getElementById("textA3");
    var k;
    var true3 = 0;
    for(k = 0; k < array3Size; k++){
      if(inputText3 === txt3array[k]){
        textboxA3.style.borderWidth = "thick";  textboxA3.style.borderStyle = "solid";  textboxA3.style.borderColor = CBgreen;
        true3 = 1;
        break;
      }
    }
    if (true3 === 0){
      textboxA3.style.borderWidth = "thick";    textboxA3.style.borderStyle = "dotted";    textboxA3.style.borderColor = CBred;
    }

    // Error Checking Drop Down & Select (Animal Cell)
    //DD 3
    let drp3 = document.getElementById("dd3");
    let drptext3 = drp3.options[drp3.selectedIndex].text; //grabs the selected text from drop down list
    if (drptext3 === "High") { //change to Low or High depending on which is correct
        drp3.style.borderWidth = "thick";    drp3.style.borderStyle = "solid";     drp3.style.borderColor = CBgreen;
    }
    else {
        drp3.style.borderWidth = "thick";    drp3.style.borderStyle = "dotted";     drp3.style.borderColor = CBred;
    }
    //DD 4
    let drp4 = document.getElementById("dd4");
    let drptext4 = drp4.options[drp4.selectedIndex].text; //grabs the selected text from drop down list
    if (drptext4 === "Low") { //change to Low or High depending on which is correct
        drp4.style.borderWidth = "thick";    drp4.style.borderStyle = "solid";     drp4.style.borderColor = CBgreen;
    }
    else {
        drp4.style.borderWidth = "thick";    drp4.style.borderStyle = "dotted";     drp4.style.borderColor = CBred;
    }

}

// Drag and Drop Functions

function dragStart(event) {
  event.target.classList.add("drag-start");
  event.dataTransfer.setData("text", event.target.id);
}

function dragEnd(event) {
  event.target.classList.remove("drag-start");
}

function dragEnter(event) {
  if(!event.target.classList.contains("drag-start")) {
    event.target.classList.add("drag-enter");
  }
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave(event) {
  event.target.classList.remove("drag-enter");
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("drag-enter");
  const draggableElementId = event.dataTransfer.getData("text");
  const droppableElementId = event.target.id;
  if(draggableElementId !== droppableElementId) {
    const draggableElement = document.getElementById(draggableElementId);
    //const droppableElementBgColor = event.target.style.backgroundColor;
    //const droppableElementTextContent = event.target.querySelector("span").textContent;
	const droppableElementBgImg = event.target.style.backgroundImage;
	const droppableElementTextContent = event.target.querySelector("span").textContent;

    event.target.style.backgroundImage = draggableElement.style.backgroundImage;
    event.target.querySelector("span").textContent = draggableElement.querySelector("span").textContent;
    event.target.id = draggableElementId;
    draggableElement.style.backgroundImage = droppableElementBgImg;
    draggableElement.querySelector("span").textContent = droppableElementTextContent;
    draggableElement.id = droppableElementId;
	event.target.style.border = draggableElement.style.border;
	draggableElement.style.border = event.target.style.border;
  }
}
