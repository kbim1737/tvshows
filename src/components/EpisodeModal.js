import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
import Image from 'react-bootstrap/Image'
import './styles/TvShow.css';


class EpisodeModal extends React.Component{


    render(){
        return(
            <Modal
            show = {this.props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {this.props.episode.url ? 
                <Image className="modal-ep-image" src={"https://image.tmdb.org/t/p/original"+this.props.episode.url} alt="image"></Image> :
                <Image className="modal-noimage" src={require('./static/nope.jpg')} alt="image"></Image> 
                }
                <Card className="modal-card">
                    <Card.Body>
                        <Card.Title>{this.props.episode.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.episode.air_date}</Card.Subtitle>
                      
                        <Card.Subtitle className="mb-2 text-muted d-flex">Crew</Card.Subtitle>
                        <Card.Text>
                            {this.props.episode.crew.map((item,i) => {
                                    if(this.props.episode.crew.length-1 === i)
                                    return item.name+"/"+item.job
                                    else 
                                        return item.name+"/"+item.job + ", " 
                            })}
                        </Card.Text>
                      
                        <Card.Subtitle className="mb-2 text-muted d-flex">Guest stars</Card.Subtitle>
                        <Card.Text>
                         {this.props.episode.guest_stars.map((item,i) => {
                                    if(this.props.episode.crew.length-1 === i)
                                    return item.name+"/"+item.character
                                    else 
                                        return item.name+"/"+item.character + ", " 
                            })}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted d-flex">Overview</Card.Subtitle>
                        <Card.Text>{this.props.episode.overview}</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted d-flex">
                                <div className="stars-text">
                                    Site ratings:  
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

                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
            <Button  variant="outline-dark" onClick={this.props.handleModal}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
}

export default EpisodeModal;