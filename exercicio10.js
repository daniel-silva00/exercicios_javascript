// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var l1, resultado1;
	// recupera dados do usuario
    l1 = parseFloat (document.getElementById("l1").value);
    
    resultado1 = l1 * l1;
    document.getElementById("resultado1").innerHTML = "A area do quadrado é  " + resultado1 + " cm²";
}