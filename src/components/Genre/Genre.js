import React from "react";
import "./Genre.css"

function Genre(props){
  return(
    <div className="col-lg-5 mb-2">
      <a href="#">
        <div className="card-body genreBox">
          <strong> {props.name} </strong>
        </div>
      </a>
    </div>
    )
  }
  
  export default Genre;