import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../App/App.css';
import {lenovoInfo} from '../../config/info';


export class Lenovo0 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger "  >
         <img className=" rounded mx-auto d-block mt-5"  src={lenovoInfo[0].pic} alt="Card image"/>
         <div className="card-body mt-3">
            <h3 className="card-title mt-3">{lenovoInfo[0].Model}</h3>
            <p className="card-text mt-3"> Lenovo Yoga 530 Slim Notebook, Core™ i5 Prozessor, 8 GB RAM, 256 GB SSD, Intel HD-Grafik 620,
            Iron Grey Prozessor: Intel® Core™ i5-7200U Prozessor (bis zu 3,10 GHz mit Intel®...
              Arbeitsspeicher-Größe: 8 GB Betriebssystem: Windows 10 Home
              Festplatte 1: SSD , 256 GB , SATA Grafikkarte: Intel HD-Grafik 620
              Bildschirmmerkmale: Entspiegelt</p>
              <h3 className=" mt-3" > Price {lenovoInfo[0].price} $</h3>
            <NavLink to="/lenovo" className="btn btn-primary mt-3">Back</NavLink>
          </div>
         </div>
    </>
  )
}
}
export class Lenovo1 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger" >
         <img className="rounded mx-auto d-block mt-5" src={lenovoInfo[1].pic} alt="Card image"/>
         <div className="card-body">
            <h4 className="card-title">{lenovoInfo[1].Model}</h4>
            <p className="card-text">LENOVO IdeaPad 320, Notebook, A6 Prozessor, 8 GB RAM, 1 TB HDD,
             Radeon™ R4, Onxy Black Prozessor: AMD A6-9225 Arbeitsspeicher-Größe: 8 GB
             Arbeitsspeicher-Konfiguration: 1x 8 GB Betriebssystem: Windows 10 Home Festplatte 1: HDD ,
             1 TB , 5400 U/Min. , SATA Grafikkarte: Radeon™ R4</p>
             <h3> Price {lenovoInfo[1].price} $</h3>
            <NavLink to="/lenovo" className="btn btn-primary">Back</NavLink>
          </div>
        </div>
     </>
  )
}
}
export class Lenovo2 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger" >
         <img className="rounded mx-auto d-block mt-5" src={lenovoInfo[2].pic} alt="Card image"/>
         <div className="card-body">
            <h4 className="card-title">{lenovoInfo[2].Model}</h4>
            <p className="card-text">Lenovo IdeaPad 330s Notebook, Core i7 Prozessor, 16 GB RAM, 256 GB SSD, Radeon™ Pro 555X,
            Space Gra Prozessor: 2,2 GHz 6-Core Intel Core i7 (Turbo Boost bis zu 4,1 GHz) mit 9 MB...
             Arbeitsspeicher-Größe: 16 GB Betriebssystem: macOS High Sierra Festplatte 1: SSD ,
              256 GB Grafikkarte: Radeon™ Pro 555X</p>
              <h3> Price {lenovoInfo[2].price} $</h3>
            <NavLink to="/lenovo" className="btn btn-primary">Back</NavLink>
            </div>
          </div>
    </>
  )
}
}
export class Lenovo3 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger" >
         <img className="rounded mx-auto d-block mt-5" src={lenovoInfo[3].pic} alt="Card image"/>
         <div className="card-body">
            <h4 className="card-title">{lenovoInfo[3].Model}</h4>
            <p className="card-text">Lenovo ThinkPad T440s Notebook, Core i7 Prozessor, 16 GB RAM, 256 GB SSD, Radeon™ Pro 555X,
            Space Gra Prozessor: 2,2 GHz 6-Core Intel Core i7 (Turbo Boost bis zu 4,1 GHz) mit 9 MB...
             Arbeitsspeicher-Größe: 16 GB Betriebssystem: macOS High Sierra Festplatte 1: SSD ,
              256 GB Grafikkarte: Radeon™ Pro 555X</p>
              <h3> Price {lenovoInfo[3].price} $</h3>
            <NavLink to="/lenovo" className="btn btn-primary">Back</NavLink>
            </div>
          </div>
    </>
  )
}
}
export class Lenovo4 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger" >
         <img className="rounded mx-auto d-block mt-5" src={lenovoInfo[4].pic} alt="Card image"/>
         <div className="card-body">
            <h4 className="card-title">{lenovoInfo[4].Model}</h4>
            <p className="card-text">Lenovo IdeaPad 330 Notebook, Core i7 Prozessor, 16 GB RAM, 256 GB SSD, Radeon™ Pro 555X,
            Space Gra Prozessor: 2,2 GHz 6-Core Intel Core i7 (Turbo Boost bis zu 4,1 GHz) mit 9 MB...
             Arbeitsspeicher-Größe: 16 GB Betriebssystem: macOS High Sierra Festplatte 1: SSD ,
              256 GB Grafikkarte: Radeon™ Pro 555X</p>
              <h3> Price {lenovoInfo[4].price} $</h3>
            <NavLink to="/lenovo" className="btn btn-primary">Back</NavLink>
            </div>
          </div>
    </>
  )
}
}
export class Lenovo5 extends Component {
  render() {
    return (
      <>
        <div className="container card text-center mx-auto bg-danger" >
         <img className="rounded mx-auto d-block mt-5"  src={lenovoInfo[5].pic} alt="Card image"/>
         <div className="card-body">
            <h4 className="card-title">{lenovoInfo[5].Model}</h4>
            <p className="card-text">Lenovo ThinkPad T410 Notebook, Core i7 Prozessor, 16 GB RAM, 256 GB SSD, Radeon™ Pro 555X,
            Space Gra Prozessor: 2,2 GHz 6-Core Intel Core i7 (Turbo Boost bis zu 4,1 GHz) mit 9 MB...
             Arbeitsspeicher-Größe: 16 GB Betriebssystem: macOS High Sierra Festplatte 1: SSD ,
              256 GB Grafikkarte: Radeon™ Pro 555X</p>
              <h3> Price {lenovoInfo[5].price} $</h3>
            <NavLink to="/lenovo" className="btn btn-primary">Back</NavLink>
            </div>
          </div>
    </>
  )
}
}
