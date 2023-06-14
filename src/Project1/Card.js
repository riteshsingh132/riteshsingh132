import React from 'react'
import "./Card.css";

import { Data } from "./Data";

function Card() {
    let str = "\u20B9";
    return (
        <div>
            <div className='top-five-div'>
                <h1 className='top-five'>Top 5 Mobile</h1>
                {Data.map((item, i) => {
                    return (
                        <div className='list-name'>

                            <ul>
                                <li><a href=''>{item.title}</a></li>
                            </ul>

                        </div>
                    )
                })}

            </div>

            <div className='product-item'>
                {Data.map((item, i) => {
                    return (

                        <div className='product-card'>
                            <div>
                                <img src={item.thumbnail} width={"90%"} height={"200px"} />
                                <h3>{item.title}</h3>
                                <button className='buy-now'>Buy Now</button>
                                <p>Price : {str} {item.price}</p>
                                <p>Rarting: {item.rating}/5</p>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Card
