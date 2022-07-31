import css from "./BasketModal.module.css"

function BasketModal(props) {
  return (
    <div className={`${css.wrapper} ${props.opened ? css.active : ""}`}>
        <div onClick={props.onBasketOpen} className={css.darkBlock}>Dark side</div>
        <div className={css.modal}>Modal window</div>
    </div>
  )
}

export default BasketModal