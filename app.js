const colors = ["green", "red","orange","yellow","cyan","violet","pink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let x = getNumber();
  let randomNumber = x; 
  document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

function getNumber(){
    return Math.floor(Math.random() * colors.length);
}