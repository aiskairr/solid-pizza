import { useState } from "react";
import { useSelector } from "react-redux";
import BasketModal from "../basketModal/BasketModal";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const basket = useSelector((state) => state.basket.data);
  const onBasketOpen = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={`container ${css.wrapper}`}>
      <div className={css.left}>
        <Link to="#">Пицца</Link>
        <Link to="#">Комбо</Link>
        <Link to="#">Закуски</Link>
        <Link to="#">Десерты</Link>
        <Link to="#">Напитки</Link>
        <Link to="#">Другие товары</Link>
        <Link to="#">Акции</Link>
        <Link to="#">Контаты</Link>
        <Link to="#">О нас</Link>
        <Link to="#">Прямой эфир</Link>
      </div>
      <div className={css.right}>
        <button onClick={onBasketOpen} className="btn">
          Корзина | {basket.length}
        </button>
      </div>
      <BasketModal
        basket={basket}
        opened={isModalOpen}
        onBasketOpen={onBasketOpen}
      />
    </div>
  );
}

export default Navbar;
