import css from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={`container ${css.wrapper}`}>
        <div>Пицца</div>
        <button className="btn">Корзина</button>
    </div>
  )
}

export default Navbar;