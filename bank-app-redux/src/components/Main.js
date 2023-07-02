import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const accounts = useSelector(state => state.accounts);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Accounts</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">Customer Name</th>
            <th className="p-2 border">Account Number</th>
            <th className="p-2 border">Account Type</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.id}>
              <td className="p-2 border">{account.customerName}</td>
              <td className="p-2 border">{account.accountNumber}</td>
              <td className="p-2 border">{account.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
