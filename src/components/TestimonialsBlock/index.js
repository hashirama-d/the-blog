import {useQuery} from "react-query";
import Testimonial from "../Testimonial";
import "./style.scss";
const TestimonialsBlock = () => {
    const {data: testimonialsData} = useQuery("testimonialsData", () =>
        fetch("http://91.107.217.207/testimonials?_format=json")
            .then((resp) => resp.json()));

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