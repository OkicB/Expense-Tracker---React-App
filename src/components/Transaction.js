import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
                            //destrukcija za prop
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
        </li>
    )//za sign postavlja se math.abs da uvijek bude apsolutna vrijednost da ne bi postavljala dupli znak
    //za className listu ukoliko je pozitivan da se postavi u plus klasu za css ili minus
}
