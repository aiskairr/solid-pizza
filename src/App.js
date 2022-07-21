import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
