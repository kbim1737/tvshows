import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchComponent from '../components/SearchComponent';
import SearchResults from '../components/SearchResults';
import TvShowDetailed from '../components/TvShowDetailed'
import Seasons from '../components/Seasons';
import Alert from 'react-bootstrap/Alert'

class MainPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            wasSearched : false,
            wasDetailed : false,
            results: [],
            detailedResults: {},
            showID: '',
            noInput: false
        }
        this.handleWasSearched = this.handleWasSearched.bind(this);
        this.handleTvShowDetails = this.handleTvShowDetails.bind(this);
    }


    handleWasSearched = (search) => {
        this.setState({wasSearched: search.wasSearched, results: search.results, wasDetailed: false, noInput:false});
    }

    handleTvShowDetails = (detailed) => {
        this.setState({wasDetailed: true, detailedResults: detailed.results, showID: detailed.showID});
        
    }

    handleNoInput = () =>{
        this.setState({noInput: true, wasSearched: true})
    }
    
    render() {
        
        let searchResult;
        let detailed;
        
        if(this.state.wasDetailed === true){
            searchResult = null;
        } else if(this.state.noInput){ 
            searchResult =   <Alert variant="danger">
                                Please insert an input!
                            </Alert>;
        } else if(this.state.results.length === 0 && this.state.wasSearched === true){
            searchResult = <Alert variant="info">
                                Sorry we didn't found anything for this input
                            </Alert>;
        }
        else{
            searchResult = <SearchResults handleTvShowDetails={this.handleTvShowDetails} searchResults={this.state.results}/>;
        }
        if(this.state.wasDetailed === true){
            detailed =<div> <TvShowDetailed details={this.state.detailedResults} showID={this.state.showID}/>
            <Seasons seasons={this.state.detailedResults.seasons} tvID={this.state.showID} ></Seasons>     
            </div>
            } else { 
                detailed = null;
            }
        
        return(
            <Container>
            <SearchComponent wasSearched={this.state.wasSearched} handleNoInput={this.handleNoInput} handleWasSearched={this.handleWasSearched}/>
                {searchResult}
                {detailed}
            </Container>
        );

    }
  }


  export default MainPage;


