//Redux - kako specificiramo aplikacijske promjene statea
//kao odgovor na određene akcije
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }//vraća transakcije koje su već tamo i dodaje nove koje su u payloadu
        default:
            return state;
    }
}