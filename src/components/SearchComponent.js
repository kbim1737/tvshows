import React from 'react'



class SearchComponent extends React.Component {
    
    constructor(props){
        this.state = {wasSearched : false};

    }
    
    
    render() {
        return(
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="what are you looking for?"
                        aria-label="what are you looking for?"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}


export default SearchComponent;
