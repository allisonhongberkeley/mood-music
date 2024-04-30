import {React, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import Feature from './Feature'
import './Feature.css'


function ShowRecommendation() {
    const location = useLocation();
    const { data } = location.state || {};
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
         const fetchData = async () => {
             try {
    //             // Construct query parameters based on the selected features
    //             const queryParams = new URLSearchParams();
                 Object.entries(data).forEach(([feature, { min, max }]) => {
                     queryParams.append(feature.toLowerCase(), `${min},${max}`);
                 });

    //             // Make a request to the Spotify API
    //             const response = await fetch(`https://api.spotify.com/v1/recommendations?${queryParams.toString()}`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    //                     'Content-Type': 'application/json'
    //                 },
    //             });

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch recommendations');
    //             }

    //             const responseData = await response.json();
    //             setRecommendations(responseData.tracks || []);
             } catch (error) {
                 console.error('Error fetching recommendations:', error.message);
             }
         };

         if (data) {
             fetchData();
         }
         
    }, [data]);


      return (
        <div class="background">
        <div class="container"><Navbar></Navbar></div>
          <h2>you selected:</h2>
            {Object.entries(data).map(([feature, { min, max }]) => (
              <ul key={feature}>
                {feature}: {min} - {max}
              </ul>
            ))}
        <h2>your song rec is:</h2>

        </div>
      );
    }
  
  export default ShowRecommendation;