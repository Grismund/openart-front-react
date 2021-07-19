import React from 'react';

function SearchResults() {
    return (
        <React.Fragment>

            <div class="col-md-9" >
                <div class="card-deck">
                    <div class="card border-0">
                        <img class="card-img" src="img/car-turner.jpg" alt="" />
                        <div class="container-flex mr-">
                            <div class="row card-header mx-0">
                                <div class="col-sm-5">
                                    <div class="h3">Title of the Work</div>
                                    <div class="h6">Artist Name</div>
                                </div>                                
                                <div class="col-sm-7">
                                    <button class="col-sm-4 btn btn-dark btn-block text-nowrap ml-auto">Buy Prints</button>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default SearchResults;