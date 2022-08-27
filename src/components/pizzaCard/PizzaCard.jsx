import { basketActions } from "../../redux/ReduxComponents/BasketSlice";
import css from "./PizzaCard.module.css";
import { useDispatch } from "react-redux";
import Api from "../../api/api";

function PizzaCard({img,name, description, price, id, isAdmin, link }) {
  const dispatch = useDispatch();
  const handleReduxClick = () => {
    const test = basketActions.addToBasket({
      name,
      description,
      price,
      img,
      id,
    });
    dispatch(test);
  };
  const handleDelete = () => {
    if(link === "pizza") {
      Api.delPizza(id).then(() => {
        window.location.reload()
      })
    }
      // fetch(`${base_url}${link}/${id}`, {
    //   method: "DELETE",
    // }).then(() => {
    //   alert("Successfuly deleted");
    //   window.location.reload();
    // });
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img src={img} alt="pizza" />
      </div>
      <div className={css.title}><h3>{name}</h3></div>
      <div className={css.description}><p>{description}</p></div>
      <div className={css.footer}>
        <div className={css.align}>
          <div className={css.price}>от {price} сом</div>
          {!isAdmin && (
            <button onClick={handleReduxClick} className="btn">
              Выбрaть
            </button>
          )}
        </div>
        {isAdmin && (
          <div>
            <button onClick={handleDelete} className="btn">
              Delete
            </button>
            <button className="btn">Change</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PizzaCard;
