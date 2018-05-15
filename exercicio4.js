// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var nro1, nro2, resultado1;
	// recupera dados do usuario
	nota1 = parseFloat (document.getElementById("nota1").value);
    nota2 = parseFloat (document.getElementById("nota2").value);

    resultado1 = ((nota1 * 2)  + (nota2 * 3)) / 5 ;
    document.getElementById("resultado1").innerHTML = "Média = " + resultado1;
}