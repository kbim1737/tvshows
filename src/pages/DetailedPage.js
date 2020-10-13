import React from 'react';
import { useLocation } from "react-router-dom";
import TvShowDetailed from '../components/TvShowDetailed'
import Seasons from '../components/Seasons';
import { useApi } from '../hooks/api';

const DetailedPage = props => {

    const location = useLocation();
    const path =  "https://api.themoviedb.org/3/tv/" + location.state.showID + "?api_key=a04e46bcb6a28479586d4331d7049f7f";
            
    const [isLoading, fetchedData] = useApi(path,[location.state.showID]);

    let details = [];

    if (fetchedData) {
        details = {
            title: fetchedData.name,
            networks: fetchedData.networks,
            numberOfEpisodes: fetchedData.number_of_episodes,
            numberOfSeasons: fetchedData.number_of_seasons,
            url : fetchedData.poster_path ,
            firstDate: fetchedData.first_air_date,
            overview: fetchedData.overview,
            productionCompanies: fetchedData.production_companies,
            status: fetchedData.status,
            voteAverage: fetchedData.vote_average,
            voteCount: fetchedData.vote_count,
            type: fetchedData.type,
            seasons: fetchedData.seasons,
            originCountry: fetchedData.origin_country,
            createdBy: fetchedData.created_by,
            genres: fetchedData.genres,
            lastEpisodeToAir: fetchedData.last_episode_to_air,
            nextEpisodeToAir: fetchedData.next_episode_to_air,
            
        }
    } 
    // }
  
    // useEffect(() => {
    //     const path =  "https://api.themoviedb.org/3/tv/" + location.state.showID + "?api_key=a04e46bcb6a28479586d4331d7049f7f";
    //     fetch(path)
    //     .then(res => res.json())
    //     .then((fetchedData) => {
    //             let result={
    //                 title: fetchedData.name,
    //                 networks: fetchedData.networks,
    //                 numberOfEpisodes: fetchedData.number_of_episodes,
    //                 numberOfSeasons: fetchedData.number_of_seasons,
    //                 url : fetchedData.poster_path ,
    //                 firstDate: fetchedData.first_air_date,
    //                 overview: fetchedData.overview,
    //                 productionCompanies: fetchedData.production_companies,
    //                 status: fetchedData.status,
    //                 voteAverage: fetchedData.vote_average,
    //                 voteCount: fetchedData.vote_count,
    //                 type: fetchedData.type,
    //                 seasons: fetchedData.seasons,
    //                 originCountry: fetchedData.origin_country,
    //                 createdBy: fetchedData.created_by,
    //                 genres: fetchedData.genres,
    //                 lastEpisodeToAir: fetchedData.last_episode_to_air,
    //                 nextEpisodeToAir: fetchedData.next_episode_to_air,
                    
    //       } 
    //       console.log(result);
    //       setDetails(result);
    //     },
    //     (error) => {
    //         console.log(error);
    //     }); 
    // },[location.state.showID])

    let content = <p>Waiting for response</p>

    if(!isLoading)
        content =(
            <div> 
                <TvShowDetailed details={details} showID={location.state.showID}/>
                {details.length === 0 ? null:
                <Seasons seasons={details.seasons} tvID={location.state.showID} ></Seasons> 
                }    
            </div>
    );

    return content;

 
}

export default DetailedPage;
