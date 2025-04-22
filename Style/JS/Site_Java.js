//variables
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const add = document.querySelector("#add");


add.onclick = function (){
    result.value = parseFloat(num1.value) + parseFloat(num2.value)
}
subtract.onclick = function (){
    result.value = parseFloat(num1.value) - parseFloat(num2.value)
}
multiply.onclick = function (){
    result.value = parseFloat(num1.value) * parseFloat(num2.value)
}
divide.onclick = function (){
    result.value = parseFloat(num1.value) / parseFloat(num2.value)
}

//countdown variables

const start = document.querySelector("#start")
const countdown = document.querySelector("#countdown")
const displayCount = document.querySelector("#displayCount")

start.onclick = function (){
    let mins = parseInt(countdown.value);
    var i = mins;
    var alerted = false;

    myCounter = setInterval(function(){
        if (i < 0){
            if(alerted === false){
                alert("Lift Off!")
                alerted = true;
            }
            clearInterval(myCounter);
        } else {
            displayCount.innerHTML = i;
            i --;
            console.log("still counting down");
        }
    }, 1000);
    //clear
    const allinputtags = document.querySelectorAll("input")
    const clear = document.querySelector("#clear")

    clear.onclick = function(){
        for(let i = 0; i < allinputtags.length ; i++){
            allinputtags[i].value = "";
        }
        
    }
}

//Stretch goals

const pink = document.querySelector("#pink")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")
const white = document.querySelector("#white")

pink.onclick = function(){
    document.body.style.backgroundColor = 'pink';
}
green.onclick = function(){
    document.body.style.backgroundColor = 'green';
}
blue.onclick = function(){
    document.body.style.backgroundColor = 'blue';
}
white.onclick = function(){
    document.body.style.backgroundColor = 'white';
}
