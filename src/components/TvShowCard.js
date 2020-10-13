import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/TvShow.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';



const TvShowCard = props => {


    const handleOnClick = () =>{
        props.handleTvShowID(props.id);
    }

    return(

        <Container onClick={() => handleOnClick()} 
            className="container2">
            {props.url ? 
            <Image className="image" src={"https://image.tmdb.org/t/p/original"+props.url} alt="image"></Image> :
            <Image className="noimage" src={require('./static/nope.jpg')} alt="image"></Image> 
            }
            <Card>
                <Card.Body>
                    <Card.Title className="card-title-show">{props.title}</Card.Title>
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
