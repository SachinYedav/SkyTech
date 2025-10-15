// access dom elements
const result = document.querySelector("#result");
const copyBtn = document.querySelector("#copy");
const passLength = document.querySelector("#pass-length");

const lowerCaseEl = document.querySelector("#lowercase-option");
const upperCaseEl = document.querySelector("#uppercase-option");
const numberEl = document.querySelector("#number-option");
const symboleEl = document.querySelector("#special-option");

const genBtn = document.querySelector("#gen-btn");
const backBtn = document.querySelector("#back-btn")
// character sets
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*-+?";

// random charactor set 
const randomChar = (str) => {
    const randomIdx = Math.floor(Math.random()* str.length);
    return str[randomIdx];
}

// password genrator function
const genPassword = () => {
    const length = parseInt(passLength.value);
    let availableChar = "";


    if(lowerCaseEl.checked) availableChar += lowerCase;
    if(upperCaseEl.checked) availableChar += upperCase;
    if(numberEl.checked) availableChar += numbers;
    if(symboleEl.checked) availableChar += symbols;

    if(availableChar.length === 0){
        alert("⚠️ Please select at least one option!");
        return;
    }

    // rendom pass genrate
    let randomPass = "";
    for(let i = 0; i < length; i++){
        randomPass += randomChar(availableChar);
    }
        result.value = randomPass;
        console.log(randomPass);
}
// copy  password to clipboard function
const copyPass = () => {
    if(result.value.trim() === "" || result.value === "password"){
        return;
    }
    navigator.clipboard.writeText(result.value);
        copyBtn.textContent = "Copied!"
        setTimeout(() => (copyBtn.textContent = "Copy"),1500)
    
}
const backFun = () => {
    window.history.back();
};
genBtn.addEventListener("click",genPassword);
copyBtn.addEventListener("click",copyPass);
backBtn.addEventListener("click",backFun);