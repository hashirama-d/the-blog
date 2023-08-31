import "./SideBanner.scss";
import useFetch from "../../hooks/useFetch";

const SideBanner = () => {

    // Data fetching
    const {data: sideBannerImage} = useFetch(process.env.REACT_APP_ROOT_ADDRESS + "/jsonapi/block_content/basic/07440139-1de0-44ab-98d8-9a7b437245db?resourceVersion=id%3A5&include=field_image",
        "sideBannerImage");

    return (
        <div className="side-banner">
            <img className="side-banner__image"
                src={process.env.REACT_APP_ROOT_ADDRESS + sideBannerImage.data.field_image.uri.url}
                alt={sideBannerImage.data.field_image.meta.alt}/>
        </div>
    );
}

export default SideBanner;