const textInput=document.querySelector("#text-Input")
const btnTranslate=document.querySelector("#btn-Translate");
const output=document.querySelector("#output")

const serverUrl="https://minions-translation.mohit0268.repl.co/Translate/minion.json";

function urlTranslation(text){
    return serverUrl +"?"+ "text=" +  text;
}

function clickHandler(){
 var input = textInput.value;

 //calling function to convert data into json format

 fetch(urlTranslation(input))
 .then(response =>response.json())
 .then(json => {var translated=json.contents.translated;
    output.innerHTML=translated});
}

 
btnTranslate.addEventListener("click",clickHandler());