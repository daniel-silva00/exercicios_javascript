// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programaçao
// javascript é uma linguagem para web
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var sal1, vend, resultado1;
	// recupera dados do usuario
    sal1 = parseFloat (document.getElementById("sal1").value);
    vend = parseFloat (document.getElementById("vend").value);
    

    resultado1 = vend * 4 /100 ;
    document.getElementById("resultado1").innerHTML = "O valor da comissão é de R$  " + resultado1 +",00";
    resultado2 = resultado1 + sal1;
    document.getElementById("resultado2").innerHTML = "O valor do salario do funcionario é de" + resultado2 + ",00";
}