import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/TvShowDetailed.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import ReactStars from 'react-rating-stars-component';




class TvShowDetailed extends React.Component {


    render(){ 
        let date = new Date(this.props.details.lastEpisodeToAir?.air_date);
        const dayLast = date.toString().split(' ')[0];
        date = new Date(this.props.details.nextEpisodeToAir?.air_date);
        const dayNext = date.toString().split(' ')[0];

        return(
                <Container className="container-detailed">
                                    {this.props.details.url ? 
                <Image className="image-detailed" src={"https://image.tmdb.org/t/p/original"+this.props.details.url} alt="image"></Image> :
                <Image className="image-detailed" src={require('./static/nope.jpg')} alt="image"></Image> 
                }
                    <Card className="card-detailed">
                        <Card.Body>
                            <Card.Title className="title">{this.props.details.title}</Card.Title>
                            {this.props.details.genres && this.props.details.genres.length > 0 ?
                                <Card.Subtitle className="mb-2 text-muted">                           
                                    {this.props.details.genres.map((item, i) => {
                                        if(this.props.details.genres.length-1 === i)
                                            return item.name
                                        else 
                                            return item.name + " | " 
                                    })}</Card.Subtitle> : null
                            }
                             {this.props.details.firstDate ?  
                                <Card.Subtitle className="mb-2 text-muted">
                                    First air date: {this.props.details.firstDate}
                                </Card.Subtitle> : null
                            }
                            {this.props.details.status ? 
                                <Card.Subtitle className="mb-2 text-muted">
                                    Status: {this.props.details.status}
                                </Card.Subtitle> : null
                            }
                            {this.props.details.type ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Type: {this.props.details.type}
                                </Card.Subtitle> : null
                            }
                            {this.props.details.networks && this.props.details.networks.length > 0 ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Networks:     {this.props.details.networks.map((item, i) => {
                                        if(this.props.details.networks.length-1 === i)
                                            return item.name
                                        else 
                                            return item.name + ", " 
                                    })}   
                                </Card.Subtitle> : null
                            }
                            {this.props.details.createdBy && this.props.details.createdBy.length > 0 ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Creators:     {this.props.details.createdBy.map((item, i) => {
                                        if(this.props.details.createdBy.length-1 === i)
                                            return item.name
                                        else 
                                            return item.name + ", " 
                                    })}   
                                </Card.Subtitle> : null
                            }
                            {this.props.details.lastEpisodeToAir ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Last episode to air:   {this.props.details.lastEpisodeToAir?.name} | {this.props.details.lastEpisodeToAir?.air_date} | {dayLast} 
                                </Card.Subtitle> : null
                            }
                            {this.props.details.nextEpisodeToAir ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Next episode to air:   {this.props.details.nextEpisodeToAir?.name} | {this.props.details?.nextEpisodeToAir?.air_date} | {dayNext} 
                                </Card.Subtitle> : null
                            }
                            {this.props.details.numberOfEpisode ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Number of episodes: {this.props.details.numberOfEpisodes}
                                </Card.Subtitle> : null
                            } 
                            {this.props.details.numberOfSeasons ?  
                                <Card.Subtitle className="mb-2 text-muted">
                                    Number of seasons: {this.props.details.numberOfSeasons}
                                </Card.Subtitle>: null
                            }
                            {this.props.details.originCountry && this.props.details.originCountry.length > 0 ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Origin country:  {this.props.details.originCountry.map((item, i) => {
                                        if(this.props.details.originCountry.length-1 === i)
                                            return item
                                        else 
                                            return item + ", " 
                                    })}   
                                </Card.Subtitle> : null
                            }
                            {this.props.details.productionCompanies && this.props.details.productionCompanies.length > 0 ?
                                <Card.Subtitle className="mb-2 text-muted">
                                    Production companies:  {this.props.details.productionCompanies.map((item, i) => {
                                        if(this.props.details.productionCompanies.length-1 === i)
                                            return item.name
                                        else 
                                            return item.name + ", " 
                                    })}   
                                </Card.Subtitle> : null
                            }
                            <Card.Subtitle className="mb-2 text-muted d-flex">
                                <div className="stars-text">
                                    Site rating: ({this.props.details.voteAverage})
                                </div>                    
                                <ReactStars
                                    count={10}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                    edit={false}
                                    value={this.props.details.voteAverage}
                                    size={24}
                                    />
                            </Card.Subtitle>


                            {this.props.details.overview ?
                                <div>
                                    <Card.Subtitle className="mb-2 text-muted">Overview:</Card.Subtitle>
                                    <Card.Text className="overview">
                                    {this.props.details.overview}
                                    </Card.Text>
                                </div> : null
                            }
                        </Card.Body>
                    </Card>
                    
                </Container>
        );
    }
}

export default TvShowDetailed;
