import { useState } from "react";
import './Buy.css';

function SingleProduct(props) {
  const newPrice = props.price.toLocaleString()
  // eslint-disable-next-line no-unused-vars
  const [myArray, updateMyArray] = useState([]);
    const [count, setCount] = useState(0);
    if(count<0){
      setCount(count+1)
    }
  return (
    <div className="App single-product">
      <div type="button" className="col">
          <div className="card h-100" id="cardHeight">
              <img
                // eslint-disable-next-line no-octal-escape
                src={props.image} id="imgHeight"
                className="card-img-top"
                alt={props.name}
              ></img>
            <div className="card-body">
              <h5 className="card-title">
                {props.name}<br></br>
                {props.discription}<br></br><br></br>
                price: {newPrice}$
                <span id="count">
                <span class="qty mt-5">
                        <span class="minus bg-dark" onClick={() => setCount(count - 1)}>-</span>
                        <span>{count}</span>
                        <span class="plus bg-dark" onClick={() => setCount(count + 1)}>+</span>
                </span>
              </span>
              <button id="cartCardBtn" onClick={() => {updateMyArray([props.price, props.name,count]);setCount(0);
              const cartData = {price:props.price*count,quantity:count,productName:props.name,customerId:props.id}
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cartData),
                credentials:"include"
            };
            if (count>0){
            fetch('http://localhost:3100/api/orders/addCart', requestOptions,{credentials:"include"})
            .then(response => response.json())
            .then(data => console.log(data));

              }}}>Add to cart</button>
            </h5>
          </div>
          </div>
        </div>
    </div>
  );
}
export default SingleProduct;