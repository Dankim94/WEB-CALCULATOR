let result = document.getElementById("result");

function clear(){
    tap = "Tap your operation";
   result.textContent = tap;
}

function change(){
    value = 9;
    result.textContent = value;
}

function adding(){
    previous;
    next;
    operation =  previous + next;
    result.textContent = operation;
}

function substract(){
    previous;
    next;
    operation =  previous - next;
    result.textContent = operation;
}

function multiply(){
    previous;
    next;
    operation =  previous * next;
    result.textContent = operation;
}

function divide(){
    previous;
    next;
    if(next == 0){
        operation = "Infinity";
        result.textContent = operation;
    }else {
        operation =  previous / next;
    result.textContent = operation;
    }
    
}
document.getElementById("clear").addEventListener('click', clear);
document.getElementById("nine").addEventListener('click',change); 
document.getElementById("addition").addEventListener('click',adding);
// permet de gérer les clicks sur une touche et de gérer l'affichage des résultats 

