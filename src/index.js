const knightMoves = require("./knightMoves")
const knightView = require("./knightView")
console.log('starting')
let body = document.querySelector("body")
body.appendChild(knightView(knightMoves([1,1],[1,2])))


