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

/**get user entered words across */
function userEnteredWordsDown() {
    let firstTile = document.getElementById("first-key-input").value;
    let secondTile = document.getElementById("second-key-input").value;
    let thirdTile = document.getElementById("third-key-input").value;
    let fourthTile = document.getElementById("fourth-key-input").value;
    let sixthTile = document.getElementById("sixth-key-input").value;
    let seventhTile = document.getElementById("seventh-key-input").value;
    let eightTile = document.getElementById("eighth-key-input").value;
    let ninethTile = document.getElementById("nineth-key-input").value;
    let eleventhTile = document.getElementById("eleventh-key-input").value;
    let twelfthTile = document.getElementById("twelfth-key-input").value;
    let thirteenthTile = document.getElementById("thirteenth-key-input").value;
    let fourteenthTile = document.getElementById("fourteenth-key-input").value;
    let fifthteenthTile = document.getElementById("fifteenth-key-input").value;
    let seventeenthTile = document.getElementById("seventeenth-key-input").value;
    let eighteenthTile = document.getElementById("eighteen-key-input").value;
    let nineteenthTile = document.getElementById("nineteenth-key-input").value;
    let twentiethTile = document.getElementById("twentieth-key-input").value;
    let twentysecondTile = document.getElementById("twentysecond-key-input").value;
    let twentyhirdTile = document.getElementById("twentythird-key-input").value;
    let twentyfourth = document.getElementById("twentyfourth-key-input").value;
    let twentyfifth = document.getElementById("twentyfifth-key-input").value;
    

    let userEnteredDownWordsArray = [[firstTile, sixthTile, eleventhTile], [secondTile, seventhTile, twelfthTile, seventeenthTile, twentysecondTile], [thirdTile, eightTile, thirteenthTile, eighteenthTile, twentyhirdTile], [fourthTile, ninethTile, fourteenthTile, nineteenthTile, twentyfourth], [fifthteenthTile, twentiethTile, twentyfifth]];
    console.log("User entered down array word 1 to 3: ", userEnteredDownWordsArray[0], userEnteredDownWordsArray[1], userEnteredDownWordsArray[2])

    let userEnteredDownWordsList = [];
    

    /*for (let item = 0; item < userEnteredDownWordsArray.length; item++) {
        let word = "";
        console.log("Enter outer loop: ");
        for (let letter = 0; letter < userEnteredDownWordsArray[item].length; letter++) {
            console.log("Enter inner loop");
            word += userEnteredDownWordsArray[item][letter];
        upperCaseWord = word.toUpperCase();
        console.log("upperCaseWord triggered");
        userEnteredDownWordsList.push(upperCaseWord);
        }}*/

    for (let item = 0; item < userEnteredDownWordsArray.length; item++) {
        let word = "";
        
        console.log("Enter outer loop: ");
        for (let letter = 0; letter < userEnteredDownWordsArray[item].length; letter++) {
            console.log("Enter inner loop");
            console.log("Letter: ", item[letter]);
            word += userEnteredDownWordsArray[item][letter];
        //upperCaseWord = word.toUpperCase();
        }
        console.log("upperCaseWord triggered");
        userEnteredDownWordsList.push(word);
        console.log("Word: ", word);
        console.log("userEnteredDownWordsList: ", userEnteredDownWordsList);
    
    }
    

    console.log("User entered word down from unified function: ", userEnteredDownWordsList)
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
        
        /*answerbox.innerText = firstDownWord;
        console.log("User entered first down word is correct");
        console.log("First Down Word: ", firstDownWord)*/

        //Add green tick next to the clue for the word indicating correct word entered
        firstWordDownClue.classList.add("fa-solid");
        firstWordDownClue.classList.add("fa-check");
        firstWordDownClue.classList.add("green-tic");

        //Add green border for the tiles holding letters comprising the correct word
        firstTile.classList.add('green-border')
        sixthTile.classList.add('green-border')
        eleventhTile.classList.add('green-border')

        //Add correctly entered word to be displayed in correct answer box
        let correctAnswerBox = document.getElementById('correct-answer-display-box');
        correctAnswerBox.innerHTML += (firstDownWord + "<br>");
        
      
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

        //Add incorrectly entered word to be displayed in incorrect answer box
        let incorrectAnswerBox = document.getElementById('incorrect-answer-display-box');
        incorrectAnswerBox.innerHTML += (firstDownWord + "<br>");


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
        
        /*answerbox.innerText = secondDownWord;
        console.log("User entered first down word is correct");
        console.log("First Down Word: ", secondDownWord)*/

        //Add green check next to the clue for the word indicating correct word entered
        console.log("Adding green class to second word down clue");
        secondWordDownClue.classList.add("fa-solid");
        secondWordDownClue.classList.add("fa-check");
        secondWordDownClue.classList.add("green-tic");

        //Add green border for the tiles holding letters comprising the correct word
        secondTile.classList.add('green-border');
        seventhTile.classList.add('green-border');
        twelfthTile.classList.add('green-border');
        seventeenthTile.classList.add('green-border');
        twentysecondTile.classList.add('green-border');

        let correctAnswerBox = document.getElementById('correct-answer-display-box');
        correctAnswerBox.innerHTML += secondDownWord;

    } else if (secondDownWord != "") {
        //Add red "x" next to the clue for the word entered incorrectly
        secondWordDownClue.classList.add("fa-solid");
        secondWordDownClue.classList.add("fa-xmark");
        secondWordDownClue.classList.add("red-x");

        //add red border around tiles for user incorrec answered word
        secondTile.classList.add('red-border');
        seventhTile.classList.add('red-border');
        twelfthTile.classList.add('red-border');
        seventeenthTile.classList.add('red-border');
        twentysecondTile.classList.add('red-border');

        //Add incorrectly entered word to be displayed in incorrect answer box
        let incorrectAnswerBox = document.getElementById('incorrect-answer-display-box');
        incorrectAnswerBox.innerHTML += (secondDownWord + "<br>");
    }
}

