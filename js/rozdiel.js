var output='';
var spawned = 0;
var expression='';
var score=0;
var final_time = 2;
var batch = 1;
var background = new Audio('sounds/backgroundSound.mp3');

function generate(){
    document.getElementById('score').innerHTML = score.toString();
    document.getElementById('board').style.padding = "0";
    output = '';
    output += "<div class=\"container-fluid\" align=\"center\">";
    output += "<h1>Zapamätaj si objekty</h1>";
    output += "<a class=\"curs\" onClick=\"generateQuest()\" >";
    output += "<img width=\"400\" src=\"images/quest"+batch+".png\"/>";
    output += "</a>";
    output += "</div>"
    document.getElementById('board').innerHTML = output;

}

function generateQuest(){
    output = '';
    output += "<div class=\"container-fluid\" align=\"center\">";
    output += "<h1>Nájdi zhodu</h1>";
    output += "<a>";
    output += "<img width=\"400\" src=\"images/answer"+batch+".png\" usemap=\"#Map\"/>";
    output += "<map name=\"Map\" id=\"Map\">";
    if(batch == 1){
        output += "<area class=\"curs\" shape=\"rect\" coords=\"16 ,16 ,160 ,176 \" onClick=\"wrong()\" />";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"16 ,192 ,184 ,288 \" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"16 ,304 ,208 ,432 \" onClick=\"correct()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"216 ,16 ,352 ,160 \" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"224 ,192 ,352 ,288 \" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"248 ,304 ,368 ,432 \" onClick=\"wrong()\"/>";
    }
    if(batch == 2){
        output += "<area class=\"curs\" shape=\"rect\" coords=\"16 ,16 ,160 ,176 \" onClick=\"wrong()\" />";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"16 ,272 ,128 ,384 \" onClick=\"correct()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"160 ,160 ,200 ,392 \" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"208 ,16 ,312 ,144 \" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"264 ,160 ,376 ,288 \" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"224 ,296 ,328 ,432 \" onClick=\"wrong()\"/>";

    }
    output += "</map>";
    output += "</a>";
    output += "</div>"

    document.getElementById('board').innerHTML = output;
}

function correct(){
    output = '';
    document.getElementById('board').innerHTML = output;
    spawned--;
    score += 10;

    if (batch++ == final_time){
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
    score = score - 3;

    if (batch++ == final_time){
        victory();
    }
    else{
        generate();
    }
}


function victory(){
    if (document.getElementById('soundButton').className == 'glyphicon glyphicon-volume-up'){
        var victorySound = new Audio('sounds/victorySound.mp3');
        victorySound.play();
    }
    document.getElementById('score').innerHTML = score.toString();
    output = "";
    output += "<div class=\" text-center top-margin\">";
    output += "<h1>Koniec Hry</h1>"
    output += "<h1>Vaše skóre: "+((score<0) ? 0 : score).toString()+"</h1>"
    output += "<a class='btn btn-primary btn-mojnav' href='hra-rozdiel.html'>Hrát znovu</a>";
    output += "</div>"
    document.getElementById('board').innerHTML = output;
    document.getElementById('board').style.background = '#fff';
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