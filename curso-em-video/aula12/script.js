function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
// var hora = data.getHours()
var hora = 3
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 5 && hora <12){
    //Bom Dia!!
    img.src = 'img/imagemmanha.jpg'
} else if (hora >= 12 && hora <18) {
    //Boa tarde
    img.src = 'img/imagemtarde.jpg'
} else {
    //Boa noite
    img.src = 'img/imagemnoite.jpg'
}
}