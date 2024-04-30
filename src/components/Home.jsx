import React from 'react';
import { useNavigate } from "react-router-dom";
import Feature from './Feature'
import noteLogo from '../assets/note.svg'
import './Home.css'


function Home() {

    const navigate = useNavigate()

    const goToBrowse=()=>{
        navigate("/feature");
      }

    return (
      <>
      <div>
        <h1>welcome to mood music!</h1>
        <div>
          <a href="https://open.spotify.com/" target="_blank">
            <img src={noteLogo} className="logo" alt="Music note logo" />
          </a>
        </div>
        <button onClick={goToBrowse}>browse</button>
        {/* <nav>
          <ul>
            <Link to="/feature">
            <button>browse</button>
            </Link>
          </ul>
    </nav> */}
        </div>
    </>
    )
  }
  
  export default Home;