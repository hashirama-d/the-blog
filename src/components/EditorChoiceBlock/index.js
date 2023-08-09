import TeaserSlider from "../TeaserSlider";
import {useQuery} from "react-query";
import Teaser from "../Teaser";
import './style.scss'
const EditorChoiceBlock = () => {
    const {data: editorChoiceItems} = useQuery("editorChoiceItems", () =>
        fetch("http://91.107.217.207/editors-choice?_format=json")
            .then((resp)=> resp.json()));

    const sliderItems = editorChoiceItems.map((item, i) => (
        <Teaser
            key={`editor-choice-item${i}`}
            node={item}
            additionalClass={`editor-choice__slider-item`}
            thumbnailLayoutClass="col-12"
            textLayoutClass="col-12"
        />
    ))


    // console.log(editorChoiceItems)

    return (
        <section className="editor-choice">
            <div className="container">
                <div className="white">
                    <div className="editor-choice__inner">
                        <h3 className="editor-choice__heading">
                            Editors Choice
                        </h3>
                        <TeaserSlider sliderItems={sliderItems} className="editor-choice__slider"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditorChoiceBlock;