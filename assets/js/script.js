function correctCrosswordAll() {
    let correctCrossword = ['SHH', 'TOYED', 'APPLE', 'REESE', 'REM', 'STAR', 'HOPE', 'HYPER', 'ELSE', 'DEEM'];
    return correctCrossword;
}

/**compare user entered words down against correct crossword*/
function compareArraysAll(array1, array2) {

    console.log("compareArraysDown function triggered");
    
    
    for (let firstElementIndex = 0; firstElementIndex < array1.length; firstElementIndex++) {

        let correctAnswerBox = document.getElementById('correct-answer-display-box');
        let incorrectAnswerBox = document.getElementById('incorrect-answer-display-box');

        //checks if user entered word down based on index corresponds to correct crossword down by same index
        if (array1[firstElementIndex] === array2[firstElementIndex]) {
            console.log("First element index item is: ", array1[firstElementIndex])

            //checks if correct answered word already exist in correct section
            if (correctAnswerBox.textContent.includes((array1[firstElementIndex]))) {
                continue;
            //adds correct answered word to correct section    
            } else {
                correctAnswerBox.innerHTML += (array1[firstElementIndex] + "<br>");
            }
 
            //adds green check for correct entered word down to corresponding clue
            if (firstElementIndex === 0) {
                let firstWordDownClue = document.getElementById("first-word-down-clue");
                //however checks if red "x" already is displayed and removes this 
                if (firstWordDownClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    firstWordDownClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    /*firstWordDownClue.classList.remove("fa-xmark");
                    firstWordDownClue.classList.remove("red-x");*/
                }               
                //now adds green check
                firstWordDownClue.classList.add("fa-solid", "fa-check", "green-tic");               
                
            } else if (firstElementIndex === 1) {
                let secondWordDownClue = document.getElementById("second-word-down-clue");
                //however checks if red "x" already is displayed and removes this 
                if (secondWordDownClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    secondWordDownClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                secondWordDownClue.classList.add("fa-solid", "fa-check", "green-tic"); 
                
            } else if (firstElementIndex === 2) {
                let thirdWordDownClue = document.getElementById("third-word-down-clue");
                if (thirdWordDownClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    thirdWordDownClue.classList.remove("fa-solid", "fa-xmark", "red-x");
            
                }               
                //now adds green check
                thirdWordDownClue.classList.add("fa-solid", "fa-check", "green-tic"); 
            } else if (firstElementIndex === 3) {
                let fourthWordDownClue = document.getElementById("fourth-word-down-clue");
                //if red "x" exists in clues section, removes this and adds back green check
                if (fourthWordDownClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    fourthWordDownClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                fourthWordDownClue.classList.add("fa-solid", "fa-check", "green-tic");
            } else if (firstElementIndex === 4) {
                let fifthWordDownClue = document.getElementById("fifth-word-down-clue");
                //if red "x" exists in clues section, removes this and adds back green check
                if (fifthWordDownClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    fifthWordDownClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                fifthWordDownClue.classList.add("fa-solid", "fa-check", "green-tic");
            } else if (firstElementIndex === 5) {
                let firstWordAcrossClue = document.getElementById("first-word-accros-clue");
                //if red "x" exists in clues section, removes this and adds back green check
                if (firstWordAcrossClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    firstWordAcrossClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                firstWordAcrossClue.classList.add("fa-solid", "fa-check", "green-tic");
            } else if (firstElementIndex === 6) {
                let secondWordAcrossClue = document.getElementById("second-word-accros-clue");
                //if red "x" exists in clues section, removes this and adds back green check
                if (secondWordAcrossClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    secondWordAcrossClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                secondWordAcrossClue.classList.add("fa-solid", "fa-check", "green-tic");
            } else if (firstElementIndex === 7) {
                let thirdWordAcrossClue = document.getElementById("third-word-accros-clue");
                //if red "x" exists in clues section, removes this and adds back green check
                if (thirdWordAcrossClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    thirdWordAcrossClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                thirdWordAcrossClue.classList.add("fa-solid", "fa-check", "green-tic");
            } else if (firstElementIndex === 8) {
                let fourthWordAcrossClue = document.getElementById("fourth-word-accros-clue");
                //if red "x" exists in clues section, removes this and adds back green check
                if (fourthWordAcrossClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    fourthWordAcrossClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                fourthWordAcrossClue.classList.add("fa-solid", "fa-check", "green-tic");
            } else if (firstElementIndex === 9) {
                let fifthWordAcrossClue = document.getElementById("fifth-word-accros-clue");
                //if red "x" exists in clues section, removes this and adds back green check
                if (fifthWordAcrossClue.classList.contains("fa-solid", "fa-xmark", "red-x")) {
                    fifthWordAcrossClue.classList.remove("fa-solid", "fa-xmark", "red-x");
                    
                }               
                //now adds green check
                fifthWordAcrossClue.classList.add("fa-solid", "fa-check", "green-tic");
            }

          //answered word is not correct
        } else if (array1[firstElementIndex] != "") {

            //checks if correct answered word already exist in correct section
            if (incorrectAnswerBox.textContent.includes((array1[firstElementIndex]))) {
                continue;

            } else {
                //adds incorrect answered word to incorrect answers section
                incorrectAnswerBox.innerHTML += (array1[firstElementIndex] + "<br>");
            
            //adds red "x" for incorrect entered down word to corresponding clue
            if (firstElementIndex === 0) {
                let firstWordDownClue = document.getElementById("first-word-down-clue");
                //however checks if green check exists and removes this
                if (firstWordDownClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    firstWordDownClue.classList.remove("fa-solid", "fa-check", "green-tic");
                }
                //adds red "x" mark to incorrect guessed clue
                firstWordDownClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 1) {
                let secondWordDownClue = document.getElementById("second-word-down-clue");
                if (secondWordDownClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    secondWordDownClue.classList.remove("fa-solid", "fa-check", "green-tic");
                }
                //Now adds red "x" mark to incorrect guessed clue
                secondWordDownClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 2) {
                let thirdWordDownClue = document.getElementById("third-word-down-clue");
                if (thirdWordDownClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    thirdWordDownClue.classList.remove("fa-solid", "fa-check", "green-tic");
                }
                //adds red "x" mark to incorrect guessed clue
                thirdWordDownClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 3) {
                let fourthWordDownClue = document.getElementById("fourth-word-down-clue");
                if (fourthWordDownClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    fourthWordDownClue.classList.remove("fa-solid", "fa-check", "green-tic");
                }
                //adds red "x" mark to incorrect guessed clue
                fourthWordDownClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 4) {
                let fifthWordDownClue = document.getElementById("fifth-word-down-clue");
                //however checks if green check exists and removes this
                if (fifthWordDownClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    fifthWordDownClue.classList.remove("fa-solid", "fa-check", "green-tic");
                    
                }
                //adds red "x" mark to incorrect guessed clue
                fifthWordDownClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 5) {
                let firstWordAcrossClue = document.getElementById("first-word-accros-clue");
                //however checks if green check exists and removes this
                if (firstWordAcrossClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    firstWordAcrossClue.classList.remove("fa-solid", "fa-check", "green-tic");
                    
                }
                //adds red "x" mark to incorrect guessed clue
                firstWordAcrossClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 6) {
                let secondWordAcrossClue = document.getElementById("second-word-accros-clue");
                //however checks if green check exists and removes this
                if (secondWordAcrossClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    secondWordAcrossClue.classList.remove("fa-solid", "fa-check", "green-tic");
                    
                }
                //adds red "x" mark to incorrect guessed clue
                secondWordAcrossClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 7) {
                let thirdWordAcrossClue = document.getElementById("third-word-accros-clue");
                //however checks if green check exists and removes this
                if (thirdWordAcrossClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    thirdWordAcrossClue.classList.remove("fa-solid", "fa-check", "green-tic");
                    
                }
                //adds red "x" mark to incorrect guessed clue
                thirdWordAcrossClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 8) {
                let fourthWordAcrossClue = document.getElementById("fourth-word-accros-clue");
                //however checks if green check exists and removes this
                if (fourthWordAcrossClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    fourthWordAcrossClue.classList.remove("fa-solid", "fa-check", "green-tic");
                    
                }
                //adds red "x" mark to incorrect guessed clue
                fourthWordAcrossClue.classList.add("fa-solid", "fa-xmark", "red-x");
            } else if (firstElementIndex === 9) {
                let fifthWordAcrossClue = document.getElementById("fifth-word-accros-clue");
                //however checks if green check exists and removes this
                if (fifthWordAcrossClue.classList.contains("fa-solid", "fa-check", "green-tic")) {
                    fifthWordAcrossClue.classList.remove("fa-solid", "fa-check", "green-tic");
                    
                }
                //adds red "x" mark to incorrect guessed clue
                fifthWordAcrossClue.classList.add("fa-solid", "fa-xmark", "red-x");
            }
        }
            incorrecAnswerBoxContent = incorrectAnswerBox.textContent;
            console.log("Content of correctAnswerBoxContent: ", incorrecAnswerBoxContent);
    }  
}
}

/**compare user entered letters down with correct crossword down words and return red "x" or green check mark and correct/incorrect words */
function userEnteredWordsAll() {
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
    

    let userEnteredWordsArray = [[firstTile, sixthTile, eleventhTile], [secondTile, seventhTile, twelfthTile, seventeenthTile, twentysecondTile], [thirdTile, eightTile, thirteenthTile, eighteenthTile, twentyhirdTile], [fourthTile, ninethTile, fourteenthTile, nineteenthTile, twentyfourth], [fifthteenthTile, twentiethTile, twentyfifth], [firstTile, secondTile, thirdTile, fourthTile], [sixthTile, seventhTile, eightTile, ninethTile], [eleventhTile, twelfthTile, thirteenthTile, fourteenthTile, fifthteenthTile], [seventeenthTile, eighteenthTile, nineteenthTile, twentiethTile], [twentysecondTile, twentyhirdTile, twentyfourth, twentyfifth]];

    let userEnteredWordsList = [];    

    for (let item = 0; item < userEnteredWordsArray.length; item++) {
        let word = "";
        
        for (let letter = 0; letter < userEnteredWordsArray[item].length; letter++) {
            word += userEnteredWordsArray[item][letter].toUpperCase();
        //upperCaseWord = word.toUpperCase();
        }
        userEnteredWordsList.push(word);
        console.log("Word: ", word);
        console.log("userEnteredDownWordsList: ", userEnteredWordsList);
    
    }

    compareArraysAll(userEnteredWordsList, correctCrosswordAll())
   
    console.log("User entered down list: ", userEnteredWordsList, "\nCorrect crossword down list: ", correctCrosswordDown());
    console.log("User entered word down from unified function: ", userEnteredWordsList)
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

document.getElementById("submit-button").addEventListener("click", userEnteredWordsAll);
document.getElementById("reset-button").addEventListener("click", resetAll);



