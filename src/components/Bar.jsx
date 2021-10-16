import React from 'react';
import { NavLink } from 'react-router-dom';
const Bar = () => {
    return (
        <>
        <div className="bar">
            <NavLink exact className="n" to="/">LOGIN</NavLink>
            <NavLink className="n"to="/signup">SIGNUP</NavLink>
        </div>
            
        </>
    );
};

export default Bar;