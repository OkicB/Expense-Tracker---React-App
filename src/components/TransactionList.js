import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
            //poziva transakcije koje su ustvari niz
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
                //za svaku transakciju želimo ispisati list stavke
                //transaction element mora znati koju specifičnu transakciju vratiti, zato je potrebno pozvati kao prop
}
