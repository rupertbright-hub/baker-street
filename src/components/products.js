import React from 'react'
import { Pmage, Present} from '../assets/img'
import {data} from '../data/challenge'

function products() {

  const num = data.length-1

return (
    <div className='products-container'>
            <h2>Products</h2>
            {data.map((el, index) => (
            <div>
                <div className={(index === num ?'product-item-last': 'product-item')}>
                <input type="checkbox"></input>
                <img src={(index !== num) ? Pmage : Present } className={(index !== num ? 'img1': 'img2')} alt='img'></img>
                {(index !== num) ?  (
                <div>
                    <h3>{el.heading}</h3>
                    <p>{el.paragraph}</p>
                </div>) : (<div className='last-container'>
                    <p>{el.heading}</p>
                    <p>{el.paragraph}</p>
                </div>)}
            </div>
        </div>
        ))}
    </div>
);}

export default products
