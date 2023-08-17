import {useQuery} from "react-query";

const SideBanner = () => {

    const {data: sideBannerImage} = useQuery("sideBannerImage", () =>
        fetch("http://91.107.217.207/archives?_format=json")
            .then((resp) => resp.json()));

    return (
        <div className="side-banner">
            <img src="" alt=""/>
        </div>
    )
}

export default SideBanner;