const loanAmountInput = document.querySelector(".loan-amount");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");

const calculateBtn = document.querySelector(".calculate-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;

//To Calculate The EMI
const calculateEMI = () => {
    let emi = loanAmount * interest * (Math.pow(1 + interest, loanTenure) / (Math.pow(1 + interest, loanTenure) - 1));

    return emi;
};


//To update the value
const updateData = (emi) => {
    loanEMIValue.innerHTML = Math.round(emi);

    let totalAmount = Math.round(loanTenure * emi);
    totalAmountValue.innerHTML = totalAmount;

    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalInterestValue.innerHTML = totalInterestPayable;
};

//Function to update the value
const refreshInputValues = () => {
    loanAmount = parseFloat(loanAmountInput.value);
    interestRate = parseFloat(interestRateInput.value);
    loanTenure = parseFloat(loanTenureInput.value);

    interest = interestRate / 12 / 100;
};


//To call the 2 function (function calculateEmi & updateData)
const init = () => {
    refreshInputValues();
    let emi = calculateEMI();
    updateData(emi);
};

// This is to call the Function of init
init();


//Add EventListener to calculate Btn
calculateBtn.addEventListener("click", init);

//YoutubeLink: https://www.youtube-nocookie.com/embed/KyiXRer3GW0?playlist=KyiXRer3GW0&autoplay=1&iv_load_policy=3&loop=1&modestbranding=1&start=