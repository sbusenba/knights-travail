const knightMoves = require("./knightMoves")
const knightView = require("./knightView")
import './style.css'



let body = document.querySelector(".container")
let x1 = null
let y1 = null
let x2 = null
let y2 = null
let array =[];

function clearBoard (){
    while (body.firstChild){
        body.removeChild(body.firstChild)
    }
    console.log('board cleared')
}


let clickHandler = (e)=>{
    let xClicked = parseInt(e.target.getAttribute('data-x'))
    let yClicked = parseInt(e.target.getAttribute('data-y'))
    if ((x1 === null)&&(y1===null)){
        console.log('1st click')
        x1 = xClicked 
        y1 = yClicked
        let marker = document.createElement('div')
        marker.style.backgroundColor= "white"
        marker.style.borderRadius="15px"
        marker.style.height = "30px"
        marker.style.minWidth = "30px"
        marker.style.display = "flex"
        marker.style.alignItems = "center";
        marker.style.justifyContent = "center"
        marker.style.flex = 0;
        marker.innerText ='0';
        e.target.appendChild(marker)

    } else if ((x2===null)&&(y2===null)){
        console.log('second click')
        x2 = xClicked 
        y2 = yClicked
        array = knightMoves([x1,y1],[x2,y2])
        console.log (`found a path with ${array.length-1} moves`)
        array.forEach((move,index)=>{
            if (index === 0) {console.log("start: "+move)} else {
        console.log(`move ${index}: `+move)}
        })
        clearBoard()
        body.appendChild(knightView(array))
        document.querySelectorAll('.cell').forEach((cell)=>{
            cell.addEventListener('click',clickHandler)
        })
    } else if ((x1 !== null)&&(x2 !== null)){
        console.log('third click')
        x1 = null
        y1 = null
        x2 = null
        y2 = null
        array = []
        clearBoard()
        body.appendChild(knightView([]))
        document.querySelectorAll('.cell').forEach((cell)=>{
            cell.addEventListener('click',clickHandler)
        })

    }
    console.log(`click recorded ${x1},${y1}=>${x2},${y2}`)
}

body.appendChild(knightView([]))
document.querySelectorAll('.cell').forEach((cell)=>{
    cell.addEventListener('click',clickHandler)
})



