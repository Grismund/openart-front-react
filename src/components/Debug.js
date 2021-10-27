import React from 'react';


const api_url = 'https://api.artic.edu/api/v1/artworks?limit=2'
async function getArt() {
    const response = await fetch(api_url);
    const searchResults = await response.json();
    alert(searchResults)
}



function Debug() {
    return (
        <div>Debugging now...</div>
    )
}
export default Debug;