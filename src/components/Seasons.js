import React, {useState} from 'react';
import './styles/Seasons.css';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Episode from './Episode';
import Button from 'react-bootstrap/Button'


const Seasons = props => {


    const [episodes, setEpisodes] = useState([]);


    const handleClick = (number) => {
        const path = "https://api.themoviedb.org/3/tv/" + props.tvID + "/season/" + number + "?api_key=a04e46bcb6a28479586d4331d7049f7f"
        fetch(path)
        .then(res => res.json())
        .then((response) => {
            let i=0;
            let ret = [];
            for(i=0;i<response.episodes.length;i++){
                let result={
                    name: response.episodes[i].name,
                    url :response.episodes[i].still_path ,
                    air_date: response.episodes[i].air_date,
                    overview: response.episodes[i].overview,
                    vote_average: response.episodes[i].vote_average,
                    crew: response.episodes[i].crew,
                    guest_stars: response.episodes[i].guest_stars,
                    episode_number: response.episodes[i].episode_number,
                };
                ret.push(result);
          } 
            setEpisodes(ret);
        },
        (error) => {
            console.log(error);
        }); 
    }

    

    return(

        <Container className="season-container">
            <Row className="season-row">
            <InputGroup style={{justifyContent: "center"}}>
            {props.seasons.map((item,i) =>
                <Button className="mr-2 mb-2 season-button" onClick={() => {handleClick(item.season_number)}} key={i}>{item.name}</Button>)}
                </InputGroup>
            </Row>
            
            {episodes.map((item,i) =>
            <Row key={i} className="row">
                <Episode key={i} episode={item}></Episode>
            </Row>
            )}
        </Container>
    );
}


export default Seasons;
