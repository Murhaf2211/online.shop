import React, { Component } from 'react';
import {NavLink ,Route ,Redirect} from 'react-router-dom';

export class Start extends Component {
  render() {
    return (
      <>
      <div className="container col-sm-10 pt-5 text-center bg-danger" >
       <div className="card-deck ">
        <div className="card border border-primary" >
         <img className="card-img-top" height="220vw" width="10vw" src="http://www.ccs-egypt.com/panel/servicesnew/1686079606Lenovo-IdeaPad-Z370-laptop.jpg" alt="Card image"/>
         <div className="card-body border" >
            <h4 className="card-title">LENOVO</h4>
            <p className="card-text">LENOVO IdeaPad 330, Notebook Radeon™ R4, Onxy Black Prozessor</p>
            <NavLink to="/lenovo" className="btn btn-primary">See More</NavLink>
          </div>
         </div>
         <div className="card border border-primary" >
          <img className="card-img-top" height="220vw" width="10vw" src="https://i.computer-bild.de/imgs/1/1/0/4/0/9/8/1/Asus-ZenBook-Flip-658x370-da20989343d2e034.jpg" alt="Card image"/>
          <div className="card-body">
             <h4 className="card-title">ASUS</h4>
             <p className="card-text">ASUS FX705DY-AU040T, Gaming Notebook, Ryzen 5 Prozessor</p>
             <NavLink to="/asus" className="btn btn-primary">See More</NavLink>
           </div>
          </div>
          <div className="card border border-primary" >
           <img className="card-img-top" height="220vw" width="10vw" src="https://photos5.appleinsider.com/gallery/26721-38820-macbook-back-to-school-buyers-guide-l.jpg" alt="Card image"/>
           <div className="card-body">
              <h4 className="card-title">MACBOOK</h4>
              <p className="card-text">APPLE MacBook Pro MR932D/A mit deutscher Tastatur, Notebook</p>
              <NavLink to="/macbook" className="btn btn-primary">See More</NavLink>
            </div>
           </div>
       </div>
     </div>
     
      </>
    )
  }
}
