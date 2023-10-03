// const o valor não pode ser alterado
const nome = 'Renan'
const ligado = false

// let o valor pode ser alterado mas não pode ser redeclarado
let idade = 39
// let idade = 50 (Daria erro se tentar declarar novamente)
idade = 10

// var permite redeclarar a variável mas não é recomendado
var profissao = 'Programador'
var profissao = 'Analista'

console.log(nome, idade, profissao)

// if else usando bloco de código {}

if(idade < 25){
    console.log('Jovem')
} else{
    console.log('Adulto')
}

// if else sem bloco para uma única instrução
if(idade < 25)
    console.log('Jovem')
else
    console.log('Adulto')

// operador ternário
ligado ? console.log('Ligado') : console.log('Desligado')

//Concatenação de Strings
console.log('Meu nome é <div onclick="alert('+"'"+'teste'+"'"+')">' + nome + ' e tenho ' + idade + ' anos')

//Template String
console.log(`Meu nome é <div onclick="alert('teste')"> ${nome} e à tenho ${idade} anos`)
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

//Funções
function verificaIdade(){
    const inputIdade = document.getElementById('txt-idade') //pega o elemento input
    const pResultado = document.getElementById('resultado')
    const idade = inputIdade.value //pega o valor do input
    console.log(inputIdade.value) 
    if(idade < 25)
        pResultado.innerHTML = pResultado.innerHTML + '<span style="color: #ff4900">Jovem</span>' //
    else
        pResultado.innerHTML = '<span style="color: #ff4900">Adulto</span>'
}



