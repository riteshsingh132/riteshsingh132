import React, { useState } from 'react';
import "./Cart.css"

function Cart() {


// console.log()
    const [data, setData] = useState(0)
    const [odata, setoData] = useState(0)

    const increment = () => {
        setData(data + 1)

    }

    const decrement = () => {
        if (data > 0) {
            setData(data - 1)

        } else {
            setData(data)
        }


    }

    
    const laptopIncre = () => {
        
     
        setoData(odata + 1)

    }
    const laptopDecrem = () => {

        if (odata > 0) {

            setoData(odata - 1)

        } else {
            setoData(odata)
        }
    }

    return (
        <div>
            <div className='conatiner'>
                <div className='child-container'>
                    <h1>Mobile</h1>
                    <button onClick={increment}>+</button>
                    <span>{data}</span>
                    <button onClick={decrement}>-</button>
                </div>
                <div className='child-container'>
                    <h1>Laptop</h1>
                    <button onClick={laptopIncre}>+</button>
                    <span>{odata}</span>
                    <button onClick={laptopDecrem}>-</button>
                </div>
                <div className='child-result'>Total  : {data + odata}</div>
            </div>

        </div>
    )
}

export default Cart