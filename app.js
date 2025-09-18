//Define our elements
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const resetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playto');

// define the displayed score & winning score
let currentValue1 = parseInt(p1Display.textContent);
let currentValue2 = parseInt(p2Display.textContent);
let winningScore = 5;

//define if gameover or not yet
let isGameOver = false;   //if game is over we want to block both buttons 


//Call our buttons
btn1.addEventListener('click', function(){
    if(!isGameOver){
        currentValue1++;
        if(currentValue1 === winningScore){  
        isGameOver = true;
        p1Display.classList.remove('has-text-success');
        p2Display.classList.remove('has-text-danger');
        // disable the buttons with Bulma


    }
    p1Display.textContent = currentValue1;
    }
})

btn2.addEventListener('click', function(){
    if(!isGameOver){
        currentValue2++;
        if(currentValue2 === winningScore){  
        isGameOver = true;
        p1Display.classList.remove('has-text-danger');
        p2Display.classList.remove('has-text-success');
        // disable the buttons with Bulma


    }
    p2Display.textContent = currentValue2;
    }
})


// reset button functionality
function reset(){
    isGameOver = false; 
    currentValue1 = 0;
    currentValue2 = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    // remove the classes for the colors
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');

    // Reset the buttons again

    
}


resetButton.addEventListener('click', reset)



winningScoreSelect.addEventListener('change', function(){
    // the value in the drop down list is a string so we have to convert to int first
    winningScore = parseInt(this.value);
    reset();
})

