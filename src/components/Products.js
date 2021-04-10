import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'
import {Link} from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useContext(DataContext)
    const [cart, setCart] = useState([]);
    

    const addToCart = (product) => {
        console.log('atc');
        setCart([...cart, product]);
        
        
    }
    return (
        <>
        <button>Go To Cart ({cart.length})</button>
        <div className='products'>
            
            {
                products.map(product => (<div className='card' key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt='image' />
                    </Link>
                    <div className="box">

                        <span><strong><Link to={`/products/${product.id}`}>{product.title}</Link></strong></span>
                        <br/>
                        <span id='rating'><strong>Good</strong><sub>{product.rating}</sub></span>

                        <span id='meta'>{product.meta}</span>
                        <p>{product.description}</p>
                        <button onClick={() => addToCart(product)} className='btn'>add to cart</button>
                    </div>



                </div>))
            }




        </div>
        </>




    )
}