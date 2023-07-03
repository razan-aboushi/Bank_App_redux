import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount } from '../reducers/accounts';
import '../App.css';

const Main = () => {
  const accounts = useSelector((state) => state.accounts.accounts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAccount(id));
  };

  return (
    <main className="d-flex justify-content-center mt-5">
      <table className="accounts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Account Number</th>
            <th>Account Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.customerName}</td>
              <td>{account.accountNumber}</td>
              <td>{account.accountType}</td>
              <td>
                <button
                  onClick={() => handleDelete(account.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;
