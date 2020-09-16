import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
    }
    
    handleChange(event) {
        this.setState({inputValue: event.target.value });
    }

    
    handleSearch() {
        if(!this.state.wasSearched)
            this.setState({wasSearched: !this.state.wasSearched});
        const path =  "https://api.trakt.tv?query="
                        + this.state.inputValue.replace(" ", "+");
        console.log(path);
        fetch(path, {
            method: 'get', 
            headers: new Headers({ 
              'Content-Type': 'application/json',
              'traky-api-key':'981bac103e7fd2e491930d27794331a414eba41e14026a392c24b149d6f554ef',
              'trakt-api-version': '2',
            }),  
        })
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            this.setState({
              isLoaded: true,
              searchResult: result.tv_shows
            });
        },
        (error) => {
            console.log(error);
        }
      );
      console.log(this.state.searchResult);
    }
    
    render() {

        let inputClass = this.state.wasSearched ? "topSearch" : "middleSearch";

        return(
            <div className="Main-div">
                <div className={inputClass}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="What are you looking for?"
                            aria-label="What are you looking for?"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <Button onClick={this.handleSearch} variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        );
    }
  }


  export default MainPage;


