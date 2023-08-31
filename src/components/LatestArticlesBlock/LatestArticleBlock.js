import "./LatestArticleBlock.scss";
import Teaser from "../Teaser/Teaser";
import useFetch from "../../hooks/useFetch";

const LatestArticlesBlock = () => {

    // Data fetching
    const {data: latestArticlesItems} = useFetch("http://91.107.217.207/latest-articles?_format=json",
        "latestArticlesItems");

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