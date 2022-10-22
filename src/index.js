const knightMoves = require("./knightMoves")
const knightView = require("./knightView")
let body = document.querySelector("body")
let x1 = math.round(Math.random()*8)
let y1 = math.round(Math.random()*8)
let x2 = math.round(Math.random()*8)
let y2 = math.round(Math.random()*8)
let array = knightMoves([x1,y1],[x2,y2])

body.appendChild(knightView(array))
console.log (`found a path with ${array.length-1} moves`)
array.forEach((move,index)=>{
    if (index === 0) {console.log("start: "+move)} else {
console.log(`move ${index}: `+move)}
})


