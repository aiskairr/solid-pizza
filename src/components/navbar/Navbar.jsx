import { useState } from "react";
import BasketModal from "../basketModal/BasketModal";
import css from "./Navbar.module.css"

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const onBasketOpen = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div className={`container ${css.wrapper}`}>
        <div>Пицца</div>
        <button onClick={onBasketOpen} className="btn">Корзина</button>
        <BasketModal opened={isModalOpen} onBasketOpen={onBasketOpen} />
    </div>
  )
}

export default Navbar;