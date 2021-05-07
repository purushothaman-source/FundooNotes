const initialState = {
    data:[],
}

const reducer =(state=initialState,action) =>{
    console.log('reducer',action);
    switch (action.type) {
        case "GETNOTE":
            return {
                ...state,
                data : [...action.payload]
            };                
        default:
            return state;                

    }
}
export default reducer;