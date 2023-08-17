import "./style.scss";

const Testimonial = ({node}) => {
    return (
        <div className="testimonials__item">
            <div className="testimonials__item-logo">
                <img src={"http://91.107.217.207" + node.field_image_1}
                     alt={node.field_remember}
                     className="testimonials__item-logo-img"/>
            </div>
            <div className="testimonials__item-body">
                <div className="testimonials__item-text" dangerouslySetInnerHTML={{__html: node.body}}></div>
                <div className="testimonials__item-user">@{node.field_remember}</div>
            </div>
        </div>
    );
}

export default Testimonial;