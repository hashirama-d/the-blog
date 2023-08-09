import TeaserSlider from "../TeaserSlider";
import {useQuery} from "react-query";
import Teaser from "../Teaser";
import "./style.scss";
const Tutorials = () => {
    const {data: tutorialItems} = useQuery("tutorialItems", () =>
        fetch("http://91.107.217.207/design-tutorials-first?_format=json")
            .then((resp) => resp.json()));

    const sliderItems = tutorialItems.map((item, i) => (
            <Teaser
                key={`tutorial-item${i}`}
                node={item}
                additionalClass="tutorials__slider-item"
                thumbnailLayoutClass="col-12"
                textLayoutClass="col-12"
            />
    ))

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