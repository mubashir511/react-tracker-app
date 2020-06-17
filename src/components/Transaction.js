import React, { useContext } from 'react'
import { GlobalContext } from "../components/context/GlobalState"

function Transaction({ transaction }) {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <li id={transaction.amount > 0 ? "log-income" : "log-expense"}>
            <button id="delete-log" onClick={() => deleteTransaction(transaction.id)}>x</button>
            <div id="text-amount">
                <span id='log-text'>{transaction.text}</span>
                <span id="log-amount">{sign}{Math.abs(transaction.amount)}$</span>
            </div>
        </li>
    )
}

export default Transaction
