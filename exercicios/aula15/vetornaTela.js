let valores = [3, 7, 8, 12, 29, 24]

    console.log(valores)
/* for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
*/
    for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
    }
    let posi = valores.indexOf(3)
    if (posi == -1) {
        console.log(`O valor não foi encontrado`)
    } else {
        console.log(`O valor 12 está na posição ${posi}`)
    }
    