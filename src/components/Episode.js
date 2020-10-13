import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import './styles/Episode.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import ReactStars from 'react-rating-stars-component';
import EpisodeModal from './EpisodeModal'

const Episode = props => {

    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState('');


    const handleOnClick = (condition) =>{
        setShowModal(condition)
    }

    
    const onMouseOver = () => {
        setDetails('More details');
    }

    const onMouseOut = () => {
        setDetails('');
    }


    return(
        <Container
        onClick={() => handleOnClick(true)} 
        onMouseEnter={() => onMouseOver()}
        onMouseLeave={() => onMouseOut()} 
        className="container2">
            {props.episode.url ? 
            <Image className="image-episode" src={"https://image.tmdb.org/t/p/original"+props.episode.url} alt="image"></Image> :
            <Image className="noimage-episode" src={require('./static/nope.jpg')} alt="image"></Image> 
            }
            <Card className="card-body-episode">
                <Card.Body>
                    <Card.Title className="card-title-episode">{props.episode.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.episode.air_date}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Episode number: {props.episode.episode_number}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted d-flex star">
                            <div className="stars-text">
                                Site rating: ({props.episode.vote_average})  
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
                        <Card.Link onClick={() => handleOnClick(true)} className="mb-2 text-muted details">{details}</Card.Link>
                        <Card.Link onClick={() => handleOnClick(true)} className="mb-2 text-muted details-small">More details</Card.Link>
                </Card.Body>
            </Card>
            <div onClick={e => e.stopPropagation()}>

                <EpisodeModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    episode={props.episode}>
                </EpisodeModal>
            </div>
        </Container>
    );
}


export default Episode;