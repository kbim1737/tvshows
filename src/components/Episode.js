import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/Episode.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import ReactStars from 'react-rating-stars-component';
import EpisodeModal from './EpisodeModal'

class Episode extends React.Component {

    constructor(props){
        super();
        this.state={
            showModal: false,
            details: '',
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }


    handleOnClick = () =>{
        this.setState({showModal: !this.state.showModal})
    }

    
    onMouseOver = () => {
        this.setState({details: 'More details'})
    }

    onMouseOut () {
        this.setState({details : ''})
    }

    render(){ 

        return(
            <Container
            onClick={this.handleOnClick} 
            onMouseEnter={this.onMouseOver}
            onMouseLeave={this.onMouseOut} 
            className="container2">
                {this.props.episode.url ? 
                <Image className="image-episode" src={"https://image.tmdb.org/t/p/original"+this.props.episode.url} alt="image"></Image> :
                <Image className="noimage-episode" src={require('./static/nope.jpg')} alt="image"></Image> 
                }
                <Card className="card-body-episode">
                    <Card.Body>
                        <Card.Title className="card-title-episode">{this.props.episode.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.episode.air_date}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Episode number: {this.props.episode.episode_number}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted d-flex star">
                                <div className="stars-text">
                                    Site rating: ({this.props.episode.vote_average})  
                                </div>                    
                                <ReactStars
                                    count={10}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                    edit={false}
                                    value={this.props.episode.vote_average}
                                    size={24}
                                    />
                            </Card.Subtitle>
                            <Card.Link onClick={this.handleOnClick} className="mb-2 text-muted details">{this.state.details}</Card.Link>
                            <Card.Link onClick={this.handleOnClick} className="mb-2 text-muted details-small">More details</Card.Link>
                    </Card.Body>
                </Card>
                <EpisodeModal
                 show={this.state.showModal}
                 onHide={() => this.setState({showModal: false})}
                 episode={this.props.episode}>
                 </EpisodeModal>
            </Container>
        );
    }
}

export default Episode;