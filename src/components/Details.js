import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import { DataContext } from './DataProvider'

export default function Details(){
    const {id} = useParams();
    const [products, setProducts] = useContext(DataContext)
    const [cart, setCart] = useState([]);
    

    const addToCart = (product) => {
        console.log('atc');
        setCart([...cart, product]);
        
        
    }
    

    const details = products.filter((product, index) => {
        return product.id == id
    })
    console.log(details)
    return(
        <>
<button>Go To Cart ({cart.length})</button>
            {
                
                details.map(product =>(
                    <div className='details' key={product.id}>
                        
                        
                        <div className='img-container'>
                        <img src={product.image} />
                        </div>

                        <div className='box-details'>
                            <h2>{product.title}</h2>
                            <h3>{product.meta}</h3>
                            <p>{product.description}</p>
                            <h4>{product.rating}</h4>
                            <button onClick={() => addToCart(product)} className='btn'>add to cart</button>

                        </div>

                    </div>
                ))

            }
        </>
    )
}