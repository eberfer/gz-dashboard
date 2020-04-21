import React, { Component } from "react";
import "./Main.css"
import TopBar from "../TopBar/TopBar";
import DataBoxes from "./DataBoxes";
import Genre from "../Genre/Genre"
import LastProduct from "./LastProduct"

class Main extends Component {

    constructor (props) {
        super (props)
      this.state = {
        users: 0,
        productsAmount: 0,
        productsList: 0
      }
    }

    //funcion para llamar a la Api

    apiCall(url, consecuencia) {
      fetch(url)
      .then(response => response.json() )
      .then(data => consecuencia(data) )
      .catch(error => console.log(error)
      )
    }
// Funcion que devuelve el APICALL
    mostrarInfo = (data => {
      console.log(data)
      this.setState({
        productsAmount: data.meta.totalAmount,
        productsList: data.meta.totalGames
      })
    })
// Cuando el componente se monta,. hacemos el llamado a la API
    componentDidMount(){
      console.log("Montado");
      this.showGames()
    }

    showGames() {      
      this.apiCall("http://localhost:3000/api/games", this.mostrarInfo)
    }    

    render() {

      return  (
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
                {/* <!-- Amount of users, Total Price and Total amount of Games --> */}
                <DataBoxes 
                color="primary"
                boxName="Amount of Users"
                boxData={this.state.users}
                icon="fa-user-check"/>
                <DataBoxes 
                color="warning"
                boxName="Total Products"
                boxData={this.state.productsAmount}
                icon="fa-clipboard-list"/>
                <DataBoxes 
                color="danger"
                boxName="Total Price"
                boxData={this.state.productsList}
                icon="fa-dollar-sign"/>
                
              </div>
    ​
              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Last Product in DB --> */}
                <LastProduct />
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
}
export default Main;