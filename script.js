function verificar() {
    var n1 = document.getElementById('nota1').value;
    var n2 = document.getElementById('nota2').value;
    var n3 = document.getElementById('nota3').value;
    var media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    resultado = document.getElementById('resultado');

    if (media >=60){
        resultado.textContent= 'aprovado';
    } else {
        resultado.textContent= 'reprovado';
    }
}