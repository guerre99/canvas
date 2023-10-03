/*
// bucle vertical

    for(i=0;i<9;i++){
      if(i%2===0){
        console.log('B')
      }
      else console.log('N')
    }

// bucle horizontal

    let linea='';
    for(j=0;j<9;j++){
      if(j%2===0){
        linea+='B'
    }
      else linea+='N'
    }
    console.log(linea)

// bucle tablero

for(i=0;i<8;i++){
    if(i%2===0){
        let linea1='';
        for(j=0;j<8;j++){
          if(j%2===0){
            linea1+='B'
        }
          else linea1+='N'
        }
        console.log(linea1)
    }
    else {let linea2='';
    for(k=0;k<8;k++){
      if(k%2===0){
        linea2+='N'
    }
      else linea2+='B'
    }
    console.log(linea2)
  }
}
*/

/*-------------------------------------------------------------------------------------------------------*/

// Obtener el contexto del canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Redimensionar el canvas
canvas.width = innerWidth
canvas.height = innerHeight

function drawRect(posX,posY,width,height,color){

  ctx.beginPath()
  ctx.fillStyle = color
  ctx.rect(posX,posY,width,height)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

}


/*

function tablero(){
    for(i=0;i<8;i++){
        let posX = 0
        let posY = 0
        let altura = 100
        if(i%2===0){
            for(j=0;j<8;j++){
            if(j%2===0){
                ctx.beginPath()
                ctx.fillStyle = 'black'
                ctx.fillRect(posX,posY,altura,altura)
                ctx.closePath()
                posX+=100
            }
            else if(j%2!==0) {
                ctx.beginPath()
                ctx.fillStyle = 'white'
                ctx.fillRect(posX,posY,altura,altura)
                ctx.closePath()
                posX+=100
            }
            posY+=100
          }
          
        }
        else if(i%2!==0){
          for(k=0;k<8;k++){
            if(k%2===0){
              ctx.beginPath()
              ctx.fillStyle = 'white'
              ctx.fillRect(posX,posY,altura,altura)
              ctx.closePath()
              posX+=100
            }
            else if(k%2!==0) {
              ctx.beginPath()
              ctx.fillStyle = 'black'
              ctx.fillRect(posX,posY,altura,altura)
              ctx.closePath()
              posX +=100
            }
            posY+=100
          }    
        }
    }
}

tablero() */


let ancho = canvas.width/8


function tablero(){
  for(i=0;i<8;i++){
    for(j=0;j<8;j++){
    let posX = ancho * i
    let posY = ancho * j
    if((i+j)%2===0){
      drawRect(posX,posY,ancho,ancho,'white')
    }
    else {
      drawRect(posX,posY,ancho,ancho,'black')
    }
    posY+=ancho
    }
  }
}

tablero()