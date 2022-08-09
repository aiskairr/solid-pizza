import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreateNewElement from "./pages/CreateNewElement/CreateNewElement";

const local = JSON.parse(localStorage.getItem("basket"));
function App() {
  const [pizzas, setPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [basket, setBasket] = useState(local || []);

  console.log(basket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (pizza) => {
    // write code here
    const isExist = basket.find((item) => item.id === pizza.id);
    console.log(isExist);

    if (!isExist) {
      setBasket([...basket, pizza]);
    }
  };

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/pizza"),
      fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/drinks"),
    ]).then((res) => {
      console.log(res);
      Promise.all(res.map((item) => item.json())).then((data) => {
        console.log(data);
        setLoading(false);
        setPizzas(data[0]);
        setDrinks(data[1]);
      });
    });
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="App">
      <Header />
      <Navbar basket={basket} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              addToBasket={addToBasket}
              drinks={drinks}
              pizzas={pizzas}
            />
          }
        />

        <Route path="/admin" element={<AdminPage pizzas={pizzas} />} />
        <Route path="/create-new-item" element={<CreateNewElement />} />
      </Routes>
    </div>
  );
}

export default App;
