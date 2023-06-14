import React, { useState } from 'react'

function MultipleState() {

    const [cards, setcards] = useState([
        {id:1, count: 0 },
        {id:2, count: 0 },
    ])

     const total=cards.reduce((a,b)=> a+b.count,0)

    const handleIncre=(id)=>{
        setcards(
            cards.map((card)=>{
               return card.id === id ? {...card,count:card.count+1}:{...card}
         
            })
            )
    }

    const handleDecre=(id)=>{
        setcards(
            cards.map((card)=>{
            
               return card.id === id ? {...card,count:card.count-1}:{...card}
            })
            )
    }

    return (
        <div>
            <div>
                {cards.map((card) => {
                    return <div style={{border:"2px solid black", width:"200px",height:"200px" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>{card.count}</div>
                            <button onClick={()=>handleIncre(card.id)}>+</button>
                            <button onClick={()=>handleDecre(card.id)}>-</button> 
                        </div>
                    </div>
                })}
            </div>
            <div>{total}</div>
        </div>
    )
}

export default MultipleState