function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Verifique um ano e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade<10) {
                //criança
                img.setAttribute('src', 'img/crianca-homem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-homem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-homem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade<10){
                //criança
                img.setAttribute('src', 'img/crianca-mulher.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            } else if (idade <50){
                //adulta
                img.setAttribute('src', 'img/adulta-mulher.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'img/idosa-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
     }
}