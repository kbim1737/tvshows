import React from 'react';
import './styles/TvShow.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TvShowCard from '../components/TvShowCard';



class SearchResults extends React.Component {

    
    constructor(props){
        super();
        this.handleTvShowID = this.handleTvShowID.bind(this);
    }


    handleTvShowID = (id) =>{
        const path =  "https://api.themoviedb.org/3/tv/" + id + "?api_key=a04e46bcb6a28479586d4331d7049f7f";
        fetch(path)
        .then(res => res.json())
        .then((response) => {
                let result={
                    title: response.name,
                    networks: response.networks,
                    numberOfEpisodes: response.number_of_episodes,
                    numberOfSeasons: response.number_of_seasons,
                    url : response.poster_path ,
                    firstDate: response.first_air_date,
                    overview: response.overview,
                    productionCompanies: response.production_companies,
                    status: response.status,
                    voteAverage: response.vote_average,
                    voteCount: response.vote_count,
                    type: response.type,
                    seasons: response.seasons,
                    originCountry: response.origin_country,
                    createdBy: response.created_by,
                    genres: response.genres,
                    lastEpisodeToAir: response.last_episode_to_air,
                    nextEpisodeToAir: response.next_episode_to_air,
                    
          } 
          this.props.handleTvShowDetails({results: result, showID: id}) ;
        },
        (error) => {
            console.log(error);
        }); 
    }



    render(){ 

            return(
                 
                 <Container>
                    {this.props.searchResults.map((item, rowIndex) => (
                    <Row key={rowIndex} className="row" >
                        <TvShowCard 
                            title={item.title}
                            url={item.url} 
                            firstDate={item.firstDate} 
                            country={item.country} 
                            overview={item.overview}
                            id={item.id}
                            handleTvShowID={this.handleTvShowID}
                            key={rowIndex}></TvShowCard>
                    </Row>
                    ))}
                </Container>
                  
            );

    }
}

export default SearchResults;
