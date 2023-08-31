import TeaserSlider from "../TeaserSlider/TeaserSlider";
import Teaser from "../Teaser/Teaser";
import './EditorChoiceBlock.scss'
import useFetch from "../../hooks/useFetch";
const EditorChoiceBlock = () => {

    // Data fetching
    const {data: editorChoiceItems} = useFetch("http://91.107.217.207/editors-choice?_format=json", "editorChoiceItems")

    // Generating array with items for slider component
    const sliderItems = editorChoiceItems.map((item, i) => (
        <Teaser
            key={`editor-choice-item${i}`}
            node={item}
            additionalClass={`editor-choice__slider-item`}
            thumbnailLayoutClass="col-12"
            textLayoutClass="col-12"
        />
    ))

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