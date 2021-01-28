var buttonArray = document.querySelectorAll(".drum");


for (i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/shesaid.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/cookie.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/michael.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/no.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/idiotringtone.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/parkour.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/stutter.mp3");
            kick.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}