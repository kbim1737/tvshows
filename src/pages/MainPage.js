import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles/Main.css'

class MainPage extends React.Component {
    
    constructor(){
        super()
        this.state = {
            wasSearched : false,
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleChange(event) {
        this.setState({inputValue: event.target.value });
    }

    
    handleSearch() {
        this.setState({wasSearched: !this.state.wasSearched})
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


