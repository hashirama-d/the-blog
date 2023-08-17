import {useQuery} from "react-query";
import Teaser from "../Teaser";
import "./style.scss";

const OtherArticles = () => {

    const {data: otherArticlesData} = useQuery("otherArticlesData", () =>
        fetch("http://91.107.217.207/latest-articles?_format=json")
            .then((resp) => resp.json()));

    return (
        <section className="other-articles">
            <h3 className="other-articles__heading">
                Other Articles
            </h3>
            <div className="other-articles__items">
                {otherArticlesData.map((item, index) => (
                    <Teaser key={`other-articles${index}`}
                    node={item}
                    additionalClass={"other-articles__item"}
                    textLayoutClass={"col-lg-7 col-sm-8 col-12"}
                    thumbnailLayoutClass={"col-lg-5 col-sm-4 col-12 order-sm-2"}/>
                ))}
            </div>
        </section>
    );
}

export default OtherArticles;