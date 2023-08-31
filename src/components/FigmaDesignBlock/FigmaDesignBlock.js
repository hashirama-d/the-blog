import StaticBlock from "../StaticBlock/StaticBlock";
import './FigmaDesignBlock.scss';
import useFetch from "../../hooks/useFetch";

const FigmaDesignBlock = () => {

    // Data fetching
    const {data: figmaDesignData} = useFetch(process.env.REACT_APP_ROOT_ADDRESS + "/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image",
        "figmaDesign")

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