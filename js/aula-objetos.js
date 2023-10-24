const edereco = {
    rua: {
        logradouro: "Rua",
        nome: 'dos Bobos'
    },
    numero: 0,
    cep: '12665-320'
}

const pessoa = { // objeto
    nome: 'Renan Cavichi', //propriedade nome, valor 'Renan Cavichi'
    idade: 39,
    endereco: edereco,
    ola: function () {return `Olá ${this}`}
}

const joao = pessoa
joao.nome = 'João'
joao.idade = 38

//console.log(pessoa.ola())

pessoa.idade = 40 // alterei o valor de uma propriedade do objeto
pessoa.cidade = 'Caragua' // adicionei uma nova propriedade no objeto

// console.log(pessoa.idade) // exibindo uma propriedade do objeto pessoa
// console.log(`Bem-vindo ${pessoa.nome}`)

// console.log(pessoa) // exibindo o objeto completo

// delete pessoa.cidade // remove uma propriedade
// console.log(pessoa)
// console.log(pessoa.endereco.rua.nome)
//console.log(pessoa.ola("João"))
// console.log(typeof pessoa)

const produto = {
    marca: 'Sony',
    peso: '2kg',
    nome: 'Caixa de Som',
    caracteristicas: {
        dimensoes: {
            largura: '10 cm',
            altura: '20 cm',
            profundidade: '30 cm'
        },
        decibeis: '20 db'
    }
}

// const nome = produto.nome
// const peso = produto.peso
// const marca = produto.marca

const { marca, peso, nome } = produto 

const produtinho = { marca, peso, nome, material: 'plastico' }

const {decibeis} = produto.caracteristicas

console.log(produtinho)

// console.log(nome)
// console.log(peso)
// console.log(marca)
// console.log(produto)
// console.log("A largura é " + produto.caracteristicas.dimensoes.largura)

const extraProduto = {
    tamanho: 'grande',
    tipo: 'eletronico',
    material: 'titanio',
    "01 carga": 10
}

const newProd = {...extraProduto}

console.log(extraProduto)

const produtao = { ...produtinho, ...extraProduto, ...produto.caracteristicas }

console.log(produtao)

const preco = "R$ 9934,00"

//Atividade Objetos

const usuario = {
    "nome-completo": "Renan",
    "02 idade": 39,
    email: "renancavichi"
}

const endereco = {
    rua: "Rua Dez",
    numero: 0,
    cep: '12665-320'
} 

const cartao = {
    nome: "RENAN C",
    numero: "21313123123",
    cvv: '456',
    validade: '10/24'
}

const compra = {
    ...usuario,
    ...endereco,
    payment: cartao,
    valor: "R$ 200,00"
}

console.log(compra)

const errors = {
    message: "Dados inválidos",
    fields: {
        name: [
            "Nome é requerido",
            "Nome deve ter mais de 3 caracteres" 
        ],
        password: [
            "A senha deve ter um caractere minúsculo",
            "A senha deve ter um caractere maiúsculo",
            "A senha deve ter um caractere especial"
        ]
    }
}
if(errors?.fields?.name){
    console.log(errors.fields.name[0])
}

