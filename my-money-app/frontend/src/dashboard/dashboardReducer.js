const INICIAL_STATI = { summary: {credit: 0, debt: 0}}

export default function(state = INICIAL_STATI, action){
    switch(action.type){
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }

        default:
            return state
    }
}