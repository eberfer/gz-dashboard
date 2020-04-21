import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <React.Fragment>
    
    <div id="wrapper">
    {/* <!-- Sidebar --> */}
    <LeftMenu/>    ​
    {/* <!-- Content Wrapper --> */}
    <div id="content-wrapper" className="d-flex flex-column">    ​
    {/* <!-- Main Content --> */}
    <Main/>    ​
    {/* <!-- Footer --> */}
    <Footer/>
        ​
    </div>
    {/* <!-- End of Content Wrapper --> */}    ​
    </div>
    {/* <!-- End of Page Wrapper --> */}
    </React.Fragment>
    );
  }
  
  export default App;
  