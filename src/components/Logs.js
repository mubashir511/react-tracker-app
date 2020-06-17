import React, { useContext } from 'react'
import { GlobalContext } from "../components/context/GlobalState"
import Transaction from './Transaction'


function Logs() {
    const { transactions } = useContext(GlobalContext)
    // console.log(transactions)

    return (
        <div id="transaction-history">
            <h3>History</h3>
            <hr/>
            <ul id="transaction-list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}

export default Logs
