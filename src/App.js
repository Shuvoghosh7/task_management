import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Share/Navbar';
import { Route, Routes } from 'react-router-dom';
import ToDo from './Component/To-Do/ToDo';


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<ToDo/>}/>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
