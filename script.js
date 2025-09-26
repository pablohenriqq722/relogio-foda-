function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora sao ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //dia
    img.src = 'dia.jpg'

} else if ( hora >= 1 && hora < 18){
    //tarde
    img.src = 'tarde.jpg'

} else{
    //noite 
    img.src = 'noite.jpg'  
}
}