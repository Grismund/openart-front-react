import React from 'react';

// https://api.artic.edu/api/v1/artworks/search?q=cow&query[term][artwork_type_title]=coin&fields=id,title,artist_title,medium_display,image_id,artwork_type_title
//      &query[term][artwork_type_id]=
//      painting = 1
//      photography = 2
//      sclulpture = 3
//      drawings = 14

function SearchCheck(props) {
    return (
        <React.Fragment>

            <nav className="col-md-2 form-group">
                <h3 className="h3 ">Medium</h3>
                    <form>
                        <div className="form-check">
                            <input onChange={props.handleGetRequestCheck} 
                                name="medium"
                                className="form-check-input" 
                                type="radio" 
                                value=""
                                id="mediumAll"
                                // checked={true}
                            />
                            <label className="form-check-label" htmlFor="mediumAll">All Results</label>
                        </div>
                        <div className="form-check">
                        {/* https://stackoverflow.com/questions/50330124/how-to-pass-checkbox-state-to-onclick-function-in-react */}

                            <input 
                                onChange={props.handleGetRequestCheck} 
                                name="medium"
                                className="form-check-input" 
                                type="radio" 
                                value="&query[term][artwork_type_id]=1"
                                id="mediumPainting"/>
                            <label className="form-check-label" htmlFor="mediumPainting">Painting</label>
                        </div>
                        <div className="form-check">
                            <input onChange={props.handleGetRequestCheck} 
                                name="medium"
                                className="form-check-input" 
                                type="radio" 
                                value="&query[term][artwork_type_id]=14"
                                id="mediumDrawing"/>
                            <label className="form-check-label" htmlFor="mediumDrawing">Drawing</label>
                        </div>
                        <div className="form-check">
                            <input onChange={props.handleGetRequestCheck} 
                                name="medium"
                                className="form-check-input" 
                                type="radio" 
                                value="&query[term][artwork_type_id]=3"
                                id="mediumSculpture"/>
                            <label className="form-check-label" htmlFor="mediumSculpture">Scultpure</label>
                        </div>
                        <div className="form-check">
                            <input onChange={props.handleGetRequestCheck} 
                                name="medium"
                                className="form-check-input" 
                                type="radio" 
                                value="&query[term][artwork_type_id]=2"
                                id="mediumPhotograpy"/>
                            <label className="form-check-label" htmlFor="mediumPhotograpy">Photography</label>
                        </div>
                    </form>
                {/* <h3 className="h3">Style</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="" id="styleAbstract"/>
                        <label className="form-check-label" htmlFor="styleAbstract">Abstract</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="" id="styleImpressionist"/>
                        <label className="form-check-label" htmlFor="styleImpressionist">Impressionist</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="styleCubist"/>
                        <label className="form-check-label" htmlFor="styleCubist">Cubist</label>
                    </div> */}
            </nav>
            
        </React.Fragment>
    )
}
export default SearchCheck;