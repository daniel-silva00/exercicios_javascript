// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var kilo, resultado1;
	// recupera dados do usuario
    kilo = parseFloat (document.getElementById("kilo").value);
    
    resultado1 = kilo * 1000;
    document.getElementById("resultado1").innerHTML = "O peso convertido é  " + resultado1 + " gramas";
}