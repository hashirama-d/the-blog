import StaticBlock from "../StaticBlock";
import {useQuery} from "react-query";
import './style.scss';

const FigmaDesignBlock = () => {
    const {data: figmaDesignData} = useQuery("figmaDesign", () =>
        fetch("http://91.107.217.207/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image")
            .then((resp) => resp.json()));

    return (
        <section className="figma-design">
            <div className="container">
                <div className="dark">
                    <div className="figma-design__inner">
                        <StaticBlock block={figmaDesignData}
                                     additionalClass="figma-design"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FigmaDesignBlock;