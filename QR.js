const input = document.querySelector("#text-input");

const genrateBtn = document.querySelector("#generate");
const resetBtn = document.querySelector("#reset");

const qrCode = document.querySelector("#code");
const backBtn = document.querySelector("#back")

// Qr genrator
genrateBtn.addEventListener("click", () =>{
    const text = input.value.trim();

    if(text === ""){
        alert("Enter some text first!")
        return;
    }
    qrCode.innerHTML = "";
    new QRCode(qrCode, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
// reset button
resetBtn.addEventListener("click",() => {
    input.value = "";
    qrCode.innerHTML = "";
    qrCode.innerText = "QR Code";
});
// back button
backBtn.addEventListener("click",() => {
    window.history.back();
});

