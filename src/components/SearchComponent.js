import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles/Search.css'
import { useHistory } from 'react-router-dom';



// api key a04e46bcb6a28479586d4331d7049f7f
// api url https://api.themoviedb.org/3/movie/550?api_key=a04e46bcb6a28479586d4331d7049f7f

const SearchComponent = props =>{
    
    const [inputValue, setInputValue] = useState('');
    const [wasSearched, setWasSearched] = useState(false);
    const history = useHistory();


    const handleChange = (event) => {
        setInputValue(event.target.value);
    }


    const onKeyPress = (event) => {
        if(event.which === 13) {
            history.push("/search", {input: inputValue});
            setWasSearched(true);
        }
      }
    
    const handleSearch = () => {
        history.push("/search", {input: inputValue});
        setWasSearched(true);       
    }

    

    let inputClass= wasSearched ? "topSearch" : "middleSearch";

    return(
        <div>
            <div className={inputClass}>
                <InputGroup className="mb-5 mr-2">
                    <FormControl
                        placeholder="What are you looking for?"
                        aria-label="What are you looking for?"
                        aria-describedby="basic-addon2"
                        onChange={(e) => handleChange(e)}
                        onKeyPress={(e) => onKeyPress(e)}
                        type="text"
                    />
                    <InputGroup.Append>
                        <Button onClick={() => handleSearch()}   variant="dark" type="submit">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
}

export default SearchComponent;


