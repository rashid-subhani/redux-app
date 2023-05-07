export const incNumber = (num)=>{
    return{
        type: "INCREMENT",
        payload : num
    }
}

export const decNumber = (num)=>{
    return{
        type: "DECREMENT",
        reduce : num
    }
}

export const multNumber = (num)=>{
    return{
        type: "MULT",
        multi : num
    }
}

export const divideNumber = (num)=>{
    return{
        type: "DIVIDE",
        div : num
    }
}