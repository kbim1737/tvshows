import React from 'react';
import './styles/Seasons.css';
import { Container, InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Episode from './Episode';
import Button from 'react-bootstrap/Button'


class Seasons extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            seasonNumber: this.props.seasons[0]?.number,
            episodes: []
        }
        this.handleClick = this.handleClick.bind(this);
    
    }



    handleClick = (number) => {
        const path = "https://api.themoviedb.org/3/tv/" + this.props.tvID + "/season/" + number + "?api_key=a04e46bcb6a28479586d4331d7049f7f"
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
            this.setState({episodes: ret});
        },
        (error) => {
            console.log(error);
        }); 
    }

    


    render(){ 


        return(

            <Container className="season-container">
                <Row className="season-row">
                <InputGroup style={{justifyContent: "center"}}>
                {this.props.seasons.map((item,i) =>
                    <Button className="mr-2 mb-2 season-button" onClick={() => {this.handleClick(item.season_number)}} key={i}>{item.name}</Button>)}
                 </InputGroup>
                </Row>
               
                {this.state.episodes.map((item,i) =>
                <Row key={i} className="row">
                    <Episode key={i} episode={item}></Episode>
                </Row>
                )}
            </Container>
        );
    }
}

export default Seasons;
