import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {

    const select = useSelector((state) => state.AllCarts)
    const dispetch = useDispatch()


    function removeHandler(prodictid){
        dispetch(remove(prodictid))
    }

    return (
            <div className='wrapperClass'>
            {
                select.map((product) => (
                    <div className='cart' key={product.id}>
                        <img style={{width:'150px'}} src={product.image} alt="no aimage" />
                        <div>
                            <h4>{product.title}</h4>
                            <h4>{product.price}</h4>
                            <button className='butn' onClick={()=>removeHandler(product.id)}>Remove Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart
