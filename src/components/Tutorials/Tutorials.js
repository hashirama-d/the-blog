import TeaserSlider from "../TeaserSlider/TeaserSlider";
import Teaser from "../Teaser/Teaser";
import "./Tutorials.scss";
import useFetch from "../../hooks/useFetch";

const Tutorials = () => {

    // Data fetching
    const {data: tutorialItems} = useFetch("http://91.107.217.207/design-tutorials-first?_format=json",
        "tutorialItems");

    // Generating array of items for slider components
    const sliderItems = tutorialItems.map((item, i) => (
            <Teaser
                key={`tutorial-item${i}`}
                node={item}
                additionalClass="tutorials__slider-item"
                thumbnailLayoutClass="col-12"
                textLayoutClass="col-12"
            />
    ));

    return (
        <section className="tutorials">
            <div className="container">
                <div className="white">
                    <div className="tutorials__inner">
                        <h3 className="tutorials__heading">
                            Tutorials Design
                        </h3>
                        <TeaserSlider sliderItems={sliderItems} className="tutorials__slider"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tutorials;