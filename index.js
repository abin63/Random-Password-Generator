const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let display1 = document.getElementById("display1");

function randomPasswordGenerator1() {
   let password1 = "";
    display1.value = "";
    for(let i=0; i<10; i++) {
        let random = Math.floor(Math.random()*characters.length);
        password1 += characters[random];
    }
    display1.value = password1;
}

let display2 = document.getElementById("display2");

function randomPasswordGenerator2() {
    let password2 = "";
    display2.value = "";
    for(let i=0; i<10; i++) {
        let random = Math.floor(Math.random()*characters.length);
        password2 += characters[random];
    }
    display2.value = password2;
}


function randomPasswordGenerator() {
    randomPasswordGenerator1();
    randomPasswordGenerator2();
}







