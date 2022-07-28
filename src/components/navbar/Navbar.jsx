import BasketModal from "../basketModal/BasketModal";
import css from "./Navbar.module.css"

function Navbar() {

  const onBasketOpen = () => {
    alert("sdfsdf")
  }

  return (
    <div className={`container ${css.wrapper}`}>
        <div>Пицца</div>
        <button onClick={onBasketOpen} className="btn">Корзина</button>
        <BasketModal />
    </div>
  )
}

export default Navbar;