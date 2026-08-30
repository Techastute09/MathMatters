/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {

    nav.classList.toggle("open");

});


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
========================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});


/* =========================
   MESSAGE BOX
========================= */

function showMessage(message) {

    const messageBox =
        document.getElementById("messageBox");

    const messageText =
        document.getElementById("messageText");

    messageText.textContent = message;

    messageBox.classList.add("show");

}


function closeMessage() {

    const messageBox =
        document.getElementById("messageBox");

    messageBox.classList.remove("show");

}


/* =========================
   CLOSE MODAL BY CLICKING
   OUTSIDE CONTENT
========================= */

const messageBox =
    document.getElementById("messageBox");

messageBox.addEventListener("click", function(event) {

    if (event.target === messageBox) {

        closeMessage();

    }

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMessage();

    }

});