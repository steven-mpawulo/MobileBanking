import { create } from 'zustand'
export const useStore = create((set) => ({
    user: {
        fullName: "John Doe",
        accountBalance: 2000
    },
    transactions: [{
        date: '04/04/2024',
        amount: 100,
        description: 'trial'

    },
    {
        date: '08/04/2024',
        amount: 200,
        description: 'sample'
    },

    {
        date: '12/04/2024',
        amount: 500,
        description: 'food'
    }
],
    updateBalance: (amount) => set({ user: state.user.accountBalance - amount }),
    updateTransactions: (transaction) => set({transactions: state.transactions.unshift(transaction)})
  }))