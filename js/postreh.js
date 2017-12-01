var output='';
var spawned = 0;
var finished = 0;
var seconds = 0, minutes = 0;
var stop = 0;
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
    stop = 1;
    output = "";
    output += "<div class=\" text-center top-margin\">";
    output += "<h1>Koniec Hry</h1>";
    output += "<h1>Váš čas: </h1>";
    output += "<a href='hra-postreh.html'>Hrát znovu</a>";
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
        document.getElementById('timer').innerHTML = '<a class="btn btn-success btn-mojnav" id="timer" href="#">'+minutes+':'+seconds+'</a>';
        setTimeout ( "countTime()", 1000 );
    }
}
