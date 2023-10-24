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
const age = idade < 25 ? 'Jovem' : 'Adulto'

//Concatenação de Strings
console.log('Meu nome é <div onclick="alert('+"'"+'teste'+"'"+')">' + nome + ' e tenho ' + idade + ' anos')

//Template String
console.log(`Meu nome é <div onclick="alert('teste')"> ${nome} e à tenho ${idade} anos`)
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

//funções
function verificaIdade(){
    const inputIdade = document.getElementById('txt-idade') //pega o elemento input
    const pResultado = document.getElementById('resultado')
    const idade = inputIdade.value //pega o valor do input 
    if(idade < 25)
        pResultado.innerHTML = pResultado.innerHTML + ' <span style="color: #ff4900">Jovem</span>' //adiciona um texto no elemento final do p
    else
        pResultado.innerHTML = '<span style="color: #ff4900">Adulto</span> ' + pResultado.innerHTML //adiciona um texto no elemento inicio do p
}

function addProduct(){
    const inputName = document.getElementById('txt-name')
    const inputPrice = document.getElementById('txt-price')
    const inputPhoto = document.getElementById('txt-photo')
    const divProductList = document.getElementById('product-list')
    // add novo produto no array
    divProductList.innerHTML = ''
    loadProducts()
    inputName.value = null // ou ''
    inputPrice.value = ''
    inputPhoto.value = null
}

// Exemplo usando função arrow
// const addProduct = () => {
//     const inputName = document.getElementById('txt-name')
//     const inputPrice = document.getElementById('txt-price')
//     const inputPhoto = document.getElementById('txt-photo')
//     const divProductList = document.getElementById('product-list')
//     divProductList.innerHTML += `
//         <div class="card-product">
//           <img src="${inputPhoto.value}" alt="${inputName.value}">
//           <div>
//             <h5>${inputName.value}</h5>
//             <span>R$ ${inputPrice.value}</span>
//           </div>
//         </div>
//     `
//     inputName.value = null // ou ''
//     inputPrice.value = ''
//     inputPhoto.value = null
// }

// exemplo função anônima sendo atribuída a uma constante
const testeFuncAnonima = function (){
    console.log('função anônima')
}

// execução da função
testeFuncAnonima()

// exemplo função arrow sendo atribuída a uma constante
const funcArrow = () => {
    console.log('função arrow')
}

// execução da função
funcArrow()

// exemplo função arrow com dois parâmetros de entrada e retorno
const soma = (value1, value2) => {
    const resultado = value1 + value2
    return resultado 
}

// exemplo função arrow com um parâmetro de entrada e retorno
const soma10 = value1 => value1 + 10

// execução da função
console.log(soma10(5))

// res recebe o retorno da função
let res = soma(20, 10)

// usando a constantes como entrada da função
const v1 = 10
const v2 = 8
res = soma(v1, v2)
console.log(res)

const var1 = '10'
console.log(parseInt(var1))

//const greetings = (name) => { return `Olá ${name}, seja bem vindo!`}
const greetings = name => `Olá ${name}, seja bem vindo!`
console.log(greetings('Renan'))


const produtos = [
    {
        nome: "Mochila",
        preco: "R$ 330,00",
        foto: "https://imaginarium.vtexassets.com/arquivos/ids/9909618/Mochila-Laptop-Strap-Caramelo-e-Bordo.jpg?v=638288621835570000"
    },
    {
        nome: "Legal Pro",
        preco: "R$ 230,00",
        foto: "https://classecouro.com.br/cdn/shop/products/1961-3B_A_1000x.jpg?v=1674147700"
    },
    {
        nome: "Ómiaranha",
        preco: "R$ 330,00",
        foto: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTREx3c_ajowyk3gDcSZcmi30lOZXkchinR3wpeo7ACFOLf9_ke-dXXmB84vU9IyrkLGRniorNGvodaYm68YXKCwiXAzRnWU4QtDZRQ99In4vH6yywTAzjtW9ZJBBl11ggkcxADZLc&usqp=CAc"
    },
    {
        nome: "Ómaranha",
        preco: "R$ 330,00",
        foto: "https://static.riachuelo.com.br/RCHLO/13729144001/square/e3fd9d5159dd15a90b099e6c183e0619370ef1bd.jpg?imwidth=480"
    }
]

const loadProducts = () => {
    const divProductList = document.getElementById('product-list')
    
    produtos.map((produto)=>{
        divProductList.innerHTML += `
        <div class="card-product">
          <img src="${produto.foto}" alt="${produto.nome}">
          <div>
            <h5>${produto.nome}</h5>
            <span>R$ ${produto.preco}</span>
          </div>
        </div>
    `
    })
    
}