import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles/Search.css'



// api key a04e46bcb6a28479586d4331d7049f7f
// api url https://api.themoviedb.org/3/movie/550?api_key=a04e46bcb6a28479586d4331d7049f7f

class SearchComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            wasSearched : false,
            inputValue: '',
            isLoaded: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    
    handleChange(event) {
        this.setState({inputValue: event.target.value });
    }


    onKeyPress = (event) => {
        if(event.which === 13) {
          this.handleSearch();
        }
      }
    
    handleSearch() {
        if(this.state.inputValue.length !== 0){
            const path =  "https://api.themoviedb.org/3/search/tv?api_key=a04e46bcb6a28479586d4331d7049f7f&query="
                            + this.state.inputValue.replace(" ", "+");
            fetch(path)
            .then(res => res.json())
            .then((response) => {
                let i=0;
                let ret = [];
                console.log(response);
                    for(i=0;i<response.results.length;i++){
                        let result={
                            title: response.results[i].original_name,
                            country: response.results[i].origin_country[0],
                            url : response.results[i].poster_path ,
                            firstDate: response.results[i].first_air_date,
                            overview: response.results[i].overview,
                            id: response.results[i].id,
                        };
                        ret.push(result);
                    } 
            this.props.handleWasSearched({results: ret, wasSearched: true}) 
            },
            (error) => {
                console.log(error);
            }

        ); 

        
            this.setState({wasSearched: true});
    } else {
        this.setState({wasSearched: true});
        this.props.handleNoInput();

    }
           
    }

    
    render() {

        let inputClass= this.props.wasSearched ? "topSearch" : "middleSearch";

        return(
            <div>
                <div className={inputClass}>
                    <InputGroup className="mb-5 mr-2">
                        <FormControl
                            placeholder="What are you looking for?"
                            aria-label="What are you looking for?"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange}
                            onKeyPress={this.onKeyPress}
                            type="text"
                        />
                        <InputGroup.Append>
                            <Button onClick={this.handleSearch}   variant="dark" type="submit">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        );
    }
  }


  export default SearchComponent;


