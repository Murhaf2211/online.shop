import React, {Component} from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import {lenovoInfo, asusInfo, macInfo} from '../../config/info';
import {connect} from 'react-redux';
import {deleteOrder, deleteProduct} from "../../redux/redux";


class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {orderSubmitted: false};
    this.submitOrder = this.submitOrder.bind(this);
  }

  submitOrder(ev) {
    this.setState({orderSubmitted: true});
  }

  componentWillUnmount() {
    this.setState({orderSubmitted: false});
  }
  calculateOrder(){
     return this.props.basket.reduce((a,b) => a + b.quantity * b.price, 0);
  }

  render() {
    return (
      <>
       <div className=" container float-center col-sm-5 pt-5 pb-5">
        <div className="card text-center">
         <h4 className="card-header bg-primary">MY Basket</h4>
         <div className="card-body">
         {this.props.basket.map((model, index) => {
          return (
            <div className="card-body text-center" key='index'>
             <h5 className="card-title">{model.product}</h5>
             <input type="text" className="text-center" identity={index} value={model.quantity}/>
             <h7> Price {model.quantity*model.price} $</h7>
             <button id={index}  onClick={this.props.deleteProduct} className="my-2 mx-2 align-self-end btn btn-danger">Cancel</button><hr/>
            </div>
                )
               })
             }
         </div>
         <h5 className="card-footer bg-success">The Total Price is {this.calculateOrder()}€</h5>
         <button onClick={this.props.deleteOrder} className=" btn btn-danger">Clear the Basket</button>
         <button className=" btn btn-primary" onClick={this.submitOrder}>Ready to buy </button>
         {this.state.orderSubmitted && <Redirect to="/confirmation" />}
        </div>
       </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    basket:state.basket,
  }
}
const mapStateToDispatch = dispatch => {
   return{
     deleteOrder: () => dispatch(deleteOrder()),
     deleteProduct: (ev) => dispatch(deleteProduct(ev))
   }
}

export const BasketContainer = connect(mapStateToProps, mapStateToDispatch)(Basket)
