import React from 'react';

const CatResults = (props) => {

    return (
        <React.Fragment>
            {props.fetchedArt.map((artwork) => {
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
            })}
        </React.Fragment>
    )
}

export default CatResults;