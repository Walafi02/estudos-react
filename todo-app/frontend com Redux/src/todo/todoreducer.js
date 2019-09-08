const INITAL_STATE = {
    description: '',
    list: []
}

export default (state = INITAL_STATE, action) => {
    switch(action.type){
        case "DESCRIPTION_CHARGED":
            return { ...state, description: action.payload }
        
        case 'TODO_SEARCHD':
            return { ...state, list: action.payload.data}

        case 'TODO_ADDED':
            return { ...state, description: ''}
            
        default:
            return state
    }
}