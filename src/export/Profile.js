import About from "./About";
import Test from "./Test";

function Profile({number2,xtraNum}){

    // console.log(number1)

    // const f1=parseInt(number1) 
    // const f2=parseInt(number2)

// console.log(f1)
// console.log(f2)
    return (
        <div>
            <h1>Profile Component</h1>
          {number2 * xtraNum}
          
            {/* <About/> */}           
        </div>
    )
}

export default Profile;