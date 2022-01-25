const values = ["0","1","2","3","4","5","6","7","8","9",'A','B','C','D','E','F']

const button = document.getElementById('btn');
const textColor = document.querySelector(".color");

button.addEventListener("click", function(){

    let color="#";
    for(let i = 0; i < 8; i++){
        color += values[getRandom()];
    }

    document.body.style.backgroundColor = color;
    textColor.textContent = color;
})

function getRandom(){
    return Math.floor(Math.random()  * values.length);
}
