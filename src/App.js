import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
function App() {
  return (
     <Router>
      <Routes>
        <Route elements ={<Home />} path="/" />
        </Routes>
        </Router>
    
    
  );
}

export default App;
 