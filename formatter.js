// dom elements selection
const inputText = document.querySelector("#input");

const upperCaseEl = document.querySelector("#upper_case");
const lowerCaseEl = document.querySelector("#lower_case");
const resetBtn = document.querySelector("#resetbtn");

const outputText = document.querySelector("#output");

const copyBtn = document.querySelector("#copybtn");
const backBtn = document.querySelector("#backbtn");

// text formater functions
const upperCaseText = (text) => {
    if (inputText.value.trim() === "") {
    alert("Please type something first!");
    return;
    }
    
    return text.toUpperCase();
};

const lowerCaseText = (text) => {
    if (inputText.value.trim() === "") {
    alert("Please type something first!");
    return;
    }

    return text.toLowerCase();
};

// copy function
const copyText = (text) => {
    if(outputText.value === ""){
        alert("Nothing to copy yet!")
        return
    }
    navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied"
    setTimeout(() => (copyBtn.textContent = "Copy"),1500)
}


// clickevent heandlears
// UpperCase Btn
upperCaseEl.addEventListener("click", () => {
    const result = upperCaseText(inputText.value);
    outputText.value = result;
});

///lowerCase Btn
lowerCaseEl.addEventListener("click", () => {
    const result = lowerCaseText(inputText.value);
    outputText.value = result;
});

// copy btn
copyBtn.addEventListener("click", () => {
    copyText(outputText.value);
});

// reset btn
resetBtn.addEventListener("click", () => {
    inputText.value = "";
    outputText.value = "";
    outputText.innerText = "Formted Text";
});

// back button
backBtn.addEventListener("click", () => {
    window.history.back();
});