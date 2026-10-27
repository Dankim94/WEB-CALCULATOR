let result = document.getElementById("result");

function clear(){
    tap = "Tap your operation";
   result.textContent = tap;
}

function change(){
    value = 9;
    result.textContent = value;
}

document.getElementById("clear").addEventListener('click', clear);
document.getElementById("nine").addEventListener('click',change); 
// permet de gérer les clicks sur une touche et de gérer l'affichage des résultats 

