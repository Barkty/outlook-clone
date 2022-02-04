import './App.css';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
      </Layout>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
