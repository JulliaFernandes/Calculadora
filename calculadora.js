var memoria = 0;

document.addEventListener('keydown', function(event) {
    var key = event.key;

    if(!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        insert(key);
    } 
    else if (key === 'Enter') {
        calcular(); 
    } 
    else if (key === 'Backspace') {
        back(); 
    }
    else if (key === 'w'){
        addMemory();
    }
    else if(key === 'e'){
        subMemory();
    } 
    else if(key === 'r'){
        recallMemoria();
    }
    else if(key === 'q'){
        clearMemory();
    }
    else if(key === 'c'){
        clean();
    }
});

function insert(num){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "------";
    }
}

function recallMemoria(){
    document.getElementById('resultado').innerHTML = memoria;
}

function clearMemory(){
    memoria = 0;
}

function addMemory() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
    if(resultado){
        var resultadoNumerico = parseFloat(resultado);
        memoria += resultadoNumerico;
        document.getElementById('resultado').innerHTML = "";
    }
}

function subMemory() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        var resultadoNumerico = parseFloat(resultado);
        memoria -= resultadoNumerico;
        document.getElementById('resultado').innerHTML = "";
    }
}
