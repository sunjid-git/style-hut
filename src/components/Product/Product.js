import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const Product = () => {
    
    const {id} = useParams();

    console.log("title",id);
    // console.log("title",typeof id);

    const [products, setProducts] = useState([]);
 
    const url = `https://fakestoreapi.com/products/${parseInt(id)}`;
    // console.log("URL - ",url);

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            console.log('data', data)
        })
    },[])



    return (
        <div>
            
            <Link to="/">Go Back</Link>

        </div>
    )
}

export default Product
