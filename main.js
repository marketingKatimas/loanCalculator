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

// let interest = interestRate / 12 / 100;
let interest = (0.015 * loanTenure) + 1;



//To Calculate The EMI
const calculateEMI = () => {
    // let emi = loanAmount * interest * (Math.pow(1 + interest, loanTenure) / (Math.pow(1 + interest, loanTenure) - 1));
    let emi = (loanAmount * interest) / loanTenure;

    return emi;
};


//To update the value
const updateData = (emi) => {
    loanEMIValue.innerHTML = Math.round(emi);

    let totalAmount = Math.round(loanTenure * emi);
    totalAmountValue.innerHTML = totalAmount;

    // let totalInterestPayable = Math.round(totalAmount - loanAmount);
    // totalInterestValue.innerHTML = totalInterestPayable;

    let totalInterest = ((0.015 * loanTenure) + 1).toFixed(2);
    totalInterestValue.innerHTML = totalInterest;

    const loanTenureValueElement = document.querySelector(".loan-tenure-value");
    loanTenureValueElement.innerHTML = loanTenure; // Update the loan tenure value in the HTML

};

//Function to update the value
const refreshInputValues = () => {
    loanAmount = parseFloat(loanAmountInput.value);
    // interestRate = parseFloat(interestRateInput.value);
    loanTenure = parseFloat(loanTenureInput.value);

    // interest = interestRate / 12 / 100;
    interest = (0.015 * loanTenure) + 1;
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

