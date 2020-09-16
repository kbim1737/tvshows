import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import TvShowCard from '../components/TvShowCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import './styles/Main.css'


// api key a04e46bcb6a28479586d4331d7049f7f
// api url https://api.themoviedb.org/3/movie/550?api_key=a04e46bcb6a28479586d4331d7049f7f

class MainPage extends React.Component {
    
    constructor(){
        super()
        this.state = {
            wasSearched : false,
            inputValue: '',
            searchResult: [],
            isLoaded: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.searchOutput = this.searchOutput.bind(this);
    }
    
    handleChange(event) {
        this.setState({inputValue: event.target.value });
    }

    
    handleSearch() {
        if(!this.state.wasSearched)
            this.setState({wasSearched: !this.state.wasSearched});
        const path =  "https://api.themoviedb.org/3/search/tv?api_key=a04e46bcb6a28479586d4331d7049f7f&query="
                        + this.state.inputValue.replace(" ", "+");
        fetch(path)
        .then(res => res.json())
        .then((response) => {
            let i=0;
            let ret = [];
            for(i=0;i<response.results.length;i++){
                let result={
                    title: response.results[i].original_name,
                    country: response.results[i].origin_country[0],
                    url : "https://image.tmdb.org/t/p/original" + response.results[i].poster_path,
                    firstDate: response.results[i].first_air_date,
                    overview: response.results[i].overview,
                    id: response.results[i].id,
                };
                ret.push(result);
          }
          this.setState({searchResult: ret, isloaded:true});   
        },
        (error) => {
            console.log(error);
        }
      );      
    }

    searchOutput = () =>{
        console.log(this.state.searchResult);
        return(
            <>
             
             <Container>
                {this.state.searchResult.map((item, rowIndex) => (
                <Row key={rowIndex} id="row" >
                    <TvShowCard 
                        title={item.title}
                        url={item.url} 
                        firstDate={item.firstDate} 
                        country={item.country} 
                        overview={item.overview}
                        id={item.id}
                        key={rowIndex}></TvShowCard>
                </Row>
                ))}
            </Container>
              
            </>
        )
    }
    
    render() {

        let inputClass = this.state.wasSearched ? "topSearch" : "middleSearch";

        return(
            <div className="Main-div">
                <div className={inputClass}>
                    <InputGroup className="mb-5">
                        <FormControl
                            placeholder="What are you looking for?"
                            aria-label="What are you looking for?"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <Button onClick={this.handleSearch} variant="dark">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                {this.state.isloaded ? this.searchOutput() : ''}
            </div>
        );
    }
  }


  export default MainPage;


