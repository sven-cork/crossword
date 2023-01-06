function correctCrosswordAcross() {
    let correctCrossword = [['S','T','A','R'], ['H','O','P','E'], ['H','Y','P','E','R'], ['E','L','S','E'], ['D','E','E','M']];
    return correctCrossword;
}

function correctCrosswordDown() {
    let correctCrossword = [['S','H','H'], ['T','O','Y','E','D'], ['A','P','P','L','E'], ['R','E','E','S','E'], ['R','E','M']];
    return correctCrossword;
}

function checkFirstDown() {
    let firstBoxValue = document.getElementById("first-key-input").value;
    let sixthBoxValue = document.getElementById("sixth-key-input").value;
    let eleventhBoxValue = document.getElementById("eleventh-key-input").value;
    let firstDownWord = [firstBoxValue, sixthBoxValue, eleventhBoxValue];
    console.log("Correct First Down Word: ", correctCrosswordDown()[0])
    console.log("First Down Word: ", firstDownWord)

    if (firstDownWord === correctCrosswordDown()[0]) {
        console.log("Conditional triggered");
        let answerBox = document.getElementById("correct-first-word-down").innerText;
        console.log("User entered first down word is correct");
        answerBox = "SHH";
    } 
}

function compareEntries() {
    let correctFirstDown = {1 : "S", 2 : "H", 3 : "H"};

    let userEnteredFirstDown = {}

    //User entered value and cell number for first cell
    let firstKeyPressed = document.getElementById("first-key-input").value;
    let firstDivNumber = document.getElementById("first-divsub").textContent;
    console.log("Div Number from compareEntries function:", firstDivNumber);
    if (firstKeyPressed === "E") {
        let correctAnswer = correctCrossword();
        console.log("List of answered being displayed below:");
        console.log(correctAnswer);
        console.log("Displaying first letter in list below:");
        console.log(correctAnswer[0][0]);
    }

    //User entered value and cell number for second cell
    let secondKeyPressed = document.getElementById("sixth-key-input").value;
    let secondDivNumber = document.getElementById("sixth-divsub").textContent;
    console.log("Div Number from compareEntries function:", secondDivNumber);

    //User entered value and cell number for third cell
    let thirdKeyPressed = document.getElementById("eleventh-key-input").value;
    let thirdDivNumber = document.getElementById("eleventh-divsub").textContent;
    console.log("Div Number from compareEntries function:", thirdDivNumber);

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
    checkFirstDown()
}

document.getElementById("submit-button").addEventListener("click", updateResult);



