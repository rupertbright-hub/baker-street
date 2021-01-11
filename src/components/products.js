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
                <div className='checkbox-position'>
                    <input class={(index === num ?'inp-cbx2': 'inp-cbx')} id={index} type="checkbox" />
                    <label class="cbx" for={index}><span>
                        <svg width="30px" height="30px">
                            <use href="#check"></use>
                        </svg></span></label>
                        <svg width="30px" height="30px" class="inline-svg">
                            <symbol id="check" viewbox="0 0 12 10">
                                <polyline points="0 6 4.5 9 10.5 1"></polyline>
                            </symbol>
                        </svg>
                </div>
                    <img src={(index !== num) ? Pmage : Present } className={(index !== num ? 'img1': 'img2')} alt='img'></img>
                        {(index !== num) ?  (
                        <div>
                            <h3>{el.heading}</h3>
                            <p>{el.paragraph}</p>
                        </div>) : 
                        (<div className='last-container'>
                            <p>{el.heading}</p>
                            <p>{el.paragraph}</p>
                        </div>)}
            </div>
        </div>
        ))}
    </div>
);}

export default products
