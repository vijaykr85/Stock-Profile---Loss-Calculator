const inputInitial = document.querySelector('#inputIInitial');
const inputQuantity = document.querySelector('#inputQuantity');
const inputCurrent = document.querySelector('#inputCurrent');
const button = document.querySelector('#btn');
const outputText = document.querySelector('#para');

button.addEventListener("click",clickHandler);

function clickHandler(){
    var initialPrice = Number(inputInitial.value);
    var quantity = Number(inputQuantity.value);
    var CurrentPrice = Number(inputCurrent.value);
    console.log("ee")
    if (initialPrice<=0 || quantity<=0 || CurrentPrice<=0){
        showMessage("Enter valid value in all fields!");

    }else if (initialPrice > CurrentPrice){
        showMessage("Your are at ₹"+ calculateProfitloss (initialPrice, CurrentPrice, quantity)+"loss 📉 and your loss percentage is" + calculateProfitlossPercentage(initialPrice, CurrentPrice, quantity));

    }else if (CurrentPrice > initialPrice){
        showMessage("Your are at ₹" + calculateProfitloss(initialPrice, CurrentPrice, quantity)+ " profit 📈 and your profit percentage is " + calculateProfitlossPercentage(initialPrice, CurrentPrice, quantity));

    }else{
        showMessage("समय बदल गया लेकिन आपके स्टॉक नहीं|")
    }
    //
}
function showMessage(msg) {
    outputText.innerText = msg;
}
function calculateProfitlossPercentage(initial, final, quantity){
    return Math.abs((initial - final )* quantity);
}
function calculateProfitlossPercentage(initial, final, quantity) {
    var profitLoss = calculateProfitloss(initial, final,quantity);
    return (profitLoss / initial ) *100;
}