import React, { Component } from 'react';
import {NavLink ,Route ,Redirect} from 'react-router-dom';
import '../App/App.css';
import {macInfo} from '../../config/info';

export class Mac0 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={macInfo[0].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{macInfo[0].Model}</h3>
            <p className="card-text mt-3">{macInfo[0].specs} </p>
              <h3 className=" mt-3" > Price {macInfo[0].price} $</h3>
            <NavLink to="/macbook" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Mac1 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={macInfo[1].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{macInfo[1].Model}</h3>
            <p className="card-text mt-3">{macInfo[1].specs} </p>
              <h3 className=" mt-3" > Price {macInfo[1].price} $</h3>
            <NavLink to="/macbook" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Mac2 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={macInfo[2].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{macInfo[2].Model}</h3>
            <p className="card-text mt-3">{macInfo[2].specs} </p>
              <h3 className=" mt-3" > Price {macInfo[2].price} $</h3>
            <NavLink to="/macbook" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Mac3 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={macInfo[3].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{macInfo[3].Model}</h3>
            <p className="card-text mt-3">{macInfo[3].specs} </p>
              <h3 className=" mt-3" > Price {macInfo[3].price} $</h3>
            <NavLink to="/macbook" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Mac4 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={macInfo[4].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{macInfo[4].Model}</h3>
            <p className="card-text mt-3">{macInfo[4].specs} </p>
              <h3 className=" mt-3" > Price {macInfo[4].price} $</h3>
            <NavLink to="/macbook" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Mac5 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={macInfo[5].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{macInfo[5].Model}</h3>
            <p className="card-text mt-3">{macInfo[5].specs} </p>
              <h3 className=" mt-3" > Price {macInfo[5].price} $</h3>
            <NavLink to="/macbook" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
