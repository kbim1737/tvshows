import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import './styles/TvShow.css';
import './styles/Modal.css';

const EpisodeModal = props =>{


    return(
        <Container>
            <Modal
            show = {props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props.onHide}
        >
            <Modal.Body>
            {props.episode.url ? 
                <Image className="modal-ep-image" src={"https://image.tmdb.org/t/p/original"+props.episode.url} alt="image"></Image> :
                <Image className="modal-noimage" src={require('./static/nope.jpg')} alt="image"></Image> 
                }
                <Card className="modal-card">
                    <Card.Body>
                        <Card.Title>{props.episode.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.episode.air_date}</Card.Subtitle>
                    
                        <Card.Subtitle className="mb-2 text-muted d-flex">Crew</Card.Subtitle>
                        <Card.Text className="modal-text">
                            {props.episode.crew.map((item,i) => {
                                    if(props.episode.crew.length-1 === i)
                                    return item.name+"/"+item.job
                                    else 
                                        return item.name+"/"+item.job + ", " 
                            })}
                        </Card.Text >
                        {props.episode.guest_stars ? 
                            <div>
                                <Card.Subtitle className="mb-2 text-muted d-flex">Guest stars</Card.Subtitle>
                                <Card.Text className="modal-text">
                                {props.episode.guest_stars.map((item,i) => {
                                            if(props.episode.crew.length-1 === i)
                                            return item.name+"/"+item.character
                                            else 
                                                return item.name+"/"+item.character + ", " 
                                    })}
                                </Card.Text>
                            </div>: null
                        }
                        {props.episode.overview ?
                        <div> 
                            <Card.Subtitle className="mb-2 text-muted d-flex">Overview</Card.Subtitle>
                            <Card.Text className="modal-text">{props.episode.overview}</Card.Text> 
                        </div> : null
                        }
                        <Card.Subtitle className="mb-2 text-muted d-flex">
                                <div className="stars-text">
                                    Site ratings: ({props.episode.vote_average}) 
                                </div>                    
                                <ReactStars
                                    count={10}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                    edit={false}
                                    value={props.episode.vote_average}
                                    size={24}
                                    />
                            </Card.Subtitle>

                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
            <Button  variant="outline-dark" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </Container>
    );
}


export default EpisodeModal;