import React from 'react';


const Home = () => {
    const clickhandler = (e) => {
        const token = localStorage.getItem('auth-token')
        if (token) {
            localStorage.clear()
        }
        window.location.href = '/';
    }
    return (
        <React.Fragment>
            <button className="btn btn-danger" onClick={clickhandler} style={{ float: 'right', marginRight: '40px' }}>Logout</button>
            <h1>Wellcome to Home Page</h1>
            <div className="para">
                <p>token Successfully Stored in localStorage</p>
            </div>

        </React.Fragment>
    );
};

export default Home;