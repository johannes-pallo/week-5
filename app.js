const userChoiceMenu = document.querySelector("#userChoice");
const playBtn = document.querySelector("#playBtn");
const output = document.querySelector("#output");


playBtn.addEventListener("click", () => {

    const randomNum = Math.floor(Math.random() * 3) + 1;
    

    let cpuChoice = '';
    switch(randomNum){
        case 1:
            cpuChoice = 'rock';
            break;
        case 2:
            cpuChoice = 'paper';
            break;
        case 3:
            cpuChoice = 'scissors';
            break;
        default:
            cpuChoice = 'rock';
            break;
        } 

    const userChoice = userChoiceMenu.value;

    if(cpuChoice === userChoice) {
        output.innerHTML = `It is a tie! You both chose ${userChoice}`;
    } else if (cpuChoice === 'rock' && userChoice === 'paper') {
        output.innerHTML = 'Congratulations! You win! Paper beats rock!';
    } else if (cpuChoice === 'rock' && userChoice === 'scissors') {
        output.innerHTML = 'Yikes, you lose! Rock beats scissors.';
    } else if (cpuChoice === 'paper' && userChoice === 'rock') {
        output.innerHTML = 'Yikes, you lose! Paper beats rock.';
    } else if ( cpuChoice === 'paper' && userChoice === 'scissors') {
        output.innerHTML = 'Congratulations! You win! Scissors beats paper!';
    } else if (cpuChoice === 'scissors' && userChoice === 'paper') {
        output.innerHTML = 'Yikes, you lose! Scissors beats paper.';
    } else if (cpuChoice === 'scissors' && userChoice === 'rock') {
        output.innerHTML = 'Congratulations! You win! Rock beats scissors!';
    }
});