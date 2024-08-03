import { useState } from 'react'
import axios from 'axios'
import './signup.css'
import { Link } from 'react-router-dom';
function Signup() {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const register = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/addregister1', { data })
            .then((res) => alert(res.data.msg))
    }
    const sin = () => {
        { window.location.href = '/' }

    }
    return (
        <div>
            {/* <div className='signup-container'> */}
                <h1 style={{ color: 'black',  marginLeft: '650px' }}>SignForm</h1>
                <form className='signup' onSubmit={register}>
                    <label>First name:</label>
                    <input type="text" placeholder="enter your first name" value={data.firstname} onChange={(e) => { setData({ ...data, firstname: e.target.value }) }}></input><br /><br />
                    <label>Last name:</label>
                    <input type="text" placeholder="enter your last name" value={data.lastname} onChange={(e) => { setData({ ...data, lastname: e.target.value }) }}></input><br /><br />
                    <label>Email :</label>
                    <input type="email" placeholder="enter your email" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }}></input>
                    <br /><br />
                    <label>Password:</label>
                    <input type="password" placeholder="enter your password" value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }}></input>
                    <br /><br />
                    {/* <button id='but'>sign up</button> */}
                    <button id='but' onClick={sin}>sign in</button>
                </form>
            {/* </div> */}
        </div>
    )
}
export default Signup;