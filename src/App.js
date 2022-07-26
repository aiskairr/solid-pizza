import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/pizza")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage pizzas={pizzas} />} />
      </Routes>

    </div>
  );
}

export default App;
