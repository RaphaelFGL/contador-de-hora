function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#FFE4B5'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#ECD690'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#111111'
    }
}


