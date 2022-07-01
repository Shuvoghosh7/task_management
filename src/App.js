import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Share/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './Component/Home/Home';
import ToDo from './Component/To-Do/ToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateTask from './Component/UpdateTask/UpdateTask';
import CalendarForDate from './Component/Calendar/CalendarForDate';
import CompleteTask from './Component/CompleteTask/CompleteTask';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div className='bg-slate-800'>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ToDo' element={<ToDo/>}/>
          <Route path='/update/:id' element={<UpdateTask/>}/>
          <Route path='/calendar' element={<CalendarForDate/>}/>
          <Route path='CompletedTasks' element={<CompleteTask/>}/>
        </Routes>
        <ToastContainer />
        <Footer/>
      </Navbar>
    </div>
  );
}

export default App;
