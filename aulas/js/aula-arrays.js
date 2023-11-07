const numeros = [10, 20, 35, 8, 45, 56]

console.log(numeros[0])

const texts = ["ola", "oi", "beleza", "opa"] 

console.log(texts[2])

const misturado = [10, 34, "Ola", 5, "Beleza"]

console.log(misturado[3], misturado[2])

const usuario = [{
    name: "renan",
    email: "renancavichi@gmail.com"
}, 10, "Ola"]

console.log(usuario[0].email)

const renan = {
    name: "renan",
    email: "renancavichi@gmail.com"
}

const pessoas = [renan, 10, "teste"]

const usuarios = [
    {
        id: 1,
        name: "renan",
        email: "renancavichi@gmail.com"
    },
    {
        id: 2,
        name: "joao",
        email: "joao@gmail.com"
    },
    {
        id: 3,
        name: "maria",
        email: "maria@gmail.com"
    },
]

const maria = usuarios[2]
console.log(maria.email)

const [ user0, , user2 ] = usuarios
 
console.log(user2)

const matriz = [[23, 56], [45, 23, [45, 56, 100]], [10, 45, [5, 78]]]

console.log(matriz[2][2][0])

console.log(matriz[1][2][2])

for(let i = 0; i < numeros.length; i++){
    console.log("Valor de i: ", i)
    console.log(numeros[i])
}

numeros.map((numero, index)=>{
    console.log("Valor de i: ", index)
    console.log(numero)
})

numeros.push(87)
numeros.push(98)

console.log(numeros)