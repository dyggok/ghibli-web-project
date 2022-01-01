import React from "react";
import { Carousel } from "react-bootstrap";
import SearchFilm from "./SearchFilm";

function Home(props){
    return (
      <>
        <section className="about section">
        <Carousel>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../img/Ghibli-Hero-1-New.jpg")}
              alt="First slide"
            ></img>
             <Carousel.Caption className="caption-img">
              <h3>Spirited Away</h3>
              <p>"Nothing less than magical!" – Joe Morgenstern, The Wall Street Journal</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../img/Mononoke-Hero-Desktop.jpg")}
              alt="second slide"
            ></img>
             <Carousel.Caption className="caption-img">
              <h3>Princess Mononoke</h3>
              <p>"This intricate, epic fable is amazing to behold" – Janet Maslin, The New York Times</p>
            </Carousel.Caption>            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../img/Castle-Hero-2.jpg")}
              alt="third slide"
            ></img>
             <Carousel.Caption className="caption-img">
              <h3>Castle in the Sky</h3>
              <p>"Stunning! A masterpiece of action filmmaking!" – Leonard Maltin</p>
            </Carousel.Caption>            
          </Carousel.Item>
          
        </Carousel>
      </section>
      <SearchFilm/>
      </>
    )
}

export default Home;