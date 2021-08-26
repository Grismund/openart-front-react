import React from 'react';

function SearchCheck() {
    return (
        <React.Fragment>

            <nav class="col-md-2 form-group">
                <h3 class="h3 ">Medium</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="mediumPainting"/>
                        <label class="form-check-label" for="mediumPainting">Painting</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="mediumDrawing"/>
                        <label class="form-check-label" for="mediumDrawing">Drawing</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="mediumSculpture"/>
                        <label class="form-check-label" for="mediumSculpture">Scultpure</label>
                    </div>
                <h3 class="h3">Style</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="styleAbstract"/>
                        <label class="form-check-label" for="styleAbstract">Abstract</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="styleImpressionist"/>
                        <label class="form-check-label" for="styleImpressionist">Impressionist</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="styleCubist"/>
                        <label class="form-check-label" for="styleCubist">Cubist</label>
                    </div>               
            </nav>
            
        </React.Fragment>
    )
}
export default SearchCheck;