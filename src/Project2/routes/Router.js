import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayoutes from "./layoutes/RootLayoutes";
import Dashboard from "../pages/Dahsboard"
import MuiForm from "../components/MuiForm";

export const Router= createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayoutes/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="login" element={<MuiForm/>}/>
        </Route>
    )
) 
