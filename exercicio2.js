// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var nro1, nro2, nro3, resultado1;
	// recupera dados do usuario
	nro1 = parseFloat (document.getElementById("nro1").value);
    nro2 = parseFloat (document.getElementById("nro2").value);
    nro3 = parseFloat (document.getElementById("nro3").value);

    resultado1 = nro1 * nro2 * nro3;
    document.getElementById("resultado1").innerHTML = "Multiplicaçao = " + resultado1;
}