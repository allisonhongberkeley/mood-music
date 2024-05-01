import {React, useState, useEffect} from 'react';
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import './Feature.css'


function ShowRecommendation() {
    const location = useLocation();
    const { data } = location.state || {};
    const [isLoaded, setIsLoaded] = useState(false);
    const [recommendations, setRecommendations] = useState([]);

    const fetchData = async () => {
      try {
          const min_danceability  = (data.Loudness.min * 0.1).toFixed(1);
          const max_danceability = (data.Loudness.max * 0.1).toFixed(1);
          const min_energy = (data.Energy.min * 0.1).toFixed(1);
          const max_energy = (data.Energy.max * 0.1).toFixed(1);
          const min_acousticness = (data.Acousticness.min * 0.1).toFixed(1);
          const max_acousticness = (data.Acousticness.max * 0.1).toFixed(1);
          const min_instrument = (data.Instrumentalness.min * 0.1).toFixed(1);
          const max_instrument = (data.Acousticness.max * 0.1).toFixed(1);
          const min_liveness = data.Liveness.min * 0.1;
          const max_liveness = data.Liveness.max * 0.1;
          const min_loudness = (data.Loudness.min * 0.1).toFixed(1);
          const max_loudness = (data.Loudness.max * 0.1).toFixed(1);
          const min_tempo = (data.Tempo.min * 0.1).toFixed(1);
          const max_tempo = (data.Tempo.max * 0.1).toFixed(1);

         const seedGenres = ["classical","country","pop","world-music"]
         const seedArtist = "4NHQUGzhtTLFvgF5SZesLK";

         console.log(isLoaded);

         const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_artists${seedArtist}&seed_genres=${seedGenres}&
           min_acousticness=${min_acousticness}&max_acousticness=${max_acousticness}&
           min_energy=${min_energy}&max_energy=${max_energy}&
           min_tempo=${min_tempo}&max_energy=${max_tempo}&
           min_loudness=${min_loudness}&max_loudness=${max_loudness}&
           min_liveness=${min_liveness}&max_liveness=${max_liveness}&
           min_instrument=${min_instrument}&max_instrument=${max_instrument}&
           min_danceability=${min_danceability}&max_danceability=${max_danceability}&
           limit=1`, {
           method: 'GET',
           headers: {
               'Authorization': 'Bearer ACCESS_TOKEN',
               'Content-Type': 'application/json'
           }
       });
         

          if (!response.ok) {
              throw new Error('Failed to fetch recommendations');
          }

          const responseData = await response.json();
          const trackName = responseData.tracks[0].album.name;
          const artistName = responseData.tracks[0].album.artists[0].name;
          console.log(trackName);
          console.log(artistName);
          setRecommendations([trackName, artistName] || []);
          setIsLoaded(true);
      } catch (error) {
          console.error('Error fetching recommendations:', error.message);
      };
  }

    const handleSubmit = () => {

      fetchData();
    };


      return (
        <div class="background">
        <div class="container"><Navbar></Navbar></div>
          <h2>you selected:</h2>
            {Object.entries(data).map(([feature, { min, max }]) => (
              <ul key={feature}>
                {feature}: {min} - {max}
              </ul>
            ))}
            <div class="container">
                <button class="button" onClick={handleSubmit}>click for recommendation!</button>
            </div>
        {isLoaded && <h2>your song rec is: {`${recommendations[0]} by ${recommendations[1]}`}</h2>}
        

        </div>
      );
    }
  
  export default ShowRecommendation;