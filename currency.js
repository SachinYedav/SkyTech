// dom selection
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn")
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector("#msg");

// add or update dopdown options
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.value = currCode;
        newOption.text = currCode; 
        
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        };
        select.append(newOption);
    };
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
};

// update flag images
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrcLink = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrcLink;

};

// button evntlistenar
btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount  = document.querySelector(".amount input")
    let amountVal = amount.value;
    if(amountVal === "" || amountVal < 1){
        amountVal = 1;
    }

    // currency conveter by fatching api
    let URL = `https://open.er-api.com/v6/latest/${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data.rates[toCurr.value];
    let finalAmt = amountVal * rate;

    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmt.toFixed(2)} ${toCurr.value}`;
    amount.value = "";
});