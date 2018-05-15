// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web

function aoCarregar(){
    document.getElementById("interface").style.display = "none";
}

function exibir(){
    document.getElementById("interface").style.display = "block";
}

function ocultar(){
    document.getElementById("interface").style.display = "none";
}

function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
    var numero = document.getElementById("numero").value;    
    var tabuada = " ";
    
    for (i=1; i<=10; i++){         
        tabuada = tabuada + i + " X " + numero + " = " + parseInt(i * numero) + "<br>";
    }
    
    document.getElementById("resultado1").innerHTML = tabuada;
    
}