import css from "./BasketModal.module.css"

function BasketModal({opened, onBasketOpen, basket}) {
  return (
    <div className={`${css.wrapper} ${opened ? css.active : ""}`}>
        <div onClick={onBasketOpen} className={css.darkBlock}>Dark side</div>
        <div className={css.modal}>
          {
            basket.length 
            ? basket.map((item) => <h3>{item.title}</h3>)
            : <h2 className={css.emptyText}>Ой, пусто!</h2>
          }
        </div>
    </div>
  )
}

export default BasketModal