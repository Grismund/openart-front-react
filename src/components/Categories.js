//TODO: This is the main component for the search functions.
//TODO: Video: 53:28 - add click to expand functionality.

import React from 'react';
import UserSearchInput from './search/UserSearchInput';
import SearchCheck from './search/SearchCheck';
import SearchResults from './search/SearchResults';

// const searchTerm = {};

class Categories extends React.Component {

    state = {
        noSearchesYet: true,
        fetchedArt: null,
        fetchedDetails: null,
    };

    handleGetRequest = async (submit) => {

        //prevents the form from refreshing the page when it is submitted.
        submit.preventDefault();

        const searchTerm = submit.target.elements.searchValue.value;
        const url = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_title,medium_display,image_id`;

        const request = await fetch(url);
        const response = await request.json();
        
        this.setState({ 
            noSearchesYet: false,
            fetchedArt: response.data, 
        });

        console.log(searchTerm)
        console.log(this.state.fetchedArt)
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <UserSearchInput handleGetRequest = {this.handleGetRequest}/>
                    <SearchCheck/>
                </div>
                {this.state.noSearchesYet ? (<div>Enter a search term to get started . . .</div>) :

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
//42:00 Move the returns to a separate component.