import React from 'react';

const searchTerm = {};
const url = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_title,medium_display,image_id`;

class Cat extends React.Component {

    state = {
        loading: true,
        fetchedArt: null,
        fetchedDetails: null,
    };

    handleGetRequest = async () => {
        const request = await fetch(url);
        const response = await request.json();
        
        this.setState({ 
            loading: false,
            fetchedArt: response.data, 
        });

        //  https://www.youtube.com/watch?v=3OolwmBExB0  at 15:27
        console.log(this.state.fetchedArt)
    }

    componentDidMount() {
        this.handleGetRequest();
    }
    render() {
        return (
            <div>"Here it should render"</div>
        )
    }
}

export default Cat;