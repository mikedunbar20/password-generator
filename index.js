const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("passwordClick");
let firstPassword = document.getElementById("firstPassword")
let secondPassword = document.getElementById("secondPassword")
let first = "";
let second = "";

function clear(){
    first="";
    second="";
}
passwordEl.addEventListener("click", function() {
    clear();
   for(let i=0;i<15; i++){
     first += characters[Math.floor(Math.random()*characters.length)];
     second += characters[Math.floor(Math.random()*characters.length)];
   }
   console.log(first)
   console.log(second)
   firstPassword.textContent = first;
   secondPassword.textContent = second;
   firstPassword.style.display = "block";
   secondPassword.style.display = "block";
});

/*
firstPassword.setSelectionRange(0,99999);
firstPassword.select();
secondPassword.setSelectionRange(0,99999);
secondPassword.select();

navigator.clipboard.writeText(firstPassword.value);
navigator.clipboard */