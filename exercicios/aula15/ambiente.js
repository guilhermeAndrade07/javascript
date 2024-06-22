let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
num[5] = 12

console.log(num)
console.log(`Nosso vertor tem ${num.length} posições, com os seguintes elementos ${num}.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)