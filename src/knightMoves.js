const node = require("./node")

let knightMoves =([x,y],[finalX,finalY]) =>{
    startNode = new node([x,y],[])
    let path = [startNode]
    let parents = [startNode]
    let children =[]
    let offsets = [[-1,2],[1,2],[2,1],[2,-1],
                    [1,-2],[-1,-2],[-2,-1],[-2,1]]
    let found = false
    let finalNode = null
    let visited=[[false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false]]
    while (found === false){
        parents.forEach((parent)=>{
            offsets.forEach((offset)=>{
                let newMove = new node([(offset[0] + parent.x),
                                    (offset[1] + parent.y)],
                                    [...parent.path,parent]) 
                
                if (newMove.onBoard()&&(visited[newMove.x][newMove.y] != true)){

                    console.log('adding new move ')
                    parent.children = [...parent.children,
                                            newMove]
                    children.push(newMove)
                    visited[newMove.x] [newMove.y] = true
                }
                if (newMove.x == finalX && newMove.y == finalY){
                    found = true;
                    finalNode = newMove
                    console.log("found it!")
                }
            })
        })
        if (found === false){
        parents = children
        children = []
        }
    }
    console.table(finalNode)
    let finalPath = []
    finalNode.path.forEach((node)=>{finalPath.push([node.x,node.y])})
    finalPath.push([finalNode.x,finalNode.y])
    return finalPath;
}

module.exports= knightMoves;