import React, { Component } from 'react';
import SearchResults from './SearchResults';

// const UserSearchInput = (props) => {
//     return (
//         <form onSubmit={props.handleGetRequest}>
//             <input type="text" name="searchValue" autoComplete="off" class="h3 searchArt align-middle border-bottom" placeholder="&#xf002; Search" value="" />
//             <button class="col-xs-2 fa fa-arrow-right fa-2x btn text-secondary align-middle"
//                 onClick={this.props.handleGetRequest}
//             ></button>
//         </form>
//     )
// }


const UserSearchInput = (props) => {
    return (
        <div>
            <form onSubmit={props.handleGetRequest}>
                <input 
                    type="text" 
                    name="searchValue" 
                    autoComplete="off" 
                    class="h3 searchArt align-middle border-bottom" 
                    placeholder="&#xf002; Search" 
                    value="" 
                />
                <button 
                    class="col-xs-2 fa fa-arrow-right fa-2x btn text-secondary align-middle"
                    onClick={props.handleGetRequest}
                ></button>
            </form>
        </div>
    )
}

export default UserSearchInput;