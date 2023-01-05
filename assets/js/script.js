
document.getElementsByClassName("input-box").addEventListener("keydown", updateResult);

function updateResult() {
    let keyPressed = document.getElementsByClassName("input-box").innerText;
    document.getElementById("key-result").innerText = keyPressed;
}




console.log("start of project2")