import css from "./BasketModal.module.css";

function BasketModal({ opened, onBasketOpen, basket }) {

  const getSum = () => {
    const result = basket.reduce((sum, item) => {
      return sum + Number(item.price)
    }, 0)
    return result
  }

  return (
    <div className={`${css.wrapper} ${opened ? css.active : ""}`}>
      <div onClick={onBasketOpen} className={css.darkBlock}>
        Dark side
      </div>
      <div className={css.modal}>
        {basket.length ? (
          <div>
            <div className={css.header}>{basket.length} товар на {getSum()} сом</div>
            {basket.map((item) => (
              <h3>{item.title} {item.price}</h3>
            ))}
          </div>
        ) : (
          <h2 className={css.emptyText}>Ой, пусто!</h2>
        )}
      </div>
    </div>
  );
}

export default BasketModal;
