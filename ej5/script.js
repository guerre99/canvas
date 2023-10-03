// Obtener el contexto del canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Redimensionar el canvas
canvas.width = innerWidth
canvas.height = innerHeight

function drawCircle(posX,posY,radius,color){
    
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(posX,posY,radius,0,Math.PI*2)
    ctx.fill()
    ctx.closePath()

}

drawCircle(100,100,40,'blue')

function drawRect(posX,posY,width,height,color){

    ctx.beginPath()
    ctx.fillStyle = color
    ctx.fillRect(posX,posY,width,height)
    ctx.closePath()

}

drawRect(300,300,100,100,'black')