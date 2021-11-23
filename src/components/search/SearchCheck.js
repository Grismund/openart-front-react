import React from 'react';

function SearchCheck() {
    return (
        <React.Fragment>

            <nav className="col-md-2 form-group">
                <h3 className="h3 ">Medium</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="mediumPainting"/>
                        <label className="form-check-label" htmlFor="mediumPainting">Painting</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="mediumDrawing"/>
                        <label className="form-check-label" htmlFor="mediumDrawing">Drawing</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="mediumSculpture"/>
                        <label className="form-check-label" htmlFor="mediumSculpture">Scultpure</label>
                    </div>
                <h3 className="h3">Style</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="styleAbstract"/>
                        <label className="form-check-label" htmlFor="styleAbstract">Abstract</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="styleImpressionist"/>
                        <label className="form-check-label" htmlFor="styleImpressionist">Impressionist</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="styleCubist"/>
                        <label className="form-check-label" htmlFor="styleCubist">Cubist</label>
                    </div>
            </nav>
            
        </React.Fragment>
    )
}
export default SearchCheck;