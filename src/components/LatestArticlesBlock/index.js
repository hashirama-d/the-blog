import "./style.scss";
import {useQuery} from "react-query";
import Teaser from "../Teaser";

const LatestArticlesBlock = () => {
    const {data: latestArticlesItems} = useQuery("latestArticlesItems", () =>
        fetch("http://91.107.217.207/latest-articles?_format=json")
            .then((resp) => resp.json()));

    return (
        <section className="latest">
            <div className="container">
                <div className="white">
                    <div className="latest__inner">
                        <h3 className="latest__heading">
                            Latest Articles
                        </h3>
                        <div className="latest__articles row">
                            {latestArticlesItems.map((item, index) => (
                                    <div className="col-md-6 col-lg-4 col-sm-6" key={`latest-article-${index}`}>
                                        <Teaser
                                        node={item}
                                        additionalClass="latest__article"
                                        thumbnailLayoutClass="col-12"
                                        textLayoutClass="col-12"/>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestArticlesBlock;