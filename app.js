const textInput=document.querySelector("#text-Input")
const btnTranslate=document.querySelector("#btn-Translate");
const output=document.querySelector("#output")

const serverUrl="https://minions-translation.mohit0268.repl.co/Translate/minion.json";

function urlTranslation(text){
    return serverUrl +"?"+ "text=" +  text;
}

function clickHandler(){
 


 
btnTranslate.addEventListener("click",clickHandler());