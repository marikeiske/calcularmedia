/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

/*
let aluno = prompt ("Coloque seu nome:")
let n1 = prompt ("resultado da primeira prova:")
let n2 = prompt ("resultado da segunda prova:")

let average = (Number(n1) + Number(n2) + Number(n3)) /2

let result = average > 7

average = average.toFixed(2)

if (result) {
    alert("Parabens, " + aluno + "! Sua média foi de: " + average ) 
    }
    
    else {
    alert(aluno + " estude para a sua rec! Sua média foi de: " + average )
    }
    */

    let student = prompt ("Qual o nome do aluno?")
    let n1 = prompt ("Qual a nota da primeira prova?")
    let n2 = prompt ("Qual a nota da segunda prova?")
    let n3 = prompt ("Qual a nota da terceira prova?")
    
    let average = (Number(n1) + Number(n2) + Number(n3)) / 3
    
    let result = average  > 6
    
    average = average.toFixed(2)
    
    if (result) {
    alert("Parabens, " + student + "! Sua média foi de: " + average ) 
    }
    
    else {
    alert(student + " estude para a sua rec! Sua média foi de: " + average )
    }
    
