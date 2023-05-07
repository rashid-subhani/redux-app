const initialState = 5;

const multTheNumber = (state= initialState, action) => {
    switch(action.type){
        case "MULT" : return state * action.multi;
        case "DIVIDE" : return state / action.div;
        default : return state;
    }
}


export default multTheNumber;