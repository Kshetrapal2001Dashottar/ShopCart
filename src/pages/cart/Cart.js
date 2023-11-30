/** @format */
import { useContext } from "react";
import { cartContext } from "../../context/Context";
import "../../App.css";
import { Button } from 'antd'


const Cart = () => {
  const globalState = useContext(cartContext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.quantity * item.price}</p>
            <div className="quantity">
              <Button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </Button>
              <p>{item.quantity}</p>
              <Button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </Button>
            </div>
            <h2 style={{ cursor: 'pointer' }} onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>{total.toFixed(2)}</h2>
        </div>
      )}

      {state.length === 0 ? <div className="emptyCart"><p>The Cart is empty</p></div> : <div></div>}

    </div>
  );
};

export default Cart;