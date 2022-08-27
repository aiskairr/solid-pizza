import css from "./Header.module.css";

function Header() {
  return (
    <div className="container">
      <div className={css.continer}>
        <div className={css.images}>
          <img
            src="https://papik.pro/uploads/posts/2022-01/thumbs/1643615543_70-papik-pro-p-dodo-logotip-74.png"
            alt="logo-pizza"
          />
        </div>
        <div>
          <h3>Доставка пиццы Бишкек</h3>
          <p>37 мин · 4.69 </p>
        </div>
        <div>
          <h3>0 (551) 550-550</h3>
          <p id={css.phone}>Звонок по телефону</p>
        </div>
        <div>
          <p>Додокоины</p>
        </div>
        <div>
          <button className="btn">Войти</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
