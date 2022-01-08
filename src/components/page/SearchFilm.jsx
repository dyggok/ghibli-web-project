import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../../base.css';

function SearchFilm(props){
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get('q'));
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(json => {
        setData(json);  
      })
    }, [])

  function formHandler(event){
    event.preventDefault();
    setQ(event.target.q.value);
    navigate(`/search-film?q=${event.target.q.value}`)
  }

  function filmDetailHandler(id){
    navigate(`/films/${id}`);
  }

    return (
      <>
      <div className="container">
        <form className="col-md-8 my-5" onSubmit={formHandler}>
          <div className="mb-3 ">
            <label htmlFor="search" className="form-label fs-3">Search Ghibli Films</label>
            <input type="text" name="q" className="form-control" id="search" defaultValue={q}/>
            <div id="search" className="form-text">Love STUDIO GHIBLI as much as we do?</div>
          </div>
          <button type="submit" className="btn text-light btn-lg">Search</button>
        </form>
      </div>
      {
        <div className="row">
          { ((q !== "" && q !== " ")  &&
            data.filter(d => d.title.toLowerCase().includes(q)).map(
            result => 
            <div className="container col-md-3 my-3">
              <div className="card ml-3">
              <img src={result.image} className="card-img-top" alt="iamge" id="searchImage"/>
              <div className="card-body">
                <h5 className="card-title">{result.title}</h5>
                <p className="card-text">{result.original_title}</p>
                <button className="btn text-light" onClick={() => filmDetailHandler(result.id)}>Details</button>
              </div>
            </div>
            </div>
              
            ))}
            </div> 
      }
      </>
    )
}

export default SearchFilm;