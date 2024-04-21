import logo from './logo.svg';
import './App.css';
import FindDoc from './Pages/FindDoc';
import DocPage from './Pages/DocPage';
import Home from './Pages/Home';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App w-full">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Find' element={<FindDoc/>}/>
      <Route path='/Doc' element={<DocPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
