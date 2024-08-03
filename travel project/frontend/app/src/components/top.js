import 'bootstrap/dist/css/bootstrap.min.css';
import './top.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Top() {
    return (
        <div className='background'>
            <div className="content">
                <h1 style={{ fontSize: 50 }}>TRAVEL TO EXPLORE</h1>
                <p > Travelling is an amazing way to learn a lot of things in life.<br/>
                 A lot of people around the world travel every year to many places.
                </p>
                <br />
                <Link to={'signup'}><Button className="B1">SingUp</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={'signin'}><Button className="B1">Login</Button></Link>
            </div>
        </div>
    )
}
export default Top
