import Testimonial from "../Testimonial/Testimonial";
import "./TestimonialsBlock.scss";
import useFetch from "../../hooks/useFetch";

const TestimonialsBlock = () => {

    const {data: testimonialsData} = useFetch("http://91.107.217.207/testimonials?_format=json", "testimonialsData")

    return (
      <div className="testimonials">
          <h3 className="testimonials__heading">Testimonials</h3>
          <div className="testimonials__items">
              {testimonialsData.map((item, index) => (
                  <Testimonial key={`testimonials-item${index}`} node={item}/>
              ))}
          </div>
      </div>
    );
}

export default TestimonialsBlock;