// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var pes, resultado1, resultado2;
	// recupera dados do usuario
    peso = parseFloat (document.getElementById("pes").value);
    

    resultado1 = peso + (peso * 15 /100);
    document.getElementById("resultado1").innerHTML = "O novo peso com 15% a mais é  " + resultado1 + "Kg";
    resultado2 = peso - (peso * 20 /100);
    document.getElementById("resultado2").innerHTML = "O novo peso com 20% a menos é " + resultado2 + "Kg";
}