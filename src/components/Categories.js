import React from 'react';
import SearchCheck from './SearchCheck'
import SearchResults from './SearchResults'

function Categories() {
    return (
        <React.Fragment>

            <div className="container-fluid pt-3">
                <div class="row input-group mb-3">
                    <div class="col-xs-10">
                        <input type="text" name="searchValue" autoComplete="off" class="h3 searchArt align-middle border-bottom" placeholder="&#xf002; Search" value="" />
                        <i class="col-xs-2 fa fa-arrow-right fa-2x btn text-secondary align-middle"></i>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-4 px-3">
                <div class="row">
                    <SearchCheck />
                    <SearchResults />
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Categories;