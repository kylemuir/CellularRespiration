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
    let word1 = document.getElementById("textP1").value;
    let textbox1 = document.getElementById("textP1");
    if (word1 === "test1") {
        // alert("Word1 True");
        textbox1.style.borderWidth = "thick";    textbox1.style.borderStyle = "solid";     textbox1.style.borderColor = CBgreen;
    }
    else {
        // alert("Word1 False");
        textbox1.style.borderWidth = "thick";    textbox1.style.borderStyle = "dotted";    textbox1.style.borderColor = CBred;
    }
    //TEXT 2
    let word2 = document.getElementById("textP2").value;
    let textbox2 = document.getElementById("textP2");
    if (word2 === "test2") {
        // alert("Word2 True");
        textbox2.style.borderWidth = "thick";    textbox2.style.borderStyle = "solid";     textbox2.style.borderColor = CBgreen;
    }
    else {
        // alert("Word2 False");
        textbox2.style.borderWidth = "thick";    textbox2.style.borderStyle = "dotted";    textbox2.style.borderColor = CBred;
    }
    //TEXT 3
    let word3 = document.getElementById("textP3").value;
    let textbox3 = document.getElementById("textP3");
    if (word3 === "test3") {
        // alert("Word3 True");
        textbox3.style.borderWidth = "thick";    textbox3.style.borderStyle = "solid";     textbox3.style.borderColor = CBgreen;
    }
    else {
        // alert("Word3 False");
        textbox3.style.borderWidth = "thick";    textbox3.style.borderStyle = "dotted";    textbox3.style.borderColor = CBred;
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
    let img4 = document.getElementById("hydrogen1");
    if (document.getElementById("div4").contains(img4)) {
        // Spot 4 True
        img4.style.borderWidth = "thick";    img4.style.borderStyle = "solid";     img4.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img4)) {
        // Spot 4 Wrong organ
        img4.style.borderWidth = "thick";    img4.style.borderStyle = "dotted";    img4.style.borderColor = CBred;
    }
    else {
        // Spot 4 Wrong position
        img4.style.borderWidth = "thick";    img4.style.borderStyle = "dashed";    img4.style.borderColor = CByellow;
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
    else if(document.getElementById("container2").contains(img5)) {
        // Spot 5 Wrong organ
        img5a.style.borderWidth = "thick";    img5a.style.borderStyle = "dotted";    img5a.style.borderColor = CBred;
    }
    else {
        // Spot 5 Wrong position
        img5a.style.borderWidth = "thick";    img5a.style.borderStyle = "dashed";    img5a.style.borderColor = CByellow;
    }
	
    //SPOT 6
    let img6a = document.getElementById("hydrogen2");
    if (document.getElementById("div6").contains(img6a)) {
        // Spot 6 True
        img6a.style.borderWidth = "thick";    img6a.style.borderStyle = "solid";     img6a.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img6)) {
        // Spot 6 Wrong organ
        img6a.style.borderWidth = "thick";    img6a.style.borderStyle = "dotted";    img6a.style.borderColor = CBred;
    }
    else {
        // Spot 6 Wrong position
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
    let img10 = document.getElementById("hydrogen3");
    if (document.getElementById("div10").contains(img10)) {
        // Spot 10 True
        img10.style.borderWidth = "thick";    img10.style.borderStyle = "solid";     img10.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img10)) {
        // Spot 10 Wrong organ
        img10.style.borderWidth = "thick";    img10.style.borderStyle = "dotted";    img10.style.borderColor = CBred;
    }
    else {
        // Spot 10 Wrong position
        img10.style.borderWidth = "thick";    img10.style.borderStyle = "dashed";    img10.style.borderColor = CByellow;
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
    let img12 = document.getElementById("hydrogen4");
    if (document.getElementById("div12").contains(img12)) {
        // Spot 12 True
        img12.style.borderWidth = "thick";    img12.style.borderStyle = "solid";     img12.style.borderColor = CBgreen;
    }
    else if(document.getElementById("container2").contains(img12)) {
        // Spot 12 Wrong organ
        img12.style.borderWidth = "thick";    img12.style.borderStyle = "dotted";    img12.style.borderColor = CBred;
    }
    else {
        // Spot 12 Wrong position
        img12.style.borderWidth = "thick";    img12.style.borderStyle = "dashed";    img12.style.borderColor = CByellow;
    }

	// Animal Cell checks
    // Animal Element 1
    if (document.getElementById("a1").contains(document.getElementById("imgA1"))) {
        // Spot 1 True
        document.getElementById("imgA1").style.borderWidth = "thick";
        document.getElementById("imgA1").style.borderStyle = "solid";
        document.getElementById("imgA1").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA1"))) {
        // Spot 1 Wrong organ
        document.getElementById("imgA1").style.borderWidth = "thick";
        document.getElementById("imgA1").style.borderStyle = "dotted";
        document.getElementById("imgA1").style.borderColor = CBred;
    }
    else {
        // Spot 1 False
        document.getElementById("imgA1").style.borderWidth = "thick";
        document.getElementById("imgA1").style.borderStyle = "dashed";
        document.getElementById("imgA1").style.borderColor = CByellow;
    }
    // Animal Element 2
    if (document.getElementById("a2").contains(document.getElementById("imgA2"))) {
        // Spot 2 True
        document.getElementById("imgA2").style.borderWidth = "thick";
        document.getElementById("imgA2").style.borderStyle = "solid";
        document.getElementById("imgA2").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA2"))) {
        // Spot 2 Wrong organ
        document.getElementById("imgA2").style.borderWidth = "thick";
        document.getElementById("imgA2").style.borderStyle = "dotted";
        document.getElementById("imgA2").style.borderColor = CBred;
    }
    else {
        // Spot 2 False
        document.getElementById("imgA2").style.borderWidth = "thick";
        document.getElementById("imgA2").style.borderStyle = "dashed";
        document.getElementById("imgA2").style.borderColor = CByellow;
    }
    // Animal Element 3
    if (document.getElementById("a3").contains(document.getElementById("imgA3"))) {
        // Spot 3 True
        document.getElementById("imgA3").style.borderWidth = "thick";
        document.getElementById("imgA3").style.borderStyle = "solid";
        document.getElementById("imgA3").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA3"))) {
        // Spot 3 Wrong organ
        document.getElementById("imgA3").style.borderWidth = "thick";
        document.getElementById("imgA3").style.borderStyle = "dotted";
        document.getElementById("imgA3").style.borderColor = CBred;
    }
    else {
        // Spot 3 False
        document.getElementById("imgA3").style.borderWidth = "thick";
        document.getElementById("imgA3").style.borderStyle = "dashed";
        document.getElementById("imgA3").style.borderColor = CByellow;
    }
    //Animal Element 4
    if (document.getElementById("a4").contains(document.getElementById("imgA4"))) {
        // Spot 4 True
        document.getElementById("imgA4").style.borderWidth = "thick";
        document.getElementById("imgA4").style.borderStyle = "solid";
        document.getElementById("imgA4").style.borderColor = CBgreen;
    }
    else if(document.getElementById("4ontainer1").contains(document.getElementById("imgA4"))) {
        // Spot 4 Wrong organ
        document.getElementById("imgA4").style.borderWidth = "thick";
        document.getElementById("imgA4").style.borderStyle = "dotted";
        document.getElementById("imgA4").style.borderColor = CBred;
    }
    else {
        // Spot 4 False
        document.getElementById("imgA4").style.borderWidth = "thick";
        document.getElementById("imgA4").style.borderStyle = "dashed";
        document.getElementById("imgA4").style.borderColor = CByellow;
    }
    //Animal Element 5
    if (document.getElementById("a5").contains(document.getElementById("imgA5"))) {
        // Spot 5 True
        document.getElementById("imgA5").style.borderWidth = "thick";
        document.getElementById("imgA5").style.borderStyle = "solid";
        document.getElementById("imgA5").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA5"))) {
        // Spot 5 Wrong organ
        document.getElementById("imgA5").style.borderWidth = "thick";
        document.getElementById("imgA5").style.borderStyle = "dotted";
        document.getElementById("imgA5").style.borderColor = CBred;
    }
    else {
        // Spot 5 False
        document.getElementById("imgA5").style.borderWidth = "thick";
        document.getElementById("imgA5").style.borderStyle = "dashed";
        document.getElementById("imgA5").style.borderColor = CByellow;
    }
    //Animal Element 6
    if (document.getElementById("a6").contains(document.getElementById("imgA6"))) {
        // Spot 6 True
        document.getElementById("imgA6").style.borderWidth = "thick";
        document.getElementById("imgA6").style.borderStyle = "solid";
        document.getElementById("imgA6").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA6"))) {
        // Spot 6 Wrong organ
        document.getElementById("imgA6").style.borderWidth = "thick";
        document.getElementById("imgA6").style.borderStyle = "dotted";
        document.getElementById("imgA6").style.borderColor = CBred;
    }
    else {
        // Spot 6 False
        document.getElementById("imgA6").style.borderWidth = "thick";
        document.getElementById("imgA6").style.borderStyle = "dashed";
        document.getElementById("imgA6").style.borderColor = CByellow;
    }
    //Animal Element 7
    if (document.getElementById("a7").contains(document.getElementById("imgA7"))) {
        // Spot 7 True
        document.getElementById("imgA7").style.borderWidth = "thick";
        document.getElementById("imgA7").style.borderStyle = "solid";
        document.getElementById("imgA7").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA7"))) {
        // Spot 7 Wrong organ
        document.getElementById("imgA7").style.borderWidth = "thick";
        document.getElementById("imgA7").style.borderStyle = "dotted";
        document.getElementById("imgA7").style.borderColor = CBred;
    }
    else {
        // Spot 7 False
        document.getElementById("imgA7").style.borderWidth = "thick";
        document.getElementById("imgA7").style.borderStyle = "dashed";
        document.getElementById("imgA7").style.borderColor = CByellow;
    }
    //Animal Element 8
    if (document.getElementById("a8").contains(document.getElementById("imgA8"))) {
        // Spot 8 True
        document.getElementById("imgA8").style.borderWidth = "thick";
        document.getElementById("imgA8").style.borderStyle = "solid";
        document.getElementById("imgA8").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA8"))) {
        // Spot 8 Wrong organ
        document.getElementById("imgA8").style.borderWidth = "thick";
        document.getElementById("imgA8").style.borderStyle = "dotted";
        document.getElementById("imgA8").style.borderColor = CBred;
    }
    else {
        // Spot 8 False
        document.getElementById("imgA8").style.borderWidth = "thick";
        document.getElementById("imgA8").style.borderStyle = "dashed";
        document.getElementById("imgA8").style.borderColor = CByellow;
    }
    //Animal Element 9
    if (document.getElementById("a9").contains(document.getElementById("imgA9"))) {
        // Spot 9 True
        document.getElementById("imgA9").style.borderWidth = "thick";
        document.getElementById("imgA9").style.borderStyle = "solid";
        document.getElementById("imgA9").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA9"))) {
        // Spot 9 Wrong organ
        document.getElementById("imgA9").style.borderWidth = "thick";
        document.getElementById("imgA9").style.borderStyle = "dotted";
        document.getElementById("imgA9").style.borderColor = CBred;
    }
    else {
        // Spot 9 False
        document.getElementById("imgA9").style.borderWidth = "thick";
        document.getElementById("imgA9").style.borderStyle = "dashed";
        document.getElementById("imgA9").style.borderColor = CByellow;
    }
    //Animal Element 10
    if (document.getElementById("a10").contains(document.getElementById("imgA10"))) {
        // Spot 10 True
        document.getElementById("imgA10").style.borderWidth = "thick";
        document.getElementById("imgA10").style.borderStyle = "solid";
        document.getElementById("imgA10").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA10"))) {
        // Spot 10 Wrong organ
        document.getElementById("imgA10").style.borderWidth = "thick";
        document.getElementById("imgA10").style.borderStyle = "dotted";
        document.getElementById("imgA10").style.borderColor = CBred;
    }
    else {
        // Spot 10 False
        document.getElementById("imgA10").style.borderWidth = "thick";
        document.getElementById("imgA10").style.borderStyle = "dashed";
        document.getElementById("imgA10").style.borderColor = CByellow;
    }
    //Animal Element 11
    if (document.getElementById("a11").contains(document.getElementById("imgA11"))) {
        // Spot 11 True
        document.getElementById("imgA11").style.borderWidth = "thick";
        document.getElementById("imgA11").style.borderStyle = "solid";
        document.getElementById("imgA11").style.borderColor = CBgreen;
    }
    else if(document.getElementById("container1").contains(document.getElementById("imgA11"))) {
        // Spot 11 Wrong organ
        document.getElementById("imgA11").style.borderWidth = "thick";
        document.getElementById("imgA11").style.borderStyle = "dotted";
        document.getElementById("imgA11").style.borderColor = CBred;
    }
    else {
        // Spot 11 False
        document.getElementById("imgA11").style.borderWidth = "thick";
        document.getElementById("imgA11").style.borderStyle = "dashed";
        document.getElementById("imgA11").style.borderColor = CByellow;
    }
    // Animal Input Text Boxes
    // Getting the values:
    var inputText1 = document.getElementById("textA1").value();
    var inputText2 = document.getElementById("textA2").value();
    var inputText3 = document.getElementById("textA3").value();
    // textA1 should have the string Lion

    let textboxA1  = document.getElementById("textA1");
    if (inputText1 === "Lion") {
        textboxA1.style.borderWidth = "thick";  textboxA1.style.borderStyle = "solid";  textboxA1.style.borderColor = CBgreen;
    }
    else {
        // alert("Word1 False");
        textboxA1.style.borderWidth = "thick";    textboxA1.style.borderStyle = "dotted";    textboxA1.style.borderColor = CBred;
    }
    // textA2 should have the string Penguin
    let textboxA2  = document.getElementById("textA2");
    if (inputText2 === "Penguin") {
        // alert("Word2 True");
        textboxA2.style.borderWidth = "thick";  textboxA2.style.borderStyle = "solid";  textboxA2.style.borderColor = CBgreen;
    }
    else {
        // alert("Word2 False");
        textboxA2.style.borderWidth = "thick";    textboxA2.style.borderStyle = "dotted";    textboxA2.style.borderColor = CBred;
    }
    // textA3  should have the string TigerKing
    let textboxA3  = document.getElementById("textA3");
    if (inputText3 === "TigerKing") {
        // alert("Word2 True");
        textboxA3.style.borderWidth = "thick";  textboxA3.style.borderStyle = "solid";  textboxA3.style.borderColor = CBgreen;
    }
    else {
        // alert("Word2 False");
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
