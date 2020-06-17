
function AppReducer(initialState, action) {
    
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...initialState, transactions: initialState.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...initialState, transactions: [action.payload, ...initialState.transactions]
            }
        default:
            return initialState
    }
}

export default AppReducer
