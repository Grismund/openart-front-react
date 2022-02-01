import React, { Component } from 'react';
import SearchResults from './SearchResults';

const UserSearchInput = (props) => {

    return (
        <div>
            <form onSubmit={props.handleGetRequest}>
                <input 
                    type="text" 
                    name="searchValue" 
                    autoComplete="off" 
                    className="h3 searchArt align-middle border-bottom" 
                    placeholder="&#xf002; Search" 
                    defaultValue="" 
                />
                <button 
                    className="col-xs-2 fa fa-arrow-right fa-2x btn text-secondary align-middle"
                ></button>
            </form>
        </div>
    )
}

export default UserSearchInput;