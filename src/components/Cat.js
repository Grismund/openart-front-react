import React from 'react';
import UserSearchInput from './UserSearchInput';

const searchTerm = {};

class Cat extends React.Component {

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

    // componentDidMount() {
    //     this.handleGetRequest();
    // }
    render() {
        return (
            <React.Fragment>
                <div>
                    <UserSearchInput handleGetRequest = {this.handleGetRequest}/>
                </div>
                {this.state.noSearchesYet ? (<div>Enter a search term to get started . . .</div>) :
                    <div className="container-fluid" >
                        <div className="row">
                            {this.state.fetchedArt.map((artwork) => {
                                return(
                                    <div key={artwork.id} className="col-md-4">
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
            </React.Fragment>git 
        )
    }
}

export default Cat;

//42:00 Move the returns to a separate component.