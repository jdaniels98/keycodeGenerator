const key = document.getElementById("keyh1")
const keyCode = document.getElementById("keyCodeh1")
const which = document.getElementById("whichh1")

window.addEventListener("keydown", (e) => {
    key.textContent = e.key;
    keyCode.textContent = e.code;
    which.textContent = e.which;
    console.log(e)
})