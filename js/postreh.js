var output='';
var spawned = 0;
var finished = 0;
var seconds = 0, minutes = 0;
var stop = 0;
var background = new Audio('sounds/backgroundSound.mp3');

function spawn(){
    if (spawned == 0){
        var time = 0.5 + Math.random()*2500;
        var rtop = Math.random()*420;
        var rleft = Math.random()*780;
        console.log('before');
        setTimeout(function(){
            spawned++;
            console.log('spawned');
            output += "<div id='blob' onclick='destroy()'></div>";
            document.getElementById('board').innerHTML = output;
            document.getElementById('blob').style.top = rtop + "px";
            document.getElementById('blob').style.left = rleft + "px";
            console.log('after');
        }, time);
        
    }
}
function destroy(){
    output = '';
    document.getElementById('board').innerHTML = output;
    spawned--;
    finished++;
    if (finished == 10){
        victory();
    }
    else{
        spawn();
    }
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
    output += "<a class='btn btn-primary btn-mojnav' href='hra-postreh.html'>Hrát znovu</a>";
    output += "</div>";
    document.getElementById('board').innerHTML = output;
    document.getElementById('board').style.background = '#fff';
}

function countTime(){
    if (stop == 0){
        seconds++;
        if (seconds == 60){
            minutes++;
            seconds = 0;
        }
        document.getElementById('timer').innerHTML = minutes+':'+seconds;
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
