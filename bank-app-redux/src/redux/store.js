import { createStore } from 'redux';

const initState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
        {
            id: 3,
            customerName: "Razan Aboushi",
            accountNumber: "567890",
            accountType: "Checking"
        },
        {
            id: 4,
            customerName: "Shoq Roz",
            accountNumber: "098765",
            accountType: "Investment"
        }
    ]
};


const reducer = (state = initState, action) => {
    // Handle actions here
    return state;
};

const store = createStore(reducer);

export default store;