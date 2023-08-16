#Fluxos da aplicação

[] Tipo de dado: Boolean (true | false)
[] if/else (elseif)
[] Operadores comparativos são esses 

> (maior que)
< (menor que)
= (maior ou igual a)
<= (menor ou igual a)
== (igual a)
!= (diferente de)

Caminhos lógicos baseado em algum dado ou informação

#Boas práticas na programação
Não repetir código


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
