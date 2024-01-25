import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';

const MyProducts = () => {
    const [MyProd, setMyProd] = useState([]);
    const dispetch = useDispatch()
    useEffect(() => {
        const apiFetch = async () => {
            const result = await fetch('https://fakestoreapi.com/products');
            const data = await result.json()
            console.log(data);
            setMyProd(data);
        }
        apiFetch();
    }, []);

    const addHandler = (product)=>{
        dispetch(add(product))
    }

    return (
        <div className='wrapperClass'>
            {
                MyProd.map((product) => (
                    <div className='cart' key={product.id}>
                        <img style={{width:'150px'}} src={product.image} alt="no aimage" />
                        <div>
                            <h4>{product.title}</h4>
                            <h4>{product.price}</h4>
                            <button className='butn' onClick={()=>addHandler(product)}>Add Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MyProducts
