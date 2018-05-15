// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var d1, d2, resultado1;
	// recupera dados do usuario
    d1 = parseFloat (document.getElementById("d1").value);
    d2 = parseFloat (document.getElementById("d2").value);
    
    resultado1 = (d1 * d2) / 2;
    document.getElementById("resultado1").innerHTML = "A area do losango é  " + resultado1 + " cm";
}