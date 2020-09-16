import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/TvShow.css';
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';



const TvShowCard = (props) => {
        

        console.log(props);
        return(

            <Container className="container2">
                <Image className="image" src={props.url} alt="image"></Image>
                <Card>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.firstDate}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{props.country}</Card.Subtitle>
                        <Card.Text>
                            {props.overview.slice(0,200)}...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
}

export default TvShowCard;
