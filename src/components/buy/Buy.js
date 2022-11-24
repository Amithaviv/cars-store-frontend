import SingleProduct from "./SingleProduct"
import { getProducts } from "../.././DAL/serverFunctions";
import { useState, useEffect } from "react";
import './Buy.css';

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
        products.map(({name, price, image, discription}, index) => <SingleProduct key={index} name={name} discription={discription} price={price} image={image}></SingleProduct> )
      }
      </div>
      </div>
    );
}
export default Buy