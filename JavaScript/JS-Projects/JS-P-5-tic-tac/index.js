const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//lets create function to initiate the game
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    //empty the boxes on UI also
    boxes.forEach((box, index) => {
        box.innerText="";
        boxes[index].style.pointerEvents="all";
           //empty the css properties
           box.classList=`box box${index+1}`;
    });
 
    
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player- ${currentPlayer}`;
}
initGame();

function checkGameOver(){

    let answer = "";

    winningPositions.forEach((position) => {
        //all 3 boxes must be non-empty and exactly same in value
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="") 
        && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]]) ){

        //check if winner is X
        if(gameGrid[position[0]]==="X")
        answer="X";

        else
        answer="O";

        //disable pointer events
        boxes.forEach((box) => {
            box.style.pointerEvents="none";
        })

        //now we know X/O is winner
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
        }
    });

    //it means we have a winner
    if(answer!==""){
        gameInfo.innerText=`Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    //let's check when the game is tied
    let fillCount=0;
    gameGrid.forEach((box) => {
        if(box!="")
        fillCount++;
    });

    //bored is filled game is tied
    if(fillCount===9){
        gameInfo.innerText=`Game Tied`;
        newGameBtn.classList.add("active");
    }

}
function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }

    gameInfo.innerText=`Current Player -${currentPlayer}`;
}
function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        //cursor will not change into pointer on the box already updated
        boxes[index].style.pointerEvents="none";
        //swapping the turn
        swapTurn();

        //check if the game is over or not
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);
