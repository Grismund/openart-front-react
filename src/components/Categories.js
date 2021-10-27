import React from 'react';
import SearchCheck from './SearchCheck';
import SearchResults from './SearchResults';
import UserSearchInput from './UserSearchInput';
import Cat from './Cat';

function Categories() {
    return (
        <React.Fragment>
            <div className="container-fluid pt-3">
                <div className="row input-group mb-3">
                    <div className="col-xs-10">
                        <UserSearchInput/>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 px-3">
                <div className="row">
                    <Cat/>
                    <SearchCheck />
                    <SearchResults />
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Categories;