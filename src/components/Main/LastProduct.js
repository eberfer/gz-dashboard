import React from "react";

function LastProduct(props){
    return(
        <div className="col-lg-6 mb-4">
                  <div className="mb-4">
                    <div className="boxHeaders solidBackground py-3">
                      <h6 className="m-0 font-weight-bold">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body background">
                      <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" width="25rem" src="" alt="dummy"/>
                      </div>
                      <h3> {props.title} </h3>
                      <p> {props.expansion} </p>
                      <p> {props.detail} </p>
                      <p> {props.price} </p>
                       
                      <a target="_blank" rel="nofollow" href={`https://localhost:3000/products/detail/${props.id}`} >View product detail</a>
                    </div>
                  </div>
                </div>

    )
}

export default LastProduct;