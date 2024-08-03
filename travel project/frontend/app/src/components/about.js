import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from './images/p7.jpg';
import image2 from './images/p3.jpg';
import image3 from './images/p2.jpg';
import image4 from './images/p6.jpg';
import image5 from './images/p8.jpg';
import image6 from './images/p5.jpg';

function About() {
  const cardStyle = {
    margin: '10px', 
  };

  const cardImgStyle = {
    height: '600px', 
    objectFit: 'cover', 
  };

  const cardTextStyle = {
    height: '200px', 
  };

  return (
    <div style={{backgroundColor:"#427D9D"}}>
      <CardGroup>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={image1} style={cardImgStyle} />
          <Card.Body>
            <Card.Title>"Discover the Wonders of the World"</Card.Title>
            <Card.Text style={cardTextStyle}>
            Our mission is simple: to inspire and empower you to 
            explore the beauty, culture, and diversity of our planet.
            With ASTV travel agency, your adventure begins the moment you step out your door. 
            Whether you're a seasoned globetrotter or a first-time traveler, 
            we have something special in store for you.
            At ASTV Agency, we believe that the world is a book, 
            and those who do not travel read one page. 


            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">"Travel is the only thing you can buy that makes you richer." </small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={image2} style={cardImgStyle} />
          <Card.Body>
            <Card.Title>"Your Journey, Your Way"</Card.Title>
            <Card.Text style={cardTextStyle}>
            n a world filled with endless possibilities, 
            it's time to find your way through the extraordinary tapestry of travel. 
            At ASTV  Agency, we don't just offer vacations; 
            we offer journeys of self-discovery, adventure, and connection.
            Every traveler is unique, and we understand that.
            Whether you seek solace in serene landscapes, 
            yearn for the thrill of adventure.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">"Travel far enough, you meet yourself."</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={image3} style={cardImgStyle} />
          <Card.Body>
            <Card.Title>"Just Go with ASTV Agency"</Card.Title>
            <Card.Text style={cardTextStyle}>
            Life is a grand adventure, and at ASTV Agency, 
            we believe that the best way to embrace it is by saying,
            "Just Go!" We're your partner in unlocking the doors to the world's 
            wonders and inviting you to seize the opportunity for remarkable journeys.
            Our team of seasoned travel experts has explored the world extensively. 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">"Travel is never a matter of money but of courage."</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup> 
        <Card style={cardStyle}>
          <Card.Img variant="top" src={image4} style={cardImgStyle} />
          <Card.Body>
            <Card.Title>"Where Extraordinary Meets Exceptional"</Card.Title>
            <Card.Text style={cardTextStyle}>
            Life is a series of moments, and the world is full 
            of them waiting to be discovered. At ASTV, we're not just about travel; 
            we're about creating remarkable, one-of-a-kind experiences 
            that you'll cherish for a lifetime.Our travel experts don't believe 
            in one-size-fits-all. Embark on unforgettable adventures like heli-skiing in 
            the Swiss Alps, hiking through the mystical landscapes of Patagonia.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">"A journey of a thousand miles begins with a single step." </small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={image5} style={cardImgStyle} />
          <Card.Body>
            <Card.Title>"Wanderlust Unleashed: Let's Travel Adventurous!"</Card.Title>
            <Card.Text style={cardTextStyle}>
            Are you ready to break free from the ordinary and dive headfirst into
            thrilling adventures around the globe? At ASTV Agency, we believe that travel isn't just 
            about seeing new places; it's about experiencing the world in its most exhilarating form.
            Your journey is yours to design. We'll work closely with you to create 
            a personalized adventure package that matches your courage and curiosity.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">"Adventure may hurt you but monotony will kill you."</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={image6} style={cardImgStyle} />
          <Card.Body>
            <Card.Title>"Enjoy Every Little Thing: Embrace Life's Small Joys"</Card.Title>
            <Card.Text style={cardTextStyle}>
            In the hustle and bustle of today's world, it's easy to overlook the small, 
            beautiful moments that make life truly special. At ASTV, 
            we believe that every journey, every destination, and every experience is filled
            with these precious little things that deserve to be savored.
            It's the conversations with locals, the smiles from strangers.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">"Adventure is worthwhile in itself-with ASTV Agency"</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default About;
