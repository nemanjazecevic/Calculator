document.querySelectorAll(".num").forEach(num => {
    num.addEventListener("click", () => {
        document.querySelector(".input").value += num.innerHTML;
    })
})
document.querySelector(".reset").addEventListener("click", () => {
    document.querySelector(".input").value = "";
})
document.querySelector(".del").addEventListener("click", () => {
    document.querySelector(".input").value = document.querySelector(".input").value.slice(0, -1);
})

let firstNum = "";
let secondNum = "";
let operation = "";
let result = "";

document.querySelector(".plus").addEventListener("click", () => {
    firstNum = document.querySelector(".input").value;
    operation = "add";
    document.querySelector(".input").value = "";
})
document.querySelector(".minus").addEventListener("click", () => {
    firstNum = document.querySelector(".input").value;
    operation = "sub";
    document.querySelector(".input").value = "";
})
document.querySelector(".multiplication").addEventListener("click", () => {
    firstNum = document.querySelector(".input").value;
    operation = "multiplication";
    document.querySelector(".input").value = "";
})
document.querySelector(".division").addEventListener("click", () => {
    firstNum = document.querySelector(".input").value;
    operation = "division";
    document.querySelector(".input").value = "";
})

document.querySelector(".equals").addEventListener("click", () => {
    if (firstNum !== null && firstNum !== "") {
        switch (operation) {
            case 'add':
                secondNum = document.querySelector(".input").value;
                result = Number(firstNum) + Number(secondNum);
                document.querySelector(".input").value = result;
                break;
            case 'sub':
                secondNum = document.querySelector(".input").value;
                result = Number(firstNum) - Number(secondNum);
                document.querySelector(".input").value = result;
                break;
            case 'multiplication':
                secondNum = document.querySelector(".input").value;
                result = Number(firstNum) * Number(secondNum);
                document.querySelector(".input").value = result;
                break;
            case 'division':
                secondNum = document.querySelector(".input").value;
                result = Number(firstNum) / Number(secondNum);
                document.querySelector(".input").value = result;
                break;
        }

    }
})
function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
//========================
if (localStorage.getItem("theme") === "theme-2") {
    document.querySelector("body").classList.add("theme-2");
    document.querySelector(".c-2").style.visibility = "visible";
} else if (localStorage.getItem("theme") === "theme-3") {
    document.querySelector("body").classList.add("theme-3");
    document.querySelector(".c-3").style.visibility = "visible";
} else {
    document.querySelector(".c-1").style.visibility = "visible";
}
document.querySelector(".radio").addEventListener("click", () => {

    if (document.querySelector(".c-1").style.visibility === "visible") {
        document.querySelector(".c-1").style.visibility = "hidden";
        document.querySelector(".c-2").style.visibility = "visible";
        document.querySelector("body").classList.add("theme-2");
        localStorage.setItem("theme", "theme-2");
    } else if (document.querySelector(".c-2").style.visibility === "visible") {
        document.querySelector(".c-2").style.visibility = "hidden";
        document.querySelector(".c-3").style.visibility = "visible";
        if (document.querySelector("body").classList.contains("theme-2")) {
            document.querySelector("body").classList.remove("theme-2");
            document.querySelector("body").classList.add("theme-3");
            localStorage.setItem("theme", "theme-3");
        }
    } else if (document.querySelector(".c-3").style.visibility === "visible") {
        document.querySelector(".c-3").style.visibility = "hidden";
        document.querySelector(".c-1").style.visibility = "visible";
        if (document.querySelector("body").classList.contains("theme-3")) {
            document.querySelector("body").classList.remove("theme-3");
            localStorage.setItem("theme", "");
        }
    }
})
