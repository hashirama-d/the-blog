import {useQuery} from "react-query";
import StaticBlock from "../StaticBlock";
import "./style.scss";

const WebsiteDesignBlock = () => {
    const {data: websiteDesignData} = useQuery("websiteDesign", () =>
        fetch("http://91.107.217.207/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image")
            .then((resp) => resp.json()));

    return (
    <section className="website-design">
        <div className="container">
            <div className="dark">
                <div className="website-design__inner">
                    <StaticBlock block={websiteDesignData}
                                 additionalClass="website-design"/>
                </div>
            </div>
        </div>
    </section>
    );
}
export default WebsiteDesignBlock;