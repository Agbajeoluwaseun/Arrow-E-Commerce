import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice"
import {Tooltip} from "@material-tailwind/react"



const Product = () => {

 
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);

    const Loading = () => {
        return(
            <>
            <div className="col-md-6"> 
            <Skeleton height={400} />
            </div>
            <div className="col-md-6" style={{lineHeight:2}} >
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150}/>
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100}/>
            <Skeleton height={50} width={100} style={{marginLeft:6}} />
            </div>
            </>
        );
    };

    const ShowProduct = () => {
        return(
            <div className="content">
            <div className="col-md-6" >
            <img src={product.image} alt={product.title} height="400px" width="400px" />  </div>
            <div className="col-md-6" >
            <h6 className="text-uppercase text-black-50" > {product.category} </h6>
            <h2 classname="display-5" > {product.title} </h2>
            <p className="lead fw-bolder "> Rating {product.rating && product.rating.rate} <i className="fa fa-star"> </i></p> 
            <h3 className="display-6 fw-bolder my-4"> ${product.price}</h3>
            <p className="lead"> {product.description} </p>

          <Tooltip>
            <button 
            className="btn btn-outline-dark px-4 py-2" 
            onClick={()=> 
              dispatch(
                    addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    amount: 1,
                    totalPrice: product.price,
                    img: product.image
            }))}
            >Add To Cart
            </button>
            </Tooltip>

            
            </div>
           
            </div>
        )
    }

      return (

    <div>
    <div className="container py-5">
    <div className="row py-4">
    {loading ? <Loading/> : <ShowProduct/> }
    </div>
    </div>
    </div>
  );
}

      export default Product