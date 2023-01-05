

function updateResult() {
    let letterList = [];
    let letterObject = {First:"something"}

    let keyPressed = document.getElementById("key-input").value;
    console.log("keyPress", keyPressed);
    document.getElementById("key-result").innerText = keyPressed;
    letterList.push(keyPressed);
    console.log("start of project2");
    console.log(letterList);
    console.log("letterList logged?")
    letterObject.second = keyPressed;
    console.log(letterObject);
}

document.getElementById("submit-button").addEventListener("click", updateResult);



