
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Product';
import Add from "./components/Add";
import Error from './components/Error';
import ProductDashBoard from "./components/ProductDashBoard"



function RoutingNew() {

    // method 1

//     const router=createBrowserRouter([
//         {
//             path:"/",
//             element:<Home/>,
            
//            // symbol start se symbol end tal children me pass kiya hai.
//             children:[
//                 {
//                     path:"/contact",
//                     element:<Contact/>,
//                     children:[
//                         {
//                             path:"add",
//                             element:<Add/>
//                         }
//                     ]
//                 },
//                 {
//                     path:"/product",
//                     element:<Product/>
//                 }
//             ]
//         },
//         //sumbol end
//     ])

//     return (
//        <>
//             <RouterProvider router={router}/>
//         </>
//   )

// method 2

    const router=createBrowserRouter(
        
        createRoutesFromElements(
            <Route path='/' element={<Home/>}>
                <Route path='contact' element={<Contact/>}>
                <Route path='add' element={<Add/>}/>
                </Route>

                <Route path='riteshSi' element={<Product/>}>
                    <Route index element={<ProductDashBoard/>}/>
                </Route>
                
                <Route path='*' element={<Error/>}/>

            </Route>
        )
    )
    return (
               <>
                    <RouterProvider router={router}/>
                </>
          )
}

export default RoutingNew