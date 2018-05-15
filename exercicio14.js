// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var an, aa, resultado1, resultado2, resultado3, resultado4;
	// recupera dados do usuario
	aa = parseInt (document.getElementById("aa").value);
    an = parseInt (document.getElementById("an").value);

    resultado1 = aa - an ;
    document.getElementById("resultado1").innerHTML = "Essa pessoa tem " + resultado1 + " anos";

    resultado2 = resultado1 * 12;
    document.getElementById("resultado2").innerHTML = "Essa pessoa tem " + resultado2 + " meses";

    resultado3 = resultado2 * 4;
    document.getElementById("resultado3").innerHTML = "Essa pessoa tem " + resultado3 + " semanas";

    resultado4 = resultado3 * 7;
    document.getElementById("resultado4").innerHTML = "Essa pessoa tem " + resultado4 + " dias";
}