import Comp2 from"./Comp2"
import Comp3 from"./Comp3"
import App from "../App";

function Comp1(props){

        const lname="Manoj";

       let xyz= props.lname(lname);
        
        
        return (
            <div>
            <h3>This is Component 1</h3>
            <h1>{xyz}</h1>
            <Comp2/>
           
           
        </div>
    )

}

export default Comp1;