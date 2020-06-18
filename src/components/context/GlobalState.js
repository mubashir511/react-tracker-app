import React, { useReducer, createContext } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}
// create global contex to send data to all the "child" components
export const GlobalContext = createContext(initialState)

// provider component
function GlobalProvider({ children }) {

    // define useReducer 
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // action : make calls to our reducer
    function deleteTransaction(id) {
        // provide object to dispatch
        dispatch({
            
            // provide type which is just a title or discription of the dispatch
            type: 'DELETE_TRANSACTION',
            
            // provide "payload" which is the data we need to send to the dispatch
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider
