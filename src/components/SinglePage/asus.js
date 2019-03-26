import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../App/App.css';
import {asusInfo} from '../../config/info';


export class Asus0 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={asusInfo[0].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{asusInfo[0].Model}</h3>
            <p className="card-text mt-3">{asusInfo[0].specs} </p>
              <h3 className=" mt-3" > Price {asusInfo[0].price} $</h3>
            <NavLink to="/asus" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Asus1 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={asusInfo[1].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{asusInfo[1].Model}</h3>
            <p className="card-text mt-3">{asusInfo[1].specs} </p>
              <h3 className=" mt-3" > Price {asusInfo[1].price} $</h3>
            <NavLink to="/asus" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Asus2 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={asusInfo[2].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{asusInfo[2].Model}</h3>
            <p className="card-text mt-3">{asusInfo[2].specs} </p>
              <h3 className=" mt-3" > Price {asusInfo[2].price} $</h3>
            <NavLink to="/asus" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Asus3 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={asusInfo[3].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{asusInfo[3].Model}</h3>
            <p className="card-text mt-3">{asusInfo[3].specs} </p>
              <h3 className=" mt-3" > Price {asusInfo[3].price} $</h3>
            <NavLink to="/asus" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Asus4 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={asusInfo[4].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{asusInfo[4].Model}</h3>
            <p className="card-text mt-3">{asusInfo[4].specs} </p>
              <h3 className=" mt-3" > Price {asusInfo[4].price} $</h3>
            <NavLink to="/asus" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Asus5 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={asusInfo[5].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{asusInfo[5].Model}</h3>
            <p className="card-text mt-3">{asusInfo[5].specs} </p>
              <h3 className=" mt-3" > Price {asusInfo[5].price} $</h3>
            <NavLink to="/asus" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
