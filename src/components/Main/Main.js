import React from "react";
import "./Main.css"
import TopBar from "../TopBar/TopBar";
import ProductsAmount from "./Data/ProductsAmount";
import ProductsValue from "./Data/ProductsValue";
import UsersAmount from "./Data/UsersAmount";
import Genre from "../Genre/Genre"

function Main(){
    return (
        <div id="content">
    ​
            {/* <!-- Topbar --> */}
            <TopBar/>
            {/* <!-- End of Topbar --> */}
    ​
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
    ​
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0">Game-Zone Dashboard</h1>
              </div>
    ​
              {/* <!-- My Webpage Content Row --> */}
              <div className="row">    ​
                {/* <!-- Amount of Products in DB --> */}
                <ProductsAmount/>    ​
                {/* <!-- $$$ of all products in DB --> */}
                <ProductsValue/>    ​
                {/* <!-- Amount of users in DB --> */}
                <UsersAmount/>
              </div>
    ​
              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Last Product in DB --> */}
                <div className="col-lg-6 mb-4">
                  <div className="mb-4">
                    <div className="boxHeaders solidBackground py-3">
                      <h6 className="m-0 font-weight-bold">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body background">
                      <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem;"}} src="assets/images/product_dummy.svg" alt="image dummy"/>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                      <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                  </div>
                </div>
    ​
                {/* <!-- Categories in DB --> */}
                <div className="col-lg-6 mb-4">						
                  <div className="mb-4">
                    <div className="boxHeaders solidBackground py-3">
                      <h6 className="m-0 font-weight-bold">Categories in Data Base</h6>
                    </div>
                    <div className="background">
                      <div className="row justify-content-around">
                        <Genre
                        name="1" />
                        <Genre
                        name="2" />
                        <Genre
                        name="3" />
                        <Genre
                        name="4" />
                        <Genre
                        name="5" />
                        <Genre
                        name="6" />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
    )
}
export default Main;