import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from '../reducers/accounts';

const AddAccountForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAccount = {
      id: Date.now(),
      customerName,
      accountNumber,
      accountType,
    };

    dispatch(addAccount(newAccount));

    setCustomerName('');
    setAccountNumber('');
    setAccountType('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div
        style={{
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#fff',
          width: '400px',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Add Account</h2>
        <form onSubmit={handleSubmit} style={{width:"600px"}}>
          <div>
            <label>Customer Name:</label>
            <input
            className='mt-3'
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Account Number:</label>
            <input
             className='mt-3'
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Account Type:</label>
            <input
                        className='mt-3'
              type="text"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            />
          </div>
          <button
          
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Add Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAccountForm;
