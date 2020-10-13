import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/TvShowDetailed.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import ReactStars from 'react-rating-stars-component';




const TvShowDetailed = props => {

    let date = new Date(props.details.lastEpisodeToAir?.air_date);
    const dayLast = date.toString().split(' ')[0];
    date = new Date(props.details.nextEpisodeToAir?.air_date);
    const dayNext = date.toString().split(' ')[0];

    return(
            <Container className="container-detailed">
                                {props.details.url ? 
            <Image className="image-detailed" src={"https://image.tmdb.org/t/p/original"+props.details.url} alt="image"></Image> :
            <Image className="image-detailed" src={require('./static/nope.jpg')} alt="image"></Image> 
            }
                <Card className="card-detailed">
                    <Card.Body>
                        <Card.Title className="title">{props.details.title}</Card.Title>
                        {props.details.genres && props.details.genres.length > 0 ?
                            <Card.Subtitle className="mb-2 text-muted">                           
                                {props.details.genres.map((item, i) => {
                                    if(props.details.genres.length-1 === i)
                                        return item.name
                                    else 
                                        return item.name + " | " 
                                })}</Card.Subtitle> : null
                        }
                            {props.details.firstDate ?  
                            <Card.Subtitle className="mb-2 text-muted">
                                First air date: {props.details.firstDate}
                            </Card.Subtitle> : null
                        }
                        {props.details.status ? 
                            <Card.Subtitle className="mb-2 text-muted">
                                Status: {props.details.status}
                            </Card.Subtitle> : null
                        }
                        {props.details.type ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Type: {props.details.type}
                            </Card.Subtitle> : null
                        }
                        {props.details.networks && props.details.networks.length > 0 ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Networks:     {props.details.networks.map((item, i) => {
                                    if(props.details.networks.length-1 === i)
                                        return item.name
                                    else 
                                        return item.name + ", " 
                                })}   
                            </Card.Subtitle> : null
                        }
                        {props.details.createdBy && props.details.createdBy.length > 0 ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Creators:     {props.details.createdBy.map((item, i) => {
                                    if(props.details.createdBy.length-1 === i)
                                        return item.name
                                    else 
                                        return item.name + ", " 
                                })}   
                            </Card.Subtitle> : null
                        }
                        {props.details.lastEpisodeToAir ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Last episode to air:   {props.details.lastEpisodeToAir?.name} | {props.details.lastEpisodeToAir?.air_date} | {dayLast} 
                            </Card.Subtitle> : null
                        }
                        {props.details.nextEpisodeToAir ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Next episode to air:   {props.details.nextEpisodeToAir?.name} | {props.details?.nextEpisodeToAir?.air_date} | {dayNext} 
                            </Card.Subtitle> : null
                        }
                        {props.details.numberOfEpisode ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Number of episodes: {props.details.numberOfEpisodes}
                            </Card.Subtitle> : null
                        } 
                        {props.details.numberOfSeasons ?  
                            <Card.Subtitle className="mb-2 text-muted">
                                Number of seasons: {props.details.numberOfSeasons}
                            </Card.Subtitle>: null
                        }
                        {props.details.originCountry && props.details.originCountry.length > 0 ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Origin country:  {props.details.originCountry.map((item, i) => {
                                    if(props.details.originCountry.length-1 === i)
                                        return item
                                    else 
                                        return item + ", " 
                                })}   
                            </Card.Subtitle> : null
                        }
                        {props.details.productionCompanies && props.details.productionCompanies.length > 0 ?
                            <Card.Subtitle className="mb-2 text-muted">
                                Production companies:  {props.details.productionCompanies.map((item, i) => {
                                    if(props.details.productionCompanies.length-1 === i)
                                        return item.name
                                    else 
                                        return item.name + ", " 
                                })}   
                            </Card.Subtitle> : null
                        }
                        <Card.Subtitle className="mb-2 text-muted d-flex">
                            <div className="stars-text">
                                Site rating: ({props.details.voteAverage})
                            </div>                    
                            <ReactStars
                                count={10}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                edit={false}
                                value={props.details.voteAverage}
                                size={24}
                                />
                        </Card.Subtitle>


                        {props.details.overview ?
                            <div>
                                <Card.Subtitle className="mb-2 text-muted">Overview:</Card.Subtitle>
                                <Card.Text className="overview">
                                {props.details.overview}
                                </Card.Text>
                            </div> : null
                        }
                    </Card.Body>
                </Card>
                
            </Container>
    );
}

export default TvShowDetailed;
