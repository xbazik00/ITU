var cards = ['C','1','A','2','B','3','C','1','B','A', 'D', 'D', '4', '3', 'E', '2', 'E', '4'];
var values = [];
var ids = [];
var completed = 0;
var output = '';
var seconds = 0, minutes = 0;
var stop = 0;
var background = new Audio('sounds/backgroundSound.mp3');

function createBoard(){
    completed = 0;
    for(var i = 0; i < cards.length; i++){
        output += "<div class=\"karta\" id='" + i +"' onclick='flipCard(this,\"" + cards[i] + "\")'></div>";
    }
    document.getElementById('board').innerHTML = output;
}

function victory(){
    if (document.getElementById('soundButton').className == 'glyphicon glyphicon-volume-up'){
        var victorySound = new Audio('sounds/victorySound.mp3');
        victorySound.play();
    }
    stop = 1;
    output = "";
    output += "<div class=\" text-center top-margin\">";
    output += "<h1>Koniec Hry</h1>";
    if(minutes > 0){
        output += "<h1>Váš čas: "+minutes+" minut a"+seconds+"sekund</h1>";
    }
    else{
        output += "<h1>Váš čas: "+seconds+" sekund</h1>";
    }
    output += "<a class='btn btn-primary btn-mojnav' href='hra-pexeso.html'>Hrát znovu</a>";
    output += "</div>";
    document.getElementById('board').innerHTML = output;
    document.getElementById('board').style.background = '#fff';
}

function flipCard(card, value){
    if (card.innerHTML == "" && values.length < 2){
        card.style.background = '#fff';
        card.innerHTML = value;
        values.push(value);
        ids.push(card.id);
        if(values.length == 2){
            if(values[0] == values[1]){
                ids = [];
                values = [];
                completed += 2;
                if(completed == cards.length){
                    victory();
                }
            }
            else{
                console.log('before');
                setTimeout(function(){
                    flipBack(ids[0]);
                    flipBack(ids[1]);
                    ids = [];
                    values = [];
                    console.log('after');
                }, 800);
                
            }
        }
    }
}

function flipBack(id){
    var card = document.getElementById(id);
    card.style.background = '#b3ecff';
    card.innerHTML = "";
}

function countTime(){
    if (stop == 0){
        seconds++;
        if (seconds == 60){
            minutes++;
            seconds = 0;
        }
        document.getElementById('timer').innerHTML = '<a class="btn btn-success btn-mojnav" id="timer" href="#">'+minutes+':'+seconds+'</a>';
        setTimeout ( "countTime()", 1000 );
    }
}

function soundSwitch(){
    if (document.getElementById('soundButton').className == 'glyphicon glyphicon-volume-off'){
        document.getElementById('soundButton').className = 'glyphicon glyphicon-volume-up';
        background.play();
    }
    else{
        document.getElementById('soundButton').className = 'glyphicon glyphicon-volume-off';
        background.pause();
    }
}

function playAudio(){
    background.play();
}