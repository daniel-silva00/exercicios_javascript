// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var b1, b2, a1, resultado1;
	// recupera dados do usuario
    b1 = parseFloat (document.getElementById("b1").value);
    b2 = parseFloat (document.getElementById("b2").value);
    a1 = parseFloat (document.getElementById("a1").value);
    
    resultado1 = ((b1 + b2) * a1) / 2;
    document.getElementById("resultado1").innerHTML = "A area do trapezio é  " + resultado1 + " cm";
}