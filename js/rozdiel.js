var output='';
var spawned = 0;
var expression='';
var score=0;
var final_time = 2;
var batch = 1;

function generate(){
    output = '';

    output += "<a class=\"curs\" onClick=\"generateQuest()\" >";
    output += "<img width=\"500\" src=\"images/quest"+batch+".png\"/>";
    output += "</a>";

    document.getElementById('board').innerHTML = output;

}

function generateQuest(){
    output = '';

    output += "<a>";
    output += "<img width=\"500\" src=\"images/answer"+batch+".png\" usemap=\"#Map\"/>";
    output += "<map name=\"Map\" id=\"Map\">";
    if(batch == 1){
        output += "<area class=\"curs\" shape=\"rect\" coords=\"20,20,200,220\" onClick=\"wrong()\" />";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"20,240,230,360\" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"20,380,260,540\" onClick=\"correct()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"270,20,440,200\" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"280,240,440,360\" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"310,380,460,540\" onClick=\"wrong()\"/>";
    }
    if(batch == 2){
        output += "<area class=\"curs\" shape=\"rect\" coords=\"20,20,200,220\" onClick=\"wrong()\" />";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"20,340,160,480\" onClick=\"correct()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"200,200,250,490\" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"260,20,390,180\" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"330,200,470,360\" onClick=\"wrong()\"/>";
        output += "<area class=\"curs\" shape=\"rect\" coords=\"280,370,410,540\" onClick=\"wrong()\"/>";

    }
    output += "</map>";
    output += "</a>";

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
    document.getElementById('board').innerHTML = "<a href='rozdiel.html'>Hrát znovu</a>"+((score<0) ? 0 : score).toString();
    document.getElementById('board').style.background = '#fff';
}