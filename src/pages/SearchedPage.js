import React from 'react';
import './styles/TvShow.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TvShowCard from '../components/TvShowCard';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useApi } from '../hooks/api';



const SearchedPage = props => {
    const history = useHistory();
    const location = useLocation();
    const path = "https://api.themoviedb.org/3/search/tv?api_key=a04e46bcb6a28479586d4331d7049f7f&query="
                + location.state.input.replace(" ", "+");
            
    const [isLoading, fetchedData] = useApi(path,[location.state.input]);

    let results = [];

    if (fetchedData) {
        results = [];
        let i=0;
            for(i=0;i<fetchedData.results.length;i++){
                let element={
                    title: fetchedData.results[i].original_name,
                    country: fetchedData.results[i].origin_country[0],
                    url : fetchedData.results[i].poster_path ,
                    firstDate: fetchedData.results[i].first_air_date,
                    overview: fetchedData.results[i].overview,
                    id: fetchedData.results[i].id,
                };
                results.push(element);
            }     
    }

    const handleTvShowID = (id) =>{
        history.push("/detailed", {showID : id});
    }

    let content = <p>Waiting for response</p>

    if(!isLoading){
       if (results.length === 0){
            content = (
                <>
                <Alert variant="info">
                    Sorry we didn't found anything for this input
                </Alert>
                </>
            );
        } else {
            content = ( 
                    <Container>
                    {results.map((item, rowIndex) => (
                    <Row key={rowIndex} className="row" >
                        <TvShowCard 
                            title={item.title}
                            url={item.url} 
                            firstDate={item.firstDate} 
                            country={item.country} 
                            overview={item.overview}
                            id={item.id}
                            handleTvShowID={() => handleTvShowID(item.id)}
                            key={rowIndex}></TvShowCard>
                    </Row>
                    ))}
                </Container>           
            );
        }
    }

    return content;

}

export default SearchedPage;
