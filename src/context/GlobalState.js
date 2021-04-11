import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//objekt za smještanje primjera transakcija da budu kao default
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}
//kreiranje contexta i smještanje objekta koji sadrži transakcije
export const GlobalContext = createContext(initialState);

//provider koji uzima stvari iz app-a (komp) u divu a koji predstavljaju childern
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
//za use reducer moramo koristiti state i dispatch, kada želimo pozvati reducer akciju moramo koristiti dispatch

    //akcije
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions, //pristupamo transakcijskom objektu
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
                    //pruža state i akcije
}