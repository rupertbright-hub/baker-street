import React from 'react'
import { Pmage, Present} from '../assets/img'
import {data} from '../data/challenge'


function products() {

  const num = data.length-1

return (
    <div className='products-container'>
        <h2>Products</h2>
        {data.map((product, index) => (
        <div key={index}>
            <div className={(index === num ?'product-item-last': 'product-item')}>
                <div className='checkbox-position'>
                    <input className={(index === num ?'inp-cbx2': 'inp-cbx')} id={index} type="checkbox" />
                    <label className="cbx" htmlFor={index}><span>
                        <svg width="16px" height="16px">
                            <use href="#check"></use>
                        </svg></span></label>
                        <svg width="16px" height="16px" className="inline-svg">
                            <symbol id="check" viewBox="0 0 12 10">
                                <polyline points="0 6 4.5 9 10.5 1"></polyline>
                            </symbol>
                        </svg>
                </div>
                    <img src={(index !== num) ? Pmage : Present } className={(index !== num ? 'img1': 'img2')} alt='img'></img>
                        {(index !== num) ?  (
                        <div>
                            <h3>{product.heading}</h3>
                            <p>{product.paragraph}</p>
                        </div>) : 
                        (<div className='last-container'>
                            <p>{product.heading}</p>
                            <p>{product.paragraph}</p>
                        </div>)}
            </div>
        </div>
        ))}
    </div>
);}

export default products
