import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle, useLoading } from "@agney/react-loading";
import { detailsProduct } from "../actions/productActions";
import Error from "../error";


function ProductScreen(props){
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <BallTriangle width="50" />
      });
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector( state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() =>{
        dispatch(detailsProduct(productId));
        console.log(detailsProduct(productId));
    },[dispatch,productId])

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=1`);
      };

    return(
    <div>
        {loading?<section {...containerProps}>{indicatorEl} </section>:
        (
            error?<Error imgSrc="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png" heading="We couldn't find any matches!" para="Please check the spelling or try searching something else"></Error>:
            <div className="row center pdetails">
                <div className="">
                    <img className="medium" src={product.img} alt=""/>
                </div>
                <div className="">
                    <h4>{product.brand} {product.name}</h4>
                    <p>{product.des}</p>
                    <Button variant="outlined" size="small"><MessageIcon></MessageIcon> {product.numReviews} Reviews</Button>
                    <hr></hr>
                    <h4 className="price">Rs.{product.price}</h4>
                    <p style={{color:"green"}}>inclusive of all taxes</p>
                    <Button variant="contained" color="secondary" onClick={addToCartHandler}>Add to Bag</Button>
                </div>
            </div>
        )
        }      
        </div>
    )
}

export default ProductScreen; 