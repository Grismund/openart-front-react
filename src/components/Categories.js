//TODO: This is the main component for the search functions.
//TODO: Video: 53:28 - add click to expand functionality.

//TODO: Pagination of results - https://www.youtube.com/watch?v=OFFuBrUa6_0
//TODO: Preferred method https://www.youtube.com/watch?v=IYCa1F-OWmk

import React from 'react';
import UserSearchInput from './searchComponents/UserSearchInput';
import SearchCheck from './searchComponents/SearchCheck';
import SearchResults from './searchComponents/SearchResults';

// const searchTerm = {};

class Categories extends React.Component {

    state = {
        loading: false,
        noSearchesYet: true,
        fetchedArt: null,
        fetchedDetails: null,
        currentPage: 1,
        postsPerPage: 10,
        currentSearchTerm: null,
        medium: "",
    };

    handleGetRequest = async (submit) => {

        //prevents the form from refreshing the page when it is submitted.
        submit.preventDefault();
        const medium = this.state.medium;
        console.log("Medium in state from search box" + this.state.medium);
        const searchTerm = submit.target.elements.searchValue.value;
        const url = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}${medium}&limit=50&fields=id,title,artist_title,medium_display,image_id`;
        
        // hardcoded url for testing below
        // const url = `https://api.artic.edu/api/v1/artworks/search?q=&query[term][artwork_type_id]=14&fields=id,title,artist_title,medium_display,image_id,artwork_type_title`;
        
        const request = await fetch(url);
        
        this.setState({
            loading: true
        });
        
        const response = await request.json();
        
        this.setState({ 
            loading: false,
            noSearchesYet: false,
            fetchedArt: response.data,
            currentSearchTerm: searchTerm
        });
        
        console.log(searchTerm)
        console.log(this.state.fetchedArt)
        console.log(this.state.currentSearchTerm)
    }
    
    handleGetRequestCheck = async (click) => {
        // click.preventDefault();

        const medium = click.target.value;
        console.log("Medium in state from radio" + this.state.medium);
        const url = `https://api.artic.edu/api/v1/artworks/search?q=${this.state.currentSearchTerm}${medium}&limit=50&fields=id,title,artist_title,medium_display,image_id`;
        const request = await fetch(url);
        
        this.setState({
            loading: true,
            medium: medium
        });
        
        const response = await request.json();
        
        this.setState({ 
            loading: false,
            noSearchesYet: false,
            fetchedArt: response.data, 
        });
        
        console.log(this.state.currentSearchTerm)
        console.log(this.state.fetchedArt)
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <UserSearchInput handleGetRequest = {this.handleGetRequest}/>
                    <SearchCheck handleGetRequestCheck = {this.handleGetRequestCheck}/>
                </div>
                {this.state.noSearchesYet ? (<div></div>) :

                    <div className="container-fluid" >
                        <div className="row">
                            <SearchResults fetchedArt={this.state.fetchedArt}/>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Categories;