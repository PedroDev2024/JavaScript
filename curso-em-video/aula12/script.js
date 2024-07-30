function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
 var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 5 && hora <12){
    //Bom Dia!!
    img.src = 'img/imagemmanha.jpg'
    document.body.style.background = '#fe985a'
} else if (hora >= 12 && hora <18) {
    //Boa tarde
    img.src = 'img/imagemtarde.jpg'
    document.body.style.background = '#52a0de'
} else {
    //Boa noite
    img.src = 'img/imagemnoite.jpg'
    document.body.style.background = '#000e1b'
}
}