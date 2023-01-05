

function compareEntries() {
    let correctFirstDown = {1 : "S", 2 : "H", 3 : "H"};

    let userEnteredFirstDown = {}

    //User entered value and cell number for first cell
    let firstKeyPressed = document.getElementById("first-key-input").value;
    let firstDivNumber = document.getElementById("first-divsub").textContent;
    console.log("Div Number from compareEntries function:", firstDivNumber);
    
    //User entered value and cell number for second cell
    let secondKeyPressed = document.getElementById("sixth-key-input").value;
    let divNumber = document.getElementById("sixth-divsub").textContent;
    console.log("Div Number from compareEntries function:", divNumber);

    console.log(correctFirstDown);
}

function updateResult() {
    let letterList = [];
    let letterObject = {First:"something"}

    let firstKeyPressed = document.getElementById("first-key-input").value;
    let divNumber = document.getElementById("first-divsub").textContent;
    console.log("Div Number:", divNumber);
    console.log("keyPress", firstKeyPressed);
    document.getElementById("key-result").innerText = firstKeyPressed;
    letterList.push(firstKeyPressed);
    console.log("start of project2");
    console.log(letterList);
    console.log("letterList logged?")
    letterObject.divNumber = firstKeyPressed;
    console.log(letterObject);

    compareEntries()
}

document.getElementById("submit-button").addEventListener("click", updateResult);



