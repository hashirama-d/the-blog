import Slider from 'react-slick'
import "./style.scss"
const TeaserSlider = ({sliderItems, className}) => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: className,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <Slider {...settings}>
            {sliderItems}
        </Slider>
    );
}

export default TeaserSlider;