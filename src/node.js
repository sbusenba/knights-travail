class Node {
    constructor([x,y],path){
        this.myX=x
        this.myY=y
        this.myChildren = []
        this.path = path;
    }
    onBoard = ()=>{
        if (((this.x>=0) && (this.x <8)) &&
            ((this.y>=0) && (this.y <8))) {
                return true;
            }else{
                return false;
            }

    }
    get x (){
        return this.myX
    }
    set x (newX){
        console.log(`x: ${newX}`)
        this.myX = newX
    }    
    get y (){
        return this.myY
    }
    set y (newY){
        console.log(`y: ${newY}`)
        this.myY = newY
    }
    
    get children (){
        return this.myChildren;
    }
    set children (kiddos){
        this.myChildren = kiddos
    }
    get path (){
        return this.myPath;
    }
    set path (newPath){
        this.myPath = newPath
    }
}
module.exports = Node;