var btnTransalte = document.querySelector('#btn-transalte');
var txtInput = document.querySelector('#txt-input')
var outTxtDiv = document.querySelector('#out-Txt');
btnTransalte.addEventListener("click", function clickEventHandler() {
    outTxtDiv.innerHTML = txtInput.value;
})

