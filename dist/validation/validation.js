"use strict";
const validation = () => {
    const nameElem = document.getElementById("name");
    const emailElem = document.getElementById("email");
    const messageElem = document.getElementById("message");
    const nameErrorElem = document.getElementById("name_error");
    const emailErrorElem = document.getElementById("email_error");
    const messageErrorElem = document.getElementById("message_error");
    if (!nameElem ||
        !emailElem ||
        !messageElem ||
        !nameErrorElem ||
        !emailErrorElem ||
        !messageErrorElem)
        throw new Error("Cant find input element!");
    const name = nameElem.value;
    const email = emailElem.value;
    const message = messageElem.value;
    let isValid = true;
    if (name.length < 2) {
        nameErrorElem.textContent = "Name should have at least 2 letters!";
        setTimeout(() => {
            nameErrorElem.textContent = "";
        }, 5000);
        isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailErrorElem.textContent = "Incorrect email.";
        setTimeout(() => {
            emailErrorElem.textContent = "";
        }, 5000);
        isValid = false;
    }
    if (message.length < 10) {
        messageErrorElem.textContent =
            "Message should have at least 10 letters";
        setTimeout(() => {
            messageErrorElem.textContent = "";
        }, 5000);
        isValid = false;
    }
    return isValid;
};
const form = document.querySelector(".contacts__form");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!validation())
            return;
        const response = await fetch("https://2k60l.wiremockapi.cloud/test", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: new FormData(form),
        });
        if (response.status === 200) {
            alert("successful access to mock api!");
        }
    });
}
