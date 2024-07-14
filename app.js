import ReactDOM from 'react-dom/client';
import TodoForm from './TodoForm';
import TodoForm from './TodoForm';

const parent = document.getElementById('root');

const root = ReactDOM.createRoot(parent);


const App = ()=>{
   
    return(
        <TodoForm/>
    )
}


root.render(<App/>);

export default App;

