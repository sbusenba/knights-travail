let knightView = (array)=>{
    let cellNo = 0;
    let board = document.createElement('div')
    board.classList.add("board")
    board.style.height = "800px"
    board.style.width = "800px"
    board.style.flexDirection = "column";
    for (let x=0;x<8;x++){
        cellNo++;
        let row = document.createElement('div')
        row.classList.add('row')
        row.style.height = "100px"
        row.style.flexDirection = "row"
        row.style.flex= "0"
        row.style.display = "flex"
        for (let y=0;y<8;y++){
            cellNo++;
            let cell = document.createElement('div')
            cell.classList.add("cell")
            cell.style.flex = "1"
            cell.style.height = "100px"
            cell.style.width = "100px"
            cell.style.display = "flex"
            cell.style.alignItems = "center"
            cell.style.justifyContent = "center"
            cell.setAttribute("data-x",x)
            cell.setAttribute("data-y",y)
            if (cellNo %2 ==1){
                cell.style.backgroundColor = "black"
            } else {
                cell.style.backgroundColor = "grey"
            }
            row.appendChild(cell)
        }
        board.appendChild(row)
    }
    array.forEach((move,index)=>{
        let cell = board.querySelector(`.cell[data-x="${move[0]}"][data-y="${move[1]}"]`)
        let textBox = document.createElement("div")
        textBox.style.backgroundColor= "white"
        textBox.style.borderRadius="15px"
        textBox.style.height = "30px"
        textBox.style.minWidth = "30px"
        textBox.style.display = "flex"
        textBox.style.alignItems = "center";
        textBox.style.justifyContent = "center"
        textBox.style.flex = 0;
        textBox.innerText = index;
        cell.appendChild(textBox)
    })
    
    return board;
}
module.exports = knightView