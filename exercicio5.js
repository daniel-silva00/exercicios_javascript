// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var preço1, resultado1;
	// recupera dados do usuario
	preço1 = parseFloat (document.getElementById("preço1").value);

    resultado1 = preço1 - (preço1 * 10 /100) ;
    document.getElementById("resultado1").innerHTML = "Preço com desconto = R$  " + resultado1 +",00";
}