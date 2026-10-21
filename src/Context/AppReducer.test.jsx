import AppReducer from './AppReducer';

describe('AppReducer', () => {
    const existingTransaction = { id: 1, text: 'Groceries', amount: -25 };
    const state = { transactions: [existingTransaction] };

    it('adds a transaction to the beginning of the list', () => {
        const newTransaction = { id: 2, text: 'Salary', amount: 1000 };

        expect(AppReducer(state, {
            type: 'ADD_TRANSACTION',
            payload: newTransaction
        })).toEqual({
            transactions: [newTransaction, existingTransaction]
        });
    });

    it('deletes the transaction with the given id', () => {
        expect(AppReducer(state, {
            type: 'DELETE_TRANSACTION',
            payload: existingTransaction.id
        })).toEqual({ transactions: [] });
    });

    it('returns the current state for an unknown action', () => {
        expect(AppReducer(state, { type: 'UNKNOWN_ACTION' })).toBe(state);
    });
});
