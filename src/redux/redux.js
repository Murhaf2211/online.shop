import {createStore} from 'redux';

const initialState ={
  counter: [0,0,0,0,0,0],
  basket: []
}

const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch (action.type) {
    case 'update':
      const changeCounter = action.event.target.getAttribute('identity');
      updatedState.counter[changeCounter]= action.event.target.value;
      return updatedState;

    case 'plus':
      const increseCounter = action.event.target.getAttribute('identity');
      updatedState.counter[increseCounter]= parseInt(state.counter[increseCounter])+1;
      return updatedState;

    case 'minus':
      const decreseCounter = action.event.target.getAttribute('identity');
      if (updatedState.counter[decreseCounter]>0) {
        updatedState.counter[decreseCounter]= parseInt(state.counter[decreseCounter])-1;
        return updatedState;
      }else {
        return state;
      }

    case 'addOrder':
     const product = action.event.target.getAttribute('product');
     const price = parseFloat(action.event.target.getAttribute('price'));
     const buttonId = parseInt(action.event.target.getAttribute('buttoncounter'));
     const itemFound = updatedState.basket.find(item => item.product === product);
     if (itemFound){
       itemFound.quantity = parseInt(updatedState.counter[buttonId]);
     }else {
       const orderObject = {product: product, price: price, quantity:parseInt(updatedState.counter[buttonId])};
       if (updatedState.counter[buttonId] === 0) {
         return state;
      }else {
        updatedState.basket= [...state.basket, orderObject];
        updatedState.counter= [0,0,0,0,0,0];
      }
     }
     return updatedState;

     case "DelOrder":
        updatedState.basket = [];
        return updatedState;

    case "DelProducT":
     var buttonIndex = action.ev.target.getAttribute("id");
        const orders = Object.assign([], state.basket);
        orders.splice(buttonIndex, 1);
        updatedState.basket = orders;
        return updatedState;

    default:
      return state;
  }
}
export const updateCounter = ev => {
  return{type:'update', event: ev}
}
export const increment = ev => {
  return{type:'plus', event: ev}
}
export const decrement = ev => {
  return{type:'minus', event: ev}
}
export const addToBasket = ev => {
  return {type:'addOrder', event: ev}
}
export const deleteProduct = (ev) => {
  return{type: "DelProducT",ev: ev}
}
export const deleteOrder = () => {
   return{type: "DelOrder"}
}

export const store = createStore(reducer);
