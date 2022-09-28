const knightMoves = require("./knightMoves")
const knightView = require("./knightView")
let body = document.querySelector("body")
let array = knightMoves([1,1],[2,6])
body.appendChild(knightView(array))
console.log (`found a path with ${array.length-1} moves`)
array.forEach((move,index)=>{
    if (index === 0) {console.log("start: "+move)} else {
console.log(`move ${index}: `+move)}
})


