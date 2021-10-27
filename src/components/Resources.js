import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';



import {Link} from 'react-router-dom';





const Resources = (props) => {

    return (
        <CardDeck>
          <Card>
        
            <CardBody>
              <CardTitle tag="h5">Want to play Pathfinder V1?</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Download the PDF!</CardSubtitle>
              <CardText>The player's handbook is always a great place to get started when beginning a new game! Download the free pdf below!</CardText>
              <Button onclick="window.location.href= 'https://www.d20pfsrd.com/wp-content/uploads/sites/12/2017/01/PFRPG_SRD.pdf'">Go to Download Page</Button>
            </CardBody>
          </Card>
          <Card>
         
            <CardBody>
              <CardTitle tag="h5">Rather buy it?</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Amazon.com</CardSubtitle>
              <CardText>If you'd rather have a hardcopy below is a link to a few options!</CardText>
              <Button onclick="window.location.href='https://rb.gy/6ogxgy'">Go to Amazon</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Not sure where to get started?</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Guides</CardSubtitle>
              <CardText>Below are a few guides you can read up on.</CardText>
             <Button onclick="window.location.href='http://zenithgames.blogspot.com/2012/11/the-comprehensive-pathfinder-guides.html'">Class Guide</Button> <Button onclick="window.location.href='http://zenithgames.blogspot.com/2015/06/races-of-pathfinder-optimization-guide.html'">Race Guide</Button> <Button onclick="window.location.href='https://www.d20pfsrd.com/basics-ability-scores/character-creation/'">Start a new character</Button>
            </CardBody>
          </Card>
        </CardDeck>
      );







    
};

export default Resources;