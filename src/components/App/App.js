import React, { Component } from 'react';
import './App.css';
import {BrowserRouter ,NavLink ,Route ,Redirect} from 'react-router-dom';
import {Start} from '../StartPage/StartPage';
import {LenovoContainer} from '../BrandPage/BrandPage1';
import {AsusContainer} from '../BrandPage/BrandPage2';
import {MacContainer} from '../BrandPage/BrandPage3';
import {Lenovo0, Lenovo1, Lenovo2, Lenovo3, Lenovo4, Lenovo5} from '../SinglePage/lenovo';
import {Asus0, Asus1, Asus2, Asus3, Asus4, Asus5} from '../SinglePage/asus';
import {Mac0, Mac1, Mac2, Mac3, Mac4, Mac5} from '../SinglePage/mac';
import {BasketContainer} from '../basket/basket';
import {Confirm} from '../basket/confirm';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <section className="bg-danger">
       <div className="navbar  bg-danger  sticky-top justify-content-center ">
        <NavLink to="/" className="navbar-brand ">Home Page</NavLink>
        <NavLink to="/lenovo" className="nav-link active ">Lenovo</NavLink>
        <NavLink to="/asus" className="nav-link active ">Asus</NavLink>
        <NavLink to="/macbook" className="nav-link active ">macbook</NavLink>
       </div>
        <Route path="/" exact component={Start} />
        <Route path="/" exact component={BasketContainer} />

        <Route path="/lenovo" exact component={LenovoContainer} />
        <Route path="/lenovo"  exact component={BasketContainer} />
        <Route path="/asus" exact component={AsusContainer} />
        <Route path="/asus"  exact component={BasketContainer} />
        <Route path="/macbook" exact component={MacContainer} />
        <Route path="/macbook"  exact component={BasketContainer} />

        <Route path="/lenovo/lenovo0"  component={Lenovo0} />
        <Route path="/lenovo/lenovo1"  component={Lenovo1} />
        <Route path="/lenovo/lenovo2"  component={Lenovo2} />
        <Route path="/lenovo/lenovo3"  component={Lenovo3} />
        <Route path="/lenovo/lenovo4"  component={Lenovo4} />
        <Route path="/lenovo/lenovo5"  component={Lenovo5} />

        <Route path="/asus/asus0"  component={Asus0} />
        <Route path="/asus/asus1"  component={Asus1} />
        <Route path="/asus/asus2"  component={Asus2} />
        <Route path="/asus/asus3"  component={Asus3} />
        <Route path="/asus/asus4"  component={Asus4} />
        <Route path="/asus/asus5"  component={Asus5} />

        <Route path="/mac/mac0"  component={Mac0} />
        <Route path="/mac/mac1"  component={Mac1} />
        <Route path="/mac/mac2"  component={Mac2} />
        <Route path="/mac/mac3"  component={Mac3} />
        <Route path="/mac/mac4"  component={Mac4} />
        <Route path="/mac/mac5"  component={Mac5} />

        <Route path="/baskit"  component={BasketContainer} />
        <Route path="/confirmation" component={Confirm} />

       </section>
      </BrowserRouter>
    )
  }
}
