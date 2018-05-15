// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var sj, c1, c2, resultado1;
	// recupera dados do usuario
	sj = parseFloat (document.getElementById("sj").value);
    c1 = parseFloat (document.getElementById("c1").value);
    c2 = parseFloat (document.getElementById("c2").value);

    resultado1 = sj -((c1 + c2) + ((c1 + c2) * 2) / 100);
    document.getElementById("resultado1").innerHTML = "Sobrou do salario de João " + resultado1 + " Reais";

    
}