/**function checking letters entered for first vertical word agains correct answer*/
function checkThirdDown() {
    let thirdTile = document.getElementById("third-key-input");
    let eightTile = document.getElementById("eighth-key-input");
    let thirteenthTile = document.getElementById("thirteenth-key-input");
    let eighteenthTile = document.getElementById("eighteen-key-input");
    let twentyhirdTile = document.getElementById("twentythird-key-input");
    let thirdDownArray = [thirdTile.value, eightTile.value, thirteenthTile.value, eighteenthTile.value, twentyhirdTile.value];
    //let answerbox = document.getElementById("correct-word-box");
    let thirdDownWord = thirdDownArray.join("");
    let thirdWordDownClue = document.getElementById("third-word-down-clue");
    console.log("Correct Third Down Word: ", correctCrosswordDown()[1]);
    console.log("Third Down Array: ", thirdDownArray);

    if (compareArrays(correctCrosswordDown()[2], thirdDownArray)) {
        console.log("Conditional triggered");
        
        /*answerbox.innerText = secondDownWord;
        console.log("User entered first down word is correct");
        console.log("First Down Word: ", secondDownWord)*/

        //Add green check next to the clue for the word indicating correct word entered
        console.log("Adding green class to second word down clue");
        thirdWordDownClue.classList.add("fa-solid");
        thirdWordDownClue.classList.add("fa-check");
        thirdWordDownClue.classList.add("green-tic");

        /*Add green border for the tiles holding letters comprising the correct word
        secondTile.classList.add('green-border');
        seventhTile.classList.add('green-border');
        twelfthTile.classList.add('green-border');
        seventeenthTile.classList.add('green-border');
        twentysecondTile.classList.add('green-border');*/

        let correctAnswerBox = document.getElementById('correct-answer-display-box');
        correctAnswerBox.innerHTML += thirdDownWord;

    } else if (thirdDownWord != "") {
        //Add red "x" next to the clue for the word entered incorrectly
        thirdWordDownClue.classList.add("fa-solid");
        thirdWordDownClue.classList.add("fa-xmark");
        thirdWordDownClue.classList.add("red-x");

        /*add red border around tiles for user incorrec answered word
        secondTile.classList.add('red-border');
        seventhTile.classList.add('red-border');
        twelfthTile.classList.add('red-border');
        seventeenthTile.classList.add('red-border');
        twentysecondTile.classList.add('red-border');*/

        //Add incorrectly entered word to be displayed in incorrect answer box
        let incorrectAnswerBox = document.getElementById('incorrect-answer-display-box');
        incorrectAnswerBox.innerHTML += (thirdDownWord + "<br>");
    }
}


function updateResult() {
    let letterList = [];
    let letterObject = {First:"something"}

    let firstKeyPressed = document.getElementById("first-key-input").value;
    let divNumber = document.getElementById("first-divsub").textContent;
    console.log("Div Number:", divNumber);
    console.log("keyPress", firstKeyPressed);
    //document.getElementById("key-result").innerText = firstKeyPressed;
    letterList.push(firstKeyPressed);
    console.log("start of project2");
    console.log(letterList);
    console.log("letterList logged?")
    letterObject.divNumber = firstKeyPressed;
    console.log(letterObject);
    
    userEnteredWordsDown()
    checkFirstDown()
    checkSecondDown()
    checkThirdDown()
}

/**Removes green checks for all correct answers and green tile outlines */
function resetAll() {
    
    /*remove green and red borders around letters corresponding to correct words
    remove green check marks and rex "x" marks for correct and incorrectly entered words
    credit for the code below sourced from: https://codingbeautydev.com/blog/javascript-remove-class-from-multiple-elements/*/
    console.log("Start reset button border removal");
    let inputElements = document.querySelectorAll('input, i');

    inputElements.forEach((element) => {
    element.classList.remove('green-border', 'red-border', 'fa-solid', 'fa-check', 'green-tic', 'fa-xmark', 'red-x');
    });
    
    
    /*remove user entered letters from crossword tiles*/    
    let userEnteredLetters = document.querySelectorAll('input');

    userEnteredLetters.forEach((element) => {
    element.value = "";
    });
    
    /*remove correct and incorrect words displayed entered by user*/
    let correctDisplayedAnswers = document.getElementById('correct-answer-display-box');
    correctDisplayedAnswers.innerText = "";

    let incorrectDisplayedAnswers = document.getElementById('incorrect-answer-display-box');
    incorrectDisplayedAnswers.innerText = "";

}   


document.getElementById("submit-button").addEventListener("click", updateResult);
document.getElementById("reset-button").addEventListener("click", resetAll);



