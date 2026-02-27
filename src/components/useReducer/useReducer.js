


function reducer(state , {type , payload = 1}) {
    switch(type ){
        case "increment" :
            return {count:state.count + 1};

        case "decrement" :
            return {count:state.count - 1};
            
        case "reset" :
            return {count:state.count * 0}; 

        case "multiply":
            return {count:state.count * payload}
            
            default:
                return state
     }
}

export default reducer;