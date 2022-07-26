import css from "./SliderCard.module.css"

function SliderCard(props) {
  return (
    <div className={css.wrapper}>
        <img src={props.img} alt="pizza" />
    </div>
  )
}

export default SliderCard