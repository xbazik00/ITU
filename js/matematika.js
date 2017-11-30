
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
    output += "<div class=\"container-fluid\" align=\"center\">";
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
    document.getElementById('board').innerHTML = "<a href='matika.html'>Hrát znovu</a>"+((score<0) ? 0 : score).toString();
    document.getElementById('board').style.background = '#fff';
}