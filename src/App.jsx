import { Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';


function App() {
  return (

    <div style={{ height: '1500px' }}>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
     
    </div>
  )
};

export default App;
