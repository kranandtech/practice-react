import { useContext } from "react";
import AppContext from "./AppContext.js";


const Demo = ()=>{
   const {data}= useContext(AppContext)
   
    return(
        <div>
            <h1>{data}</h1>
        </div>
    );
}

export default Demo;