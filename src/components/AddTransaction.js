import React, { useState, useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

function AddTransaction() {

    const [Transaction, setTransaction] = useState({ text: "", amount: 0 })
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: Transaction.text,
            amount: +Transaction.amount
        }
        console.log(newTransaction)
        addTransaction(newTransaction)
    }

    return (
        <div id="add-transaction">
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div id="transaction-text">
                    <label htmlFor="text">Text</label><br />
                    <input type="text" id="text" placeholder="Enter text..." value={Transaction.text} onChange={e => setTransaction({ ...Transaction, text: e.target.value })} />
                </div>
                <div id="transaction-amount">
                    <label htmlFor="amount">Amount
                    <br />
                        <span>(negative-expense, positive-income)</span>
                    </label>
                    <br />
                    <input type="number" id="amount" placeholder="Enter amount..." value={Transaction.amount} onChange={e => setTransaction({ ...Transaction, amount: e.target.value })} />
                </div>
                <button>Add Transasction</button>
            </form>
        </div>
    )

}

export default AddTransaction
