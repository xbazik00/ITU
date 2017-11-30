var cards = ['C','1','A','2','B','3','C','1','B','A', 'D', 'D', '4', '3', 'E', '2', 'E', '4'];
var values = [];
var ids = [];
var completed = 0;
var output = '';

function createBoard(){
    completed = 0;
    for(var i = 0; i < cards.length; i++){
        output += "<div id='" + i +"' onclick='flipCard(this,\"" + cards[i] + "\")'></div>";
    }
    document.getElementById('board').innerHTML = output;
}

function victory(){
    document.getElementById('board').innerHTML = "<a href='pexeso.html'>Hrát znovu</a>";
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

function test(){
    console.log('ja');
}
