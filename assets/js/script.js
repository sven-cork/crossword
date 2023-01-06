function correctCrosswordAcross() {
    let correctCrossword = [['S','T','A','R'], ['H','O','P','E'], ['H','Y','P','E','R'], ['E','L','S','E'], ['D','E','E','M']];
    return correctCrossword;
}

function correctCrosswordDown() {
    let correctCrossword = [['S','H','H'], ['T','O','Y','E','D'], ['A','P','P','L','E'], ['R','E','E','S','E'], ['R','E','M']];
    return correctCrossword;
}

function compareArrays(array1, array2) {
    if (array1.toString() === array2.toString()) {
        return true;
    }
}

function checkFirstDown() {
    let firstBoxValue = document.getElementById("first-key-input").value;
    let sixthBoxValue = document.getElementById("sixth-key-input").value;
    let eleventhBoxValue = document.getElementById("eleventh-key-input").value;
    let firstDownArray = [firstBoxValue, sixthBoxValue, eleventhBoxValue];
    console.log("Correct First Down Word: ", correctCrosswordDown()[0]);
    console.log("First Down Array: ", firstDownArray);

    if (compareArrays(correctCrosswordDown()[0], firstDownArray)) {
        console.log("Conditional triggered");
        let answerbox = document.getElementById("correct-first-word-down");
        let firstDownWord = firstDownArray.join("");
        answerbox.innerText = firstDownWord;
        console.log("User entered first down word is correct");
        console.log("First Down Word: ", firstDownWord)

        //Add green tick next to the clue for the word indicating correct word entered
        let firstWordClue = document.getElementById("first-word-accros-clue");
        firstWordClue.classList.add("fa-solid");
        firstWordClue.classList.add("fa-check");
        firstWordClue.classList.add("green-tic");
        
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

function resetAll() {
    let greenTickElements = document.getElementById("first-word-accros-clue");
    greenTickElements.classList.remove("fa-solid");
    greenTickElements.classList.remove("fa-check");
    greenTickElements.classList.remove("green-tic");
}

document.getElementById("submit-button").addEventListener("click", updateResult);
document.getElementById("reset-button").addEventListener("click", resetAll);



