var output='';
var spawned = 0;
var finished = 0;
var expression='';
var score=0;
var final_time = 10;

var op;
var first;
var second;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomOp() {
    var op = getRandomInt(0,3);
    if(op == 0){return '+';}
    if(op == 1){return '-';}
    if(op == 2){return '*';}
    if(op == 3){return '/';}
}

function generateButtons(){
    var rand = getRandomInt(0,3);
    output += "<div class=\"container-fluid my-button-container\" align=\"center\">";
    for (var i = 0; i < 3; i++) { 
        if(rand == i){
            output += "<button type=\"button\" class=\"btn btn-xl btn-space btn-primary\" onclick=\"correct()\">"+eval(expression)+"</button>";
        }
        else{
            output += "<button type=\"button\" class=\"btn btn-xl btn-space btn-primary\" onclick=\"wrong()\">"+eval(eval(expression)+"+"+getRandomInt(-20,20))+"</button>";
        }
    }
    output += "</div>"
}

function generate(){
    document.getElementById('score').innerHTML = score.toString();
    first = getRandomInt(0,20);
    second = getRandomInt(1,20);
    op = getRandomOp();
    expression = first+op+second;

    output += "<h1>"+expression+"</h1>";

    generateButtons();

    document.getElementById('board').innerHTML = output;

}

function correct(){
    output = '';
    document.getElementById('board').innerHTML = output;
    spawned--;
    finished++;
    score += 10;

    if (finished == final_time){
        victory();
    }
    else{
        generate();
    }
    }

function wrong(){
    output = '';
    document.getElementById('board').innerHTML = output;
    spawned--;
    finished++;
    score = score - 3;

    if (finished == final_time){
        victory();
    }
    else{
        generate();
    }
}


function victory(){
    document.getElementById('score').innerHTML = '<a class="btn btn-success btn-mojnav" id="timer" href="#">'+((score<0) ? 0 : score).toString()+'</a>';
    output = "";
    output += "<div class=\" text-center top-margin\">";
    output += "<h1>Koniec Hry</h1>"
    output += "<h1>Vaše skóre: "+((score<0) ? 0 : score).toString()+"</h1>"
    output += "<a class='btn btn-primary btn-mojnav' href='hra-matika.html'>Hrát znovu</a>";
    output += "</div>"
    document.getElementById('board').innerHTML = output;
    document.getElementById('board').style.background = '#fff';
}