// code your solution here
function superbowlWin(obj){
    const win = obj.find((el, id, arr)=>{
        return (el.result === "W" )
    })
     if (win){ return win.year}
}