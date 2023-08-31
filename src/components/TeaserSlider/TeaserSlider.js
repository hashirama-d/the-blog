import Slider from 'react-slick'
import "./TeaserSlider.scss"

const TeaserSlider = ({sliderItems, className}) => {

    // Object of settings for slider
    const settings = {
        arrows: false,
        dots: true,
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