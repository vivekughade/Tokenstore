import React,{useState} from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import Home from './Home';
import Login from './Login';
import Signup from './Signup';


import "./style.css"
const App = () => {
    const [state, setState] = useState({token:localStorage.getItem('auth-token')})
   const basePath = process.env.PUBLIC_URL
    return (
        <>
        <div className="img">
       
{   state.token?    
        <Switch>
            <Route  exact path={`${basePath}/home`} component={Home} />
            <Route render={()=><Redirect to={`${basePath}/home`} />} />
        </Switch>
    :
    <Switch>
            <Route exact path={`${basePath}/`} component={Login}/>
            <Route  exact path={`${basePath}/signup`} component={Signup}/>
            <Route render={()=><Redirect to={`${basePath}/`} />} />
    </Switch>

}
</div>
        </>
    );
};

export default App;