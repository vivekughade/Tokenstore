import React from 'react';
import Bar from "./Bar";
const Signup = () => {
    return (
        <>
        <div className="box">
        <div className="para">
        <h1>School</h1>
        <p>Nirmala Higher Secondary School Aluva, established in 1962 is owned and managed by the congregation, Sisters of the Destitute (SD Sisters), St.Mary’s Province, Chunangamvely. Nirmala HSS aims at imparting quality education to the budding youngsters of our society by providing value based education that creates confident, competent and morally mature individuals who will always be a credit to the society at large.</p>

        </div>
        <div className="container">
        <Bar/>
            <form>
                <label for="name">Full Name</label>
                <input type="text" value=""/>
                <label for="email">Email</label>
                <input type="email" value=""/>
                <label for="number">Mobile Number</label>
                <input type="number" value=""/>
                <label for="Gender">Gender</label>
                <input type="text" value=""/>
                <label for="password">Password</label>
                <input type="password" value=""/>
                <label for="password">Password</label>
                <input type="password" value=""/>
                <button className="btn btn-success">Register</button>
                <div className="f2">
                    <p></p>Not a member Yet<a href="./Login.jsx">Login</a>
                </div>
            </form>
        </div>
        </div>
            
        </>
    );
};

export default Signup;