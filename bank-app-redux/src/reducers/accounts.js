import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [
    {
      id: 1,
      customerName: 'Israa Othman',
      accountNumber: '123456',
      accountType: 'Savings',
    },
    {
      id: 2,
      customerName: 'Ahmad Zahran',
      accountNumber: '987654',
      accountType: 'Student accounts',
    },
  ],
  numberOfAccounts: 2,
};



const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      const newAccount = action.payload;
      state.accounts.push(newAccount);
      state.numberOfAccounts++;
    },
    deleteAccount: (state, action) => {
      const accountId = action.payload;
      state.accounts = state.accounts.filter((account) => account.id !== accountId);
      state.numberOfAccounts--;
    },
  },
});





export const { addAccount, deleteAccount } = accountsSlice.actions;

export default accountsSlice.reducer;
