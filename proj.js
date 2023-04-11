
let mytext = document.getElementById("one");
console.log(mytext);
let mybutton = document.getElementById("button1");

mybutton.onclick=function(){
    for(var i = 0 ;i<mytext.value; i++){
       var button2 =  document.createElement("button");
       document.body.appendChild(button2);
       document.getElementsByTagName(button2).value=makeid();
     
    };    
};
let generateNumber = document.getElementById("chars");
let btnGenerate = document.getElementById("generate");
let buttons = document.getElementById("buttons");
let enteredNumber;
let container = '',
function getRandomChar() {
    let chars =["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let randomChar =Math.trunc(Math.random() *chars.length);
    return chars[randomChar];
};
function getenteredNumber() {
    enteredNumber =Number(generateNumber.value);
};
function drawButtons() {
    container= '';
    for (let i = 0; i < enteredNumber; i++){
        container += ' <button>${getRandomChar()}</button> '
    
    }
    buttons.innerHTML = container;
};
btnGenerate.addEventListener("click",function(){
    getenteredNumber();
    drawButtons();
});  
  


