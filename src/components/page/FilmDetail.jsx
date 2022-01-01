import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FilmDetail(props){
    const [data, setData] = useState([]);
    const inf = [{original_title: "Original Title", original_title_romanised: "Original Title (Romanised)", release_date: "Release Date", 
    producer: "Producer", director: "Director", rt_score: "Rate Score", running_time: "Running Time", description: "Description" }]
    const params = useParams();
    console.log(data)

    useEffect(() => {
      fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(json => setData(json)
    )
    }, [])

    function renderInformation(data, columns){
        return(
          Object.keys(columns[0]).map(i => {
            return Object.keys(data).map(dataIndex => {
              console.log(dataIndex);
              console.log(i);
              if(dataIndex == i){
                return <li><b>{columns[0][i]}: </b>{data[dataIndex]}</li>
              }
            })
          })
        )
    }

    return <>
      <div className="col-md-12 container">
          {data.filter(d => d.id == params.filmId).map(d => {
            return(
              <>
              <div className="col-md-12 fs-3 fw-bold text-center m-5">{d.title}</div>
              <div className="row">
                  <div className="offset-2 col-md-4 mb-5">
                    <img src={d.image} alt="image" id="filmdetailImage"/>
                  </div>
                  <div className="col-md-6 ">
                    <ul>
                      {renderInformation(d, inf)}
                    </ul>
                  </div>
              </div>
              </>
            )
          })}
      </div>
    
    </>
}

export default FilmDetail;