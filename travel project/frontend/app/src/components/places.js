import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mumbai from "./images/mumbai.jpg"
import Chennai from "./images/chennai.jpg"
import Delhi from "./images/delhi.jpg"
import Jaipur from "./images/jaipur.jpg"
import Hyderabad from "./images/hyderabad.jpg"
import Benguluru from "./images/benguluru.jpg"
import Kolkata from "./images/kolkata.jpg"
import Agra from "./images/agra.jpg"
import Goa from "./images/goa.jpg"
import Cochin from "./images/cochin.jpg"
import Lucknow from "./images/lucknow.jpg"
import Amritsar from "./images/amritsar.jpg"

import "./places.css"
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Bookingform from "./bookingform";
import { Container, NavLink, Navbar } from 'react-bootstrap';
import logo from './images/logo.jpg';

function Places() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <div className="place">
            {/* <h1 style={{ color: '#413839', fontSize: 50, textAlign: "center" }}>Destinations</h1>
            <br /> */}
            <Navbar fixed="top">
                <Container>

                    <Navbar.Brand style={{ marginLeft: '-5%' }}><img
                        src={logo}
                        alt="Travel Agency Logo"
                        width="50" // Set the width and height according to your design
                        height="50"
                        style={{ borderRadius: '50%', }} />&nbsp;&nbsp;<span className="logo-title" style={{ fontSize: "30px" }}>Travel Explorer</span></Navbar.Brand>
                    
                </Container>
            </Navbar>
            <br/><br/><br/>
            <h1 style={{ color: 'Black', fontSize: 50, textAlign: "center" }}>Destinations</h1>
            <br />
            <div className="container">
                <div className="row r1">
                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c1">
                            <img src={Mumbai} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Mumbai</h5>
                                <p class="card-text"></p>
                                {/* <Link to={'/bookingform'}><Button>Book</Button></Link> */}
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }} >
                        <div class="card c2">
                            <img src={Chennai} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Chennai</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c3">
                            <img src={Delhi} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Delhi</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c4">
                            <img src={Jaipur} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Jaipur</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c5">
                            <img src={Hyderabad} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Hyderabad</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }} >
                        <div class="card c6">
                            <img src={Benguluru} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Benguluru</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c7">
                            <img src={Kolkata} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Kolkata</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }} >
                        <div class="card c8">
                            <img src={Agra} class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Agra</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c9">
                            <img src={Goa} className="I9" class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Goa</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c9">
                            <img src={Cochin} className="I9" class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Cochin</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c9">
                            <img src={Amritsar} className="I9" class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Amritsar</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ width: '20rem', height: '31rem', marginTop: 20, marginLeft: 20 }}>
                        <div class="card c9">
                            <img src={Lucknow} className="I9" class="card-img-top" alt="pic" style={{ height: 300, width: 295 }} />
                            <div class="card-body">
                                <h5 class="card-title">Lucknow</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header style={{ backgroundColor: "#427D9D" }} closeButton>
                            <Modal.Title >Booking Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* Add your booking form content here */}
                            {/* You can create a separate BookingForm component and render it here */}
                            <Bookingform />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal} style={{ backgroundColor: "#427D9D" }}>
                                close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>


            </div>
        </div>
    )
}
export default Places;