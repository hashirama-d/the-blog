import StaticBlock from "../StaticBlock/StaticBlock";
import "./WebsiteDesignBlock.scss";
import useFetch from "../../hooks/useFetch";

const WebsiteDesignBlock = () => {

    const {data: websiteDesignData} = useFetch(process.env.REACT_APP_ROOT_ADDRESS + "/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image",
        "websiteDesign");

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