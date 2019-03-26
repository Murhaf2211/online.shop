import React, { Component } from 'react';
import {NavLink ,Route ,Redirect} from 'react-router-dom';
import {asusInfo} from '../../config/info';
import {connect} from 'react-redux';
import {updateCounter, increment, decrement, addToBasket} from '../../redux/redux';


export class Brand2 extends Component {
  render() {
    return (
      <>
      <div className="card-columns">
      {asusInfo.map((model, index) => {
        let path ='/asus/asus'+index;
        return (
          <div className="container p-1" key={index}>
           <div className="card" text="center">
            <img className="card-img-top" height="220vw" width="10vw" src={model.pic} alt="Card image"/>
            <div className="card-body text-center">
               <h4 className="card-title">{model.Model}</h4>
               <p className="card-text">{model.specs}</p>
               <button onClick={this.props.decrement} identity={index}>-</button>
               <input type="text" className="text-center" onChange={this.props.changeValue} identity={index} value={this.props['counter'+index]} />
               <button onClick={this.props.increment} identity={index}>+</button><br/>
               <h3> Price {model.price} $</h3>
               <button buttoncounter={index} product={model.Model} price={model.price} className="btn btn-success" onClick={this.props.addToBasket}>Add to Basket</button>
               <NavLink to={path} className="btn btn-primary ml-5">See More</NavLink>
             </div>
            </div>
          </div>

               )
            })
          }
       </div>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    counter0: state.counter[0],
    counter1: state.counter[1],
    counter2: state.counter[2],
    counter3: state.counter[3],
    counter4: state.counter[4],
    counter5: state.counter[5]
    }
  }
const mapDispatchToProps = dispatch => {
  return {
    changeValue: ev => dispatch(updateCounter(ev)),
    increment: ev => dispatch(increment(ev)),
    decrement: ev => dispatch(decrement(ev)),
    addToBasket: ev => dispatch(addToBasket(ev))
  }
}

export const AsusContainer = connect(mapStateToProps, mapDispatchToProps)(Brand2)
