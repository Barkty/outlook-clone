import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import SignUp from './pages/create/SignUp';
import SignIn from './pages/signin/SignIn';
import { useEffect } from 'react';

function App() {
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="App mx-auto">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}
export default App;
