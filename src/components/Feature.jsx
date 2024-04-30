import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import SelectFeature from './SelectFeature.jsx'
import './Feature.css'

function Feature () {

    const navigate = useNavigate();
    const features = [
        "Danceability", 
        "Energy",
        "Acousticness",
        "Instrumentalness",
        "Liveness",
        "Loudness",
        "Tempo"
    ]

    const [featureValues, setFeatureValues] = useState({
        Danceability: { min: 0, max: 5 },
        Energy: { min: 0, max: 5 },
        Acousticness: { min: 0, max: 5 },
        Instrumentalness: { min: 0, max: 5 },
        Liveness: { min: 0, max: 5 },
        Loudness: { min: 0, max: 5 },
        Tempo: { min: 0, max: 5 }
    });

    const handleFeatureChange = (name, min, max) => {
        setFeatureValues(prevState => ({
            ...prevState,
            [name]: { min, max }
        }));
        
    };

    const handleSubmit = () => {
        for (const feature in featureValues) {
            console.log(`${feature}:`, featureValues[feature].min * 0.1, featureValues[feature].max * 0.1);
        }
        const feature_data = featureValues;
        navigate('/showrecommendation', { state: { data: feature_data } });
    };

    return (
        <div>
            <div class="container"><Navbar></Navbar></div>
            
            <h2 class="container">get a song recommendation!</h2>

            {features.map((feature) => (
                <SelectFeature
                    name={feature}
                    values={featureValues[feature]}
                    onFeatureChange={handleFeatureChange}
                />
            ))}

            <div class="container">
                <button class="button" onClick={handleSubmit}>Submit</button>
            </div>
         </div>
    
    );
}

export default Feature;