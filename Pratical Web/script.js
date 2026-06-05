const hearts = document.getElementById("hearts");

for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.textContent = "❤";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 8) + "s";
    hearts.appendChild(heart);
}

function showMessage() {
    document.getElementById("messageBox").classList.add("visible");
}

function playMusic() {
    document.getElementById("music").play();
}

function nextSlide() {
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    slide1.classList.remove("active");
    slide2.classList.add("active");
    document.getElementById("messageBox").classList.remove("visible");
}

function yesAnswer() {
    document.getElementById("answerBox").textContent = "Yayyyy, Thank You So Much Mwh ❤️";
}

let noCount = 0;

function noAnswer() {
    noCount += 1;

    const answerBox = document.getElementById("answerBox");
    if (noCount === 1) {
        answerBox.textContent = "Are You Sure? 🥺";
    } else {
        answerBox.textContent = "Hont! You can't get away from me cuzzz you are mine! 😘";
    }
}

