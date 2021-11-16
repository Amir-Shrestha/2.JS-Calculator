function click_key(val){
    document.getElementById('input-view').innerHTML += val;
}

function clear_all(){
    document.getElementById('input-view').innerHTML='';
}

function back_slash(){
    document.getElementById('input-view').innerHTML=document.getElementById('input-view').innerHTML.slice(0, -1);
}

function result(){
    let expression = document.getElementById('input-view').innerHTML;
    document.getElementById('input-view').innerHTML=eval(expression);
}
