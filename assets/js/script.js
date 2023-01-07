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
    let firstTile = document.getElementById("first-key-input");
    let sixthTile = document.getElementById("sixth-key-input");
    let eleventhTile = document.getElementById("eleventh-key-input");
    let firstDownArray = [firstTile.value, sixthTile.value, eleventhTile.value];
    let answerbox = document.getElementById("correct-word-box");
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

        //Add green border for the tiles holding letters comprising the correct word
        firstTile.classList.add('green-border')
        sixthTile.classList.add('green-border')
        eleventhTile.classList.add('green-border')
      
      //user entered word is not corresponding to correct word and user enter word is not empty 
    } else if (firstDownWord != "") {
        //add red "x" next to the clue for the word entered incorrectly
        firstWordDownClue.classList.add("fa-solid");
        firstWordDownClue.classList.add("fa-xmark");
        firstWordDownClue.classList.add("red-x");
        console.log("Length of firstDownArray: ", firstDownArray);

        //add red border around tiles for user incorrec answered word
        firstTile.classList.add('red-border')
        sixthTile.classList.add('red-border')
        eleventhTile.classList.add('red-border')


    }
}


/**function checking letters entered for first vertical word agains correct answer*/
function checkSecondDown() {
    let secondTile = document.getElementById("second-key-input");
    let seventhTile = document.getElementById("seventh-key-input");
    let twelfthTile = document.getElementById("twelfth-key-input");
    let seventeenthTile = document.getElementById("seventeenth-key-input");
    let twentysecondTile = document.getElementById("twentysecond-key-input");
    let secondDownArray = [secondTile.value, seventhTile.value, twelfthTile.value, seventeenthTile.value, twentysecondTile.value];
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

        //Add green check next to the clue for the word indicating correct word entered
        console.log("Adding green class to second word down clue");
        secondWordDownClue.classList.add("fa-solid");
        secondWordDownClue.classList.add("fa-check");
        secondWordDownClue.classList.add("green-tic");

        //Add green border for the tiles holding letters comprising the correct word
        secondTile.classList.add('green-border')
        seventhTile.classList.add('green-border')
        twelfthTile.classList.add('green-border')
        seventeenthTile.classList.add('green-border')
        twentysecondTile.classList.add('green-border')

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
    
    /*remove green borders around letters corresponding to correct words
    credit for the code below sourced from: https://codingbeautydev.com/blog/javascript-remove-class-from-multiple-elements/*/
    console.log("Start reset button border removal");
    let inputElements = document.querySelectorAll('input');

    inputElements.forEach((element) => {
    element.classList.remove('green-border');
    });
    console.log("End reset button for border removal");

    /*remove green checks and red "x" marks when pressing reset button
    credit for the code below sourced from: https://codingbeautydev.com/blog/javascript-remove-class-from-multiple-elements/*/
    console.log("Start reset button");
    let iElements = document.querySelectorAll('i');

    iElements.forEach((element) => {
    element.classList.remove('fa-solid', 'fa-check', 'green-tic', 'fa-xmark', 'red-x');
    });
    console.log("End reset button");
}
    /*Array.from(document.querySelectorAll('.fa-solid')).forEach((el) => el.classList.remove('.fa-solid'));
    Array.from(document.querySelectorAll('.fa-check')).forEach((el) => el.classList.remove('.fa-check'));
    Array.from(document.querySelectorAll('.green-tic')).forEach((el) => el.classList.remove('.green-tic'));
    console.log("End reset button");  */

    /*document.querySelector(".fa-solid")?.classList.remove(".fa-solid");
    document.querySelector(".fa-check")?.classList.remove(".fa-check");
    document.querySelector(".green-tic")?.classList.remove(".green-tic");
    console.log("End reset button");   */

        /*element.classList.remove("fa-solid");
        element.classList.remove("fa-solid");
        element.classList.remove("fa-check");
        element.classList.remove("fa-xmark");
        element.classList.remove("red-x");*/
    
    /*let firstWordDownPassIcon = document.getElementById("first-word-down-clue");
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
    secondWordDownFailIcon.classList.remove("red-x");*/
    


document.getElementById("submit-button").addEventListener("click", updateResult);
document.getElementById("reset-button").addEventListener("click", resetAll);



