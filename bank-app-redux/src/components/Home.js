import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import AddAccountForm from './AddAccountForm';


function Home() {
    return (
        <div>

            <Header />
            <Main />
            <AddAccountForm/>
            <Footer />


        </div>
    )
}

export default Home