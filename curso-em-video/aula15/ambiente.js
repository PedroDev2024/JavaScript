let num = [5, 8, 2, 9, 3]
num.push(6)
num.sort()
num.push(1)
console.log(`nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posicões.`)
console.log(`${num[0]}`) 
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)
let pos2 = num.indexOf(5)
if (pos2 == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor esta na posição ${pos2}`)
}
