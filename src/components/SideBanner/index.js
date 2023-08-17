import {useQuery} from "react-query";
import "./style.scss";
const SideBanner = () => {

    const {data: sideBannerImage} = useQuery("sideBannerImage", () =>
        fetch("http://91.107.217.207/jsonapi/block_content/basic/07440139-1de0-44ab-98d8-9a7b437245db?resourceVersion=id%3A5&include=field_image")
            .then((resp) => resp.json()));

    return (
        <div className="side-banner">
            <img className="side-banner__image"
                src={"http://91.107.217.207" + sideBannerImage.data.field_image.uri.url}
                alt={sideBannerImage.data.field_image.meta.alt}/>
        </div>
    )
}

export default SideBanner;