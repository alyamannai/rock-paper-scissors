document.addEventListener('DOMContentLoaded', function() {

    const rock = document.getElementById('rock')    
    const paper = document.getElementById('paper')    
    const scissors = document.getElementById('scissors')    
    
    let userChoice;
    let computerChoice;
    let matchResult;
    
    rock.addEventListener('click',function(){
        userChoice = "rock";
       
    })
    
    paper.addEventListener('click',function(){
        userChoice = "paper";
       
    })
    
    scissors.addEventListener('click',function(){
        userChoice = "scissors";
       
    })
    
    
    
    
    
    function generateChoice() {
        const randomNumber = Math.random(); 
    
        if (randomNumber < 1/3) {
            computerChoice = "rock";
        } else if (randomNumber < 2/3) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
    
        return computerChoice;
    }
    
    
    
    
    document.querySelectorAll('button.shoot').forEach(item => {
        item.addEventListener('click', event =>{
            computerChoice = generateChoice();
           if (userChoice===computerChoice){
    
                matchResult = "draw";
           }
            else if(userChoice==="rock"&&computerChoice==="scissors"||
                userChoice==="paper"&&computerChoice==="rock"||
                userChoice==="scissors"&&computerChoice==="paper"){
    
                matchResult = "you win";
                }
    
            else{
    
                matchResult = "you lose";
            }
    
    
       const ResultDisplay = document.getElementById('Results')
    
       ResultDisplay.textContent = matchResult;
        })
    })
    
    
    
    })
    
    