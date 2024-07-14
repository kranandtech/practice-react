import  React, {createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './demo';
import Test from './test';
import AppContext from './AppContext';
const parent = document.getElementById('root');

const root = ReactDOM.createRoot(parent);


//let count =0;

const App = ()=>{
    data = "hello"
    let demok = {
        data
        
    }
    return(
        <AppContext.Provider value={demok}>
            <Demo />
           
        </AppContext.Provider>
    )
}


root.render(<App/>);

export default App;

