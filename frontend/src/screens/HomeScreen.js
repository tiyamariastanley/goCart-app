import React, { useEffect} from "react";
import CardTemplate from "../CardTemplate";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Error from "../error";
import Loading from "../loading";


function HomeScreen(){
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts()); 
    }, [dispatch]);
    
    return(
        <div>
            {loading?<Loading></Loading>:(
                 error?<Error imgSrc="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png" heading="We couldn't find any matches!" para="Please check the spelling or try searching something else"></Error>:
             
                <div className="top row center">
                    {
                        products.map((product,index) => (
                        <CardTemplate key={product._id}  product={product} ></CardTemplate>
                        ))
                    }
                </div>
             )
                }
        </div>
    );
}

export default HomeScreen; 