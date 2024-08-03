import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Container, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './homepage.css';
import logo from './images/logo.jpg';
function Homepage() {
  return (
    <div>
      <Navbar  fixed="top">
        <Container>

          <Navbar.Brand style={{ marginLeft: '-5%' }}><img
              src={logo}
              alt="Travel Agency Logo"
              width="50" // Set the width and height according to your design
              height="50"
              style={{ borderRadius: '50%',}} />&nbsp;&nbsp;<span className="logo-title" style={{fontSize:"30px"}}>Travel Explorer</span></Navbar.Brand>
          <Nav>
            <Nav.Link href="/homepage" className="white-links">Home</Nav.Link>&nbsp;&nbsp;
            <Nav.Link href="/about" className="white-links">About</Nav.Link>
            {/* <NavLink href="/contact" className="white-links">Contact</NavLink> */}
          </Nav>
        </Container>
      </Navbar>
      <div className="background-image">
        <div className="background-overlay"></div>
        <h1 className="responsive-text" style={{color:"white",fontSize:"60"}}>TRAVEL TO EXPLORE</h1>
        <p className="p1">
          Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places.
          Moreover, it is important to travel to humans.
        </p>
        <div className="button-container">
          <Link to='/places'><button className="responsive-button">EXPLORE NOW</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage

