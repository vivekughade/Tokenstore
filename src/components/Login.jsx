import React,{useState} from 'react';
import Bar from "./Bar";
import { Redirect, useHistory } from 'react-router-dom';
const Login = () => {
    const initialState = {
        username:'',
        password:'',
        isLoggedIn:false
    }
    const [state, setState] = useState(initialState)
const changehandler = (e) =>{
    setState(s=>({
        ...s,
        [e.target.id]:e.target.value
    }))
}
const history = useHistory()

const submithandler = (e) =>{
    e.preventDefault()
    console.log("submitted value is here : ",state);
    const url = "https://reqres.in/api/login"
    const method = "POST"

    fetch(url,{
        method:method,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            email:state.username,
            password:state.password
        })
    }).then(r=>r.json()).then(json=>{
        const {token} = json
        if(token){
            setState(s=>({
                    ...s,
                    isLoggedIn:true
            }))
            localStorage.setItem("auth-token",token)
        window.location.href = '/home';
        }
        else{
            setState(s=>({
                ...s,
                isLoggedIn:false
        }))
        }
            
    }).catch(err=>{
        console.log(err)
    })
    setState(s=>({...s,...initialState}))

}

       
    return (
        <>
        <div className="box">
        <div className="para">
        <h1>School</h1>
        <p>Nirmala Higher Secondary School Aluva, established in 1962 is owned and managed by the congregation, Sisters of the Destitute (SD Sisters), St.Mary’s Province, Chunangamvely. Nirmala HSS aims at imparting quality education to the budding youngsters of our society by providing value based education that creates confident, competent and morally mature individuals who will always be a credit to the society at large.</p>

        </div>
        <div class="container">
            <div class="header">
                <Bar/>
            </div>

        <form id="form" class="form">
                
                <label for="username">Username</label>
                <input type="text" value={state.username} onChange={changehandler}   id="username"/>
               
                
                <label for="password">Password</label>
                <input type="password" value={state.password} onChange={changehandler}  id="password"/>   
                
            <button id="btn" className="btn btn-success" onClick={submithandler}>submit</button>
        </form>
 
    </div>	
    </div>
        </>
    )
}

export default Login;