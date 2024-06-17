function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = (`Agora são ${hora} horas e ${min} minutos.`)
if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'foto-manha.jpg'
    document.body.style.background = '#f1af65'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = 'foto-tarde.jpg'
    document.body.style.background = '#a8b6c6'
} else {
    //Boa noite
    img.src = 'foto-noite.jpg'
    document.body.style.background = '#071c1d'
}
}