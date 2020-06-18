import React from 'react'
import Header from './Header'
import CurrentBalance from './CurrentBalance'
import IncomeAndExpense from './IncomeAndExpense'
import Logs from './Logs'
import AddTransaction from './AddTransaction'
import GlobalProvider from '../components/context/GlobalState'

import "../stylesheet.css"

function ExpenseTracker() {

    return (
        <GlobalProvider>
            <Header />
            <CurrentBalance />
            <IncomeAndExpense />
            <Logs />
            <AddTransaction />
        </GlobalProvider>
    );
}

export default ExpenseTracker
