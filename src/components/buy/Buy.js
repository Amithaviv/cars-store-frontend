/* eslint-disable jsx-a11y/anchor-is-valid */
import SingleProduct from "./SingleProduct"
import { getProducts } from "../.././DAL/serverFunctions";
import { useState, useEffect } from "react";
import './Buy.css';
import React from 'react';
import {
  MDBFooter,
  
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

function Buy(){
    const [products, setProducts] = useState([])

    useEffect(() => {
      async function getData() {
        setProducts(await getProducts())
      }
      getData()
    }, [])
    return (
      <div className="App">
        <div id="cards" className="row row-cols-1 row-cols-sm-6 g-4">
      {
        products.map(({name, price, image, discription}, index) => <SingleProduct key={index} name={name} discription={discription} price={price} image={image} id={1}></SingleProduct> )
      }
      </div>
      <MDBFooter>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: 
        <a className='text-reset fw-bold'>
          Car Store
        </a>
      </div>
    </MDBFooter>
      </div>
    );
}
export default Buy