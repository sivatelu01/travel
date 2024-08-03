import {useState} from 'react'
import axios from 'axios'
const Bookingform=()=>{
    const [Bookingformdata,setBookingformdata]=useState({
        'name':'',
        'email':'',
        'password':'',
        'destination':'',
        'date':'',
        'tickets':'',
    })
    const submit=(e)=>{
        e.preventDefault();
        console.log(Bookingformdata)
        axios.post('http://localhost:5000/addBookingform',{Bookingformdata}).then((res)=>console.log(res.data));
    }

    return(
        <center>
            <div className="form" >
                <form onSubmit={submit} style={{color:"black"}}>
                    {/* <h1>User Form</h1>
                    <img src={pic} alt="img"/>
                    <br></br> */}
                    <br></br>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={(e)=>setBookingformdata({...Bookingformdata,name:e.target.value})}></input>
                    <br></br>
                    <br></br>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={(e)=>setBookingformdata({...Bookingformdata,email:e.target.value})}></input>
                    <br></br>
                    <br></br>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(e)=>setBookingformdata({...Bookingformdata,password:e.target.value})}></input>
                    <br></br>
                    <br></br>
                    <label>Destination:</label>
                    <input type="text" name="destination" onChange={(e)=>setBookingformdata({...Bookingformdata,destination:e.target.value})}></input>
                    <br></br>
                    <br></br>
                    <label>Date:</label>
                    <input type="date" name="date" onChange={(e)=>setBookingformdata({...Bookingformdata,date:e.target.value})}></input>
                    <br></br>
                    <br></br>
                    <label>Number of Tickets:</label>
                    <input type="number" name="tickets" onChange={(e)=>setBookingformdata({...Bookingformdata,tickets:e.target.value})}></input>
                    <br></br>
                    <br></br>
                    <input type="submit" value='submit'style={{backgroundColor:"#0492C2",color:"white",border:"none"}}></input>
                </form>

            </div>
        </center>
    )
}
export default Bookingform;