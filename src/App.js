import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App mx-auto">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
