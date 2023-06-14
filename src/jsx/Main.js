function Main(){
    
    const x=10;
    const y=20;
    const name="Ritesh";
    const tag=<h1>Hellow World</h1>
    const url="https://picsum.photos/seed/picsum/200/300";
    const item = ["item1","item2","item3"];

    const mapped=item.map((item)=>{
        return <li>{item}</li>
    })

    function greet(x){
        return `Hi ${x}`
    }

    const styles={width:"250px",height:"150px",backgroundColor:"green"}
    return (
        <div>
            <div>{x+y}</div>
            <div>{name}</div>
            <div>{tag}</div>
            <div>{greet("Good Morning")}</div>
            <img src={url}/>
            <div>
                <ol>
                    {item.map((item)=>{
                       return <li>{item}</li>
                    })}
                </ol>
            </div>

            <div>
                <ul>
                    {mapped}
                </ul>
            </div> 

            <div style={{width:"250px",height:"150px",backgroundColor:"red"}}></div>
            <div style={styles}></div>
        </div>
    )
}

export default Main;