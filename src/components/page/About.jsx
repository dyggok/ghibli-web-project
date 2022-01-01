import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import '../../base.css';

function About(props){

  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
  }, [])
      
   
return <>
        <div className="container mb-5">
          <div className="row">
            <div className="text-center my-5 col-md-12">
                <h2 className="text-muted">About Studio Ghibli</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5 pb-5">
              {data.filter(d => d.title == "My Neighbor Totoro").map(d => 
                  <img src={d.movie_banner} className="aboutPhoto" alt="image"/>
              )}
            </div>
            <div className="offset-1 col-md-7">
              <p>Studio Ghibli was founded in 1985 by animated film directors Isao Takahata and Hayao Miyazaki, and has produced twenty-two feature-length films.  
                Most Studio Ghibli films ranked number one at the box office in Japan in the year in which they were released.  
                SPIRITED AWAY, directed by Hayao Miyazaki and released in 2001, is the all-time highest grossing film in Japan, earning over 30 billion yen at the box office.</p>
              <p>
              Studio Ghibli films have garnered numerous awards and critical acclaim from film critics and animation specialists around the world.  
              SPIRITED AWAY was awarded the Golden Bear as the Best Feature Film at the 2002 Berlin International Film Festival and won the 2002 Academy Award for Best Animated Feature Film.  
              In October 2001, Studio Ghibli, in conjunction with The Tokuma Memorial Cultural Foundation for Animation, founded the Ghibli Museum, Mitaka, designed by Hayao Miyazaki.
              </p>
            </div>
          </div>
        </div>
    </>
}

export default About;