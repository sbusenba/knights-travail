const knightMoves = require("./knightMoves")
const knightView = require("./knightView")
let body = document.querySelector("body")
let x1 = Math.floor(Math.random()*8)
let y1 = Math.floor(Math.random()*8)
let x2 = Math.floor(Math.random()*8)
let y2 = Math.floor(Math.random()*8)
console.log(`from ${x1},${y1} to ${x2},${y2}`)
let array = knightMoves([x1,y1],[x2,y2])

body.appendChild(knightView(array))
console.log (`found a path with ${array.length-1} moves`)
array.forEach((move,index)=>{
    if (index === 0) {console.log("start: "+move)} else {
console.log(`move ${index}: `+move)}
})


