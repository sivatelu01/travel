import './signin.css'
import Signup from './signup'
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom';
function Signin(){
    const[data,setData]=useState({
        email:'',
        password:''
    })
    const login=(e)=>{
        e.preventDefault();
       axios.post('http://localhost:5000/addlogin1',{data})
       .then((res)=>{if(res.data.msg==="login"){window.location.href='/homepage'}else if(res.data.msg!=="please"){alert(res.data.msg)}else{alert("please fill the details")}
    })
       
    }
    return(
        <div className='signin'> 
        <div className='sign'>
            <h1><center>LOGIN</center></h1>
            <br/>
            <form  onSubmit={login}>
                <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" placeholder="enter your email" onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
                <br/><br/>
                <label>Password:</label>
                <input type="password" onChange={(e)=>{setData({...data,password:e.target.value})}}></input>
                <br/><br/>
                <button id="but">login</button><br/><br/>
                <Link to={'/signup'} ><button id="buttn">signup</button></Link>
            </form>
            </div>
        </div>
    )
}
export default Signin