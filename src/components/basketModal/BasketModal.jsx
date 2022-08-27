import css from "./BasketModal.module.css";
import {  useDispatch } from "react-redux";
import { basketActions } from "../../redux/ReduxComponents/BasketSlice";

function BasketModal({     opened, onBasketOpen, basket }) {



  const getSum = () => {
    const result = basket.reduce((sum, item) => {
      return sum + Number(item.price);
    }, 0);
    return result;
  };

  const dispath = useDispatch();

  const BasketDelete = () => {
    const DeleteBasket = basketActions.RemoveToBasket({});
    dispath(DeleteBasket);
    console.log(DeleteBasket);
  };
  return (
    <div className={`${css.wrapper} ${opened ? css.active : ""}`}>
      <div onClick={onBasketOpen} className={css.darkBlock}>
        Dark side
      </div>
      <div className={css.modal}>
        {basket.length ? (
          <div>
            <div className={css.header}>
              {basket.length} товарa на {getSum()} сом
            </div>
            {basket.map((item) => (
              <div className={css.imgmodal}>
                <img src={item.img} alt="pizza  " />
                <h3>
                  {item.name} {item.price}
                </h3>
                <button
                  onClick={() => BasketDelete((todo) => todo.id !== item.id)}
                >
                  X
                </button>
              </div>
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
