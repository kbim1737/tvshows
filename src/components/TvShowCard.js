import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/TvShow.css';
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';



class TvShowCard extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            details: ''
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }


    handleOnClick = () =>{
        this.props.handleTvShowID(this.props.id);
    }


    render(){ 

        return(

            <Container onClick={this.handleOnClick} 
                className="container2">
                {this.props.url ? 
                <Image className="image" src={"https://image.tmdb.org/t/p/original"+this.props.url} alt="image"></Image> :
                <Image className="noimage" src={require('./static/nope.jpg')} alt="image"></Image> 
                }
                <Card>
                    <Card.Body>
                        <Card.Title className="card-title-show">{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.firstDate}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.country}</Card.Subtitle>
                        <Card.Text>
                            {this.props.overview.slice(0,200)}...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default TvShowCard;
