// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var SM, SF, resultado1;
	// recupera dados do usuario
    SM = parseFloat (document.getElementById("SM").value);
    SF = parseFloat (document.getElementById("SF").value);
    
    resultado1 = SF / SM ;
    document.getElementById("resultado1").innerHTML = "O funcionário recebe  " + resultado1.toFixed(1) + " salários minimos";
}