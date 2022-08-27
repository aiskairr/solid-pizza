import { useSelector } from "react-redux";
import Slider from "react-slick";
import NewSlider from "../../components/newSLider/NewSlider";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import SliderCard from "../../components/sliderCard/SliderCard";

const sliderCards = [
  {
    id: 1,
    img: 'https://cdn.inappstory.com/story/1cm/poe/jbb/rdqkh8nffihrtgrbz82nrit/custom_cover/logo-350x440.jpg?v=1645505461'
},
{
    id: 2,
    img: 'https://cdn.inappstory.com/story/jo5/pnh/dlo/uwznxlrnvcfic4xs6g0m4oe/custom_cover/logo-350x440.jpg?v=1651837167'
},
{
    id: 3,
    img: 'https://cdn.inappstory.com/story/lyg/qk5/2xt/8eqvh2nzksa8uk4da8uok9u/custom_cover/logo-350x440.jpg?v=1652289494'
},
{
    id: 4,
    img: 'https://cdn.inappstory.com/story/av3/mcy/ldc/gj3kchf9kohi2by6ydlpbby/custom_cover/logo-350x440.jpg?v=1645002408'
},
{
    id: 5,
    img: 'https://cdn.inappstory.com/story/jo5/pnh/dlo/uwznxlrnvcfic4xs6g0m4oe/custom_cover/logo-350x440.jpg?v=1651837167'
},
{
    id: 6,
    img: 'https://cdn.inappstory.com/story/lyg/qk5/2xt/8eqvh2nzksa8uk4da8uok9u/custom_cover/logo-350x440.jpg?v=1652289494'
},
{
    id: 7,
    img: 'https://cdn.inappstory.com/story/1cm/poe/jbb/rdqkh8nffihrtgrbz82nrit/custom_cover/logo-350x440.jpg?v=1645505461'
},
{
    id: 8,
    img: 'https://cdn.inappstory.com/story/lyg/qk5/2xt/8eqvh2nzksa8uk4da8uok9u/custom_cover/logo-350x440.jpg?v=1652289494'
},
{
    id: 9,
    img: 'https://cdn.inappstory.com/story/jo5/pnh/dlo/uwznxlrnvcfic4xs6g0m4oe/custom_cover/logo-350x440.jpg?v=1651837167'
},
{
    id: 10,
    img: 'https://cdn.inappstory.com/story/1cm/poe/jbb/rdqkh8nffihrtgrbz82nrit/custom_cover/logo-350x440.jpg?v=1645505461'
},
{
    id: 11,
    img: 'https://cdn.inappstory.com/story/lyg/qk5/2xt/8eqvh2nzksa8uk4da8uok9u/custom_cover/logo-350x440.jpg?v=1652289494'
},
{
    id: 12 ,
    img: 'https://cdn.inappstory.com/story/jo5/pnh/dlo/uwznxlrnvcfic4xs6g0m4oe/custom_cover/logo-350x440.jpg?v=1651837167'
},
];

function HomePage() {
  const pizza = useSelector((state) => state.pizzas.data)
  console.log(pizza);
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="container page">
      <Slider {...settings}>
        {sliderCards.map((item) => (
          <SliderCard key={item.id} img={item.img} />
        ))}
      </Slider>
      <NewSlider />
      <h1 className="title">Пицца</h1>

      <div className="cards_wrapper">
        {pizza.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            {...pizza}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
