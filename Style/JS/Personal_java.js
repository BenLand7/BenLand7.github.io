const allinputtags = document.querySelectorAll("input")
const clear = document.querySelector("#clear")

reset.onclick = function (){
    for(let i = 0; i < allinputtags.length ; i++){
        allinputtags[i].value = "";
    }
}


