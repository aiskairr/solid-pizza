import Slider from "react-slick";
import SliderCard from "../../components/sliderCard/SliderCard";

function HomePage() {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
      </Slider>
    </div>
  );
}

export default HomePage;
