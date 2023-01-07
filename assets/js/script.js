function correctCrosswordAcross() {
    let correctCrossword = [['S','T','A','R'], ['H','O','P','E'], ['H','Y','P','E','R'], ['E','L','S','E'], ['D','E','E','M']];
    return correctCrossword;
}

function correctCrosswordDown() {
    let correctCrossword = [['S','S','H'], ['T','O','Y','E','D'], ['A','P','P','L','E'], ['R','E','E','S','E'], ['R','E','M']];
    return correctCrossword;
}

function compareArrays(array1, array2) {
    if (array1.toString() === array2.toString()) {
        return true;
    }
}

/**function checking letters entered for first vertical word agains correct answer*/
function checkFirstDown() {
    let firstBoxValue = document.getElementById("first-key-input").value;
    let sixthBoxValue = document.getElementById("sixth-key-input").value;
    let eleventhBoxValue = document.getElementById("eleventh-key-input").value;
    let firstDownArray = [firstBoxValue, sixthBoxValue, eleventhBoxValue];
    let answerbox = document.getElementById("correct-word-box");
    console.log("First Box Value:", firstBoxValue);
    let firstDownWord = firstDownArray.join("");
    let firstWordDownClue = document.getElementById("first-word-down-clue");
    console.log("Correct First Down Word: ", correctCrosswordDown()[0]);
    console.log("First Down Array: ", firstDownArray);

    if (compareArrays(correctCrosswordDown()[0], firstDownArray)) {
        console.log("Conditional triggered");
        
        answerbox.innerText = firstDownWord;
        console.log("User entered first down word is correct");
        console.log("First Down Word: ", firstDownWord)

        //Add green tick next to the clue for the word indicating correct word entered
        firstWordDownClue.classList.add("fa-solid");
        firstWordDownClue.classList.add("fa-check");
        firstWordDownClue.classList.add("green-tic");
        
    } else if (firstDownWord != "") {
        //Add red "x" next to the clue for the word entered incorrectly
        firstWordDownClue.classList.add("fa-solid");
        firstWordDownClue.classList.add("fa-xmark");
        firstWordDownClue.classList.add("red-x");
        console.log("Length of firdWordDownArray: ", firstDownArray);
    }
}


/**function checking letters entered for first vertical word agains correct answer*/
function checkSecondDown() {
    let secondBoxValue = document.getElementById("second-key-input").value;
    let seventhBoxValue = document.getElementById("seventh-key-input").value;
    let twelfththBoxValue = document.getElementById("twelfth-key-input").value;
    let seventeenththBoxValue = document.getElementById("seventeenth-key-input").value;
    let twentysecondBoxValue = document.getElementById("twentysecond-key-input").value;
    let secondDownArray = [secondBoxValue, seventhBoxValue, twelfththBoxValue, seventeenththBoxValue, twentysecondBoxValue];
    let answerbox = document.getElementById("correct-word-box");
    let secondDownWord = secondDownArray.join("");
    let secondWordDownClue = document.getElementById("second-word-down-clue");
    console.log("Correct Second Down Word: ", correctCrosswordDown()[1]);
    console.log("Second Down Array: ", secondDownArray);

    if (compareArrays(correctCrosswordDown()[1], secondDownArray)) {
        console.log("Conditional triggered");
        
        answerbox.innerText = secondDownWord;
        console.log("User entered first down word is correct");
        console.log("First Down Word: ", secondDownWord)

        //Add green tick next to the clue for the word indicating correct word entered
        console.log("Adding green class to second word down clue");
        secondWordDownClue.classList.add("fa-solid");
        secondWordDownClue.classList.add("fa-check");
        secondWordDownClue.classList.add("green-tic");
        
    } else if (secondDownWord != "") {
        //Add red "x" next to the clue for the word entered incorrectly
        secondWordDownClue.classList.add("fa-solid");
        secondWordDownClue.classList.add("fa-xmark");
        secondWordDownClue.classList.add("red-x");
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
    checkSecondDown()
}

/**Removes green checks for all correct answers and green tile outlines */
function resetAll() {
    let firstWordDownPassIcon = document.getElementById("first-word-down-clue");
    firstWordDownPassIcon.classList.remove("fa-solid");
    firstWordDownPassIcon.classList.remove("fa-check");
    firstWordDownPassIcon.classList.remove("green-tic");

    let firstWordDownFailIcon = document.getElementById("first-word-down-clue");
    firstWordDownFailIcon.classList.remove("fa-solid");
    firstWordDownFailIcon.classList.remove("fa-xmark");
    firstWordDownFailIcon.classList.remove("red-x");

    let secondWordDownPassIcon = document.getElementById("second-word-down-clue");
    secondWordDownPassIcon.classList.remove("fa-solid");
    secondWordDownPassIcon.classList.remove("fa-check");
    secondWordDownPassIcon.classList.remove("green-tic");

    let secondWordDownFailIcon = document.getElementById("second-word-down-clue");
    secondWordDownFailIcon.classList.remove("fa-solid");
    secondWordDownFailIcon.classList.remove("fa-xmark");
    secondWordDownFailIcon.classList.remove("red-x");
    
}

document.getElementById("submit-button").addEventListener("click", updateResult);
document.getElementById("reset-button").addEventListener("click", resetAll);



