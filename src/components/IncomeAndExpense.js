import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

function IncomeAndExpense() {

    const { transactions } = useContext(GlobalContext)

    // get amount from transactions array
    const amount = transactions.map(transaction => transaction.amount)
    // calculate income
    const income = amount.filter(currentValue => currentValue > 0).reduce((total, currentValue) => total += currentValue, 0).toFixed(2)
    // calculate expense
    const expense = (amount.filter(currentValue => currentValue < 0).reduce((total, currentValue) => total += currentValue, 0) * -1).toFixed(2)

    return (
        <div id="income-expense">
            <div id="income">
                <h4>Income</h4>
                <p id="money-add">+${income}</p>
            </div>
            <div id="expense">
                <h4>Expense</h4>
                <p id="money-subtract">-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeAndExpense
