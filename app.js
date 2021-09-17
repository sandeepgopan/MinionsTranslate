var btnTransalte = document.querySelector('#btn-transalte');
var txtInput = document.querySelector('#txt-input')
var outTxtDiv = document.querySelector('#out-Txt');
var serverURL = "https://api.funtranslations.com/translate/minion.json"

 function getTranslationURL(text){
     return serverURL + "?" + "text=" + text 
 }
 function errorHandler(error){
     console.log("error occured", error);
     alert("error");
 }
function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json => {
var translatedText = json.contents.translated;
outTxtDiv.innerHTML = translatedText;
    })
    .catch(errorHandler);
}
 btnTransalte.addEventListener("click", clickHandler)