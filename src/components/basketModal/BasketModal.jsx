import css from "./BasketModal.module.css"

function BasketModal() {
  return (
    <div className={css.wrapper}>
        <div className={css.darkBlock}>Dark side</div>
        <div className={css.modal}>Modal window</div>
    </div>
  )
}

export default BasketModal