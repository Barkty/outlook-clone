import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import SignUp from './pages/create/SignUp';

function App() {
  return (
    <div className="App mx-auto">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
