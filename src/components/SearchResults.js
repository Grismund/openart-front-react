import React, { Component } from 'react';
import { render } from '@testing-library/react';

// Example of strict field returns
// https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number

// https://api.artic.edu/api/v1/artworks?fields=id,title,artist,medium

// Get only public domain art
// https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true

// Grabbing an image using the id
//https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
//example
//https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=2&fields=id,title,image_id

// Video explaining this process
//https://www.youtube.com/watch?v=3OolwmBExB0


class SearchResults extends Component {

    state = {
        loading: true,
        fetchedArt: null,
        fetchedDetails: null,
    };

    handleGetRequest = async (e) => {
    // async componentDidMount() {

        const searchTerm = e.target.elements.searchValue.value;
        // const searchTerm = 'Susan Rothenberg';
        const api_url = 'https://api.artic.edu/api/v1/artworks/search?q=';
        const searchAppend = '&fields=id,title,artist_title,medium_display,image_id';

        const response = await fetch(api_url + searchTerm + searchAppend);
        const searchResults = await response.json();
        
        this.setState({ 
            loading: false,
            fetchedArt: searchResults.data, 
        });
        console.log(this.state.fetchedArt);
        console.log(searchTerm)
    }


    // {this.state.fetchedArt.map((artwork) => <div className="h3">{artwork.title}</div> )}
    render() {

        return (
            <React.Fragment>
                {this.state.loading ? (<div>Loading . . .</div>) :
                    <div className="container-fluid" >
                        <div className="row">
                            {this.state.fetchedArt.map((artwork) => {
                                return(
                                    <div className="col-md-4">
                                        <div className="card border-0 mb-4">
                                            <img className="card-img" src={
                                                `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
                                                } alt={artwork.title} 
                                            />
                                            <div>
                                                <div className="row searchResultCardText mx-0">
                                                    <div className=" h3">{artwork.title}</div>
                                                </div>
                                                <div className="row searchResultCardText mx-0">
                                                    <div className=" h6">{artwork.artist_title}</div>
                                                </div>
                                                <div className="row searchResultCardText mx-0">
                                                    <button className="col-sm-3 col-md-6 btn btn-dark btn-block text-nowrap mr-auto">Buy Prints</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
export default SearchResults;