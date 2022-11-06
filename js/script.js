/*Toda vez que for executada esta função, sera criado um card novo*/


function createGame (player1, hour, player2){
    return `
    <li>
        <img src="./assets/${player1}.svg" alt="${player1}">
        <strong>${hour}</strong>
        <img src="./assets/${player2}.svg" alt="${player2}">
    </li>
    `
}

let delay = -0.3;
function createCard(date,day, games){  	
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s";>
            <h2>${date} <span>${day}</span></h2>
            <ul>
               ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
    createCard('24/11', "quinta", 
    createGame("mozambique","16:00","southAfrica") + createGame("cameroon","16:00","ghana"))
    createCard('28/11', "quinta", + createGame("mozambique","16:00","southAfrica"))
    
