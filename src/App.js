import logo from './logo.svg';
import './App.css';
import {Home} from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="" element={<Home></Home>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
