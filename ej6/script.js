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
    ctx.stroke()
    ctx.closePath()

}

function drawRect(posX,posY,width,height,color){

    ctx.beginPath()
    ctx.fillStyle = color
    ctx.rect(posX,posY,width,height)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()

}

// ej 1

drawCircle(150,150,100,'yellow')
drawCircle(120,130,10,'white')
drawCircle(180,130,10,'white')
ctx.beginPath();
ctx.arc(150, 150, 70, 0, Math.PI); // Boca (en el sentido de las agujas del reloj)
ctx.stroke();
ctx.closePath()

// ej 3

drawRect(300,50,260,200,'white')
drawCircle(365,100,40,'blue')
drawCircle(365,200,40,'red')
drawCircle(495,100,40,'green')
drawCircle(495,200,40,'yellow')

drawRect(300,350,260,200,'white')
drawRect(320,370,220,160,'purple')
drawCircle(430,450,40,'white')