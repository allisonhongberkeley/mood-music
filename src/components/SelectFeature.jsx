import {React, useState, useEffect} from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './SelectFeature.css'

function SelectFeature ({name, values, onFeatureChange}) {

    const handleSliderChange = (values) => {
        onFeatureChange(name, values[0], values[1]);
    };

    return (
        <div className="select-feature-row">
            <div className="pad-right">
            <h3>{name}</h3>
            </div>
            <RangeSlider 
                min={0}
                max={10}  
                defaultValue={[0, 5]}
                values={values}
                onInput={handleSliderChange}          
            />
        </div>
    );
}

export default SelectFeature;