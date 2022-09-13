$(".reveal_button").click(function(){
    $(this).next(".reveal").toggle();
});

let randomGameId;
const note = document.querySelectorAll('.note');
const reveal = document.querySelectorAll('.reveal');


function newGame() {
    randomGame();
    note.forEach(item => { item.style.display = 'none'; });
    reveal.forEach(item => { item.style.display = 'none'; });
    document.getElementById(gameId).style.display = "flex";
}

function randomGame() {
    gameId = 'note' + (Math.floor(Math.random() * 9));
    randomGameId = gameId;
}

