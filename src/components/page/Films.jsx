import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import '../../base.css';
import { Table } from "react-bootstrap";
import Box from '@material-ui/core/Box';

function Films(props){
  const [data, setData] = useState([])
  const headName = [{title: "Title", original_title: "Original Title", original_title_romanised: "Original Title (Romanised)", release_date: "Release Date"}]
  useEffect(() => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
  }, [])

  function renderBody(columns, row){
    return (Object.keys(columns[0]).map(headIndex => {
      return (Object.keys(row).map(rowIndex => {
        if(headIndex == rowIndex){
          if(rowIndex == "title"){
            return <td id="tabletd"><Link to={`${row['id']}`}>{row[rowIndex]}</Link></td>
          }else{
            return <td id="tabletd">{row[rowIndex]}</td>
          }
            
        }
      }))
    }))
  }
    return <>
      <Box className="m-5">
        <Table hover id="table">
        <thead>
        <tr>
          {Object.keys(headName[0]).map(headIndex => 
              <th>{headName[0][headIndex]}</th>
              
              )}
        </tr>
        </thead>
        <tbody>
            {
              data.map(row => {
                 return <tr>
                   {renderBody(headName, row)}
                 </tr>
                }
              
              )
            }
        </tbody>
        </Table>
      </Box>
    </>
}

export default Films;