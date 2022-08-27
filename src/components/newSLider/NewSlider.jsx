import css from './NewSlider.module.css'
import Slider from 'react-slick'

export default function NewSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    return (
            <div className={css.container}>
                <p id={css.p}>Часто заказывают</p>

                <Slider {...settings}>
                    <div className={css.card2}>

                        <img src="https://dompirogoff.ru/wp-content/uploads/2021/04/4e630ad6-e12e-4d52-ac4c-a7edb799c0fa.jpg" alt="" />

                        <div className={css.rigth}>
                            <p>Пепперони</p>
                            <p>от 399 сом</p>
                        </div>
                    </div>
                    <div className={css.card2}>

                        <img src="https://cdn.dodostatic.net/static/Img/ComboTemplates/fe70ef7c8468472d8d07fdd2fa4874c6_1875x1875.webp" alt="" />

                        <div className={css.rigth}>
                            <p>Пепперони</p>
                            <p>от 399 сом</p>
                        </div>
                    </div>
                    <div className={css.card2}>

                        <img src="https://dompirogoff.ru/wp-content/uploads/2021/04/4e630ad6-e12e-4d52-ac4c-a7edb799c0fa.jpg" alt="" />

                        <div className={css.rigth}>
                            <p>Пепперони</p>
                            <p>от 399 сом</p>
                        </div>
                    </div>
                    <div className={css.card2}>

                        <img src="https://cdn.dodostatic.net/static/Img/Products/0bd7315279e34250b85f45c2526c1b65_1875x1875.jpeg" alt="" />

                        <div className={css.rigth}>
                            <p>Пепперони</p>
                            <p>от 399 сом</p>
                        </div>
                    </div>
                    <div className={css.card2}>

                        <img src="https://cdn.dodostatic.net/static/Img/Products/a1ddf6a09d0b4442b2bc52db4ca66ac7_1875x1875.jpeg" alt="" />

                        <div className={css.rigth}>
                            <p>Пепперони</p>
                            <p>от 399 сом</p>
                        </div>
                    </div>
                </Slider>
            </div>
    )
}