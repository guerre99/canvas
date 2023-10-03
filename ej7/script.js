    //--------------------- STEP 7 -------------------//

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight


function randomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) 
}

function ball(color, position, radius) {
	ctx.beginPath()
	ctx.fillStyle = color

	ctx.arc(position.x, position.y, radius, 0, Math.PI * 2)

	ctx.fill()

	ctx.closePath()
}

function rectangle(color,position,width,height) {

    ctx.beginPath()

    ctx.fillStyle = color

    ctx.rect(position.x ,position.y ,width ,height)

    ctx.fill()

    ctx.closePath()

}   


function drawRandomShapes(count) {

for (let i = 1; i <= count; i++) {
	ball(
		`rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0,255)},${Math.random()})`,
		{
			x: randomInt(0, innerWidth),
			y: randomInt(0, innerHeight),
		},
		randomInt(5, 100)
        
	)

        rectangle(
            `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0,255)},${Math.random()})`,
            {
                x: randomInt(0, innerWidth),
                y: randomInt(0, innerHeight),
                
            },
            randomInt(50, 200),
            randomInt(50, 200),
        )

}
}

drawRandomShapes(5)