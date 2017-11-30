var output='';
var spawned = 0;
var finished = 0;
function spawn(){
    if (spawned == 0){
        var time = 0.5 + Math.random()*2500;
        var rtop = Math.random()*480;
        var rleft = Math.random()*840;
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
    document.getElementById('board').innerHTML = "<a href='postreh.html'>Hrát znovu</a>";
    document.getElementById('board').style.background = '#fff';
}
