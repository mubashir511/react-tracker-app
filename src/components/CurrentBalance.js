import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

function CurrentBalance() {
    
    const {transactions} = useContext(GlobalContext)  
    
    // map "amount" from transcation array
    const amount = transactions.map(transaction => transaction.amount)

    // add all the amount properties in the transactions array to get "total balance"
    function totalBalance(total, currentValue) {
        return total += currentValue
    }
    const total = amount.reduce(totalBalance,0).toFixed(2)
    
    // shortcut method
    // const total = amount.reduce((acc, item)=>(acc += item),0).toFixed(2)

    return (
        <div id="current-balance">
            <h4>YOUR BALANCE</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default CurrentBalance
