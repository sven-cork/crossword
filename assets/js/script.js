function updateResult() {

    let keyPressed = document.getElementById("key-input").value;
    console.log("keyPress", keyPressed);
    document.getElementById("key-result").innerText = keyPressed;
    console.log("start of project2");
}

document.getElementById("submit-button").addEventListener("click", updateResult);



