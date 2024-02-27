let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");


let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerHTML="X";
            msg.innerHTML="0 Turn";
            turnX = false;
        }else{
            box.innerHTML="0"
            msg.innerHTML="X Turn";
            turnX = true;
        }
        box.disabled= true;
        checkWinner();
    })
})

const checkWinner =()=>{
    for(let pattern of winPatterns){
        const val1 = boxes[pattern[0]].innerHTML;
        const val2 = boxes[pattern[1]].innerHTML;
        const val3 = boxes[pattern[2]].innerHTML;
        // console.log(val1, val2,val3);
        if(val1!=="" && val2!=="" && val3!==""){
            if(val1===val2 && val2===val3){
                showWinner(val1);
            }
        }
    }
}

let winMsg = document.querySelector(".winner-message");
let showWin = document.querySelector(".show-winner");

const showWinner = (val1) => {
    winMsg.innerHTML = `${val1} Wins`
    showWin.style.display = "flex";
}

let reset = document.querySelector(".reset");
let rst = document.querySelector(".rst");

reset.addEventListener("click",resetFunc);
rst.addEventListener("click",resetFunc);
function resetFunc(){
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled = false;
    })
    showWin.style.display = "none";
    turnX = true;
    msg.innerHTML="X Turn";
}
