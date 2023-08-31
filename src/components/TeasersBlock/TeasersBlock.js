import Teaser from "../Teaser/Teaser";
import "./TeasersBlock.scss";
import useFetch from "../../hooks/useFetch";

const TeasersBlock = () => {

    // Data fetching
    const {data: importantTeaser} = useFetch("http://91.107.217.207/blog-articles-first?_format=json", "importantTeaser")
    const {data: smallTeasers} = useFetch("http://91.107.217.207/blog-articles-second?_format=json", "otherTeasers")


    return (
        <section className="teasers">
            <div className="container">
                <div className="dark">
                    <div className="teasers__inner d-flex flex-wrap">
                        <div className="col-lg-6 col-md-12">
                            <Teaser
                                node={importantTeaser[0]}
                                additionalClass={"teasers__important-teaser"}
                                thumbnailLayoutClass="col-lg-12 col-md-6"
                                textLayoutClass="col-lg-12 col-md-6"/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="teasers__small-teasers">
                                {smallTeasers.map((node, index) =>
                                    <Teaser
                                        node={node}
                                        key={`small-teaser${index}`}
                                        additionalClass={"teasers__small-teaser"}
                                        thumbnailLayoutClass="col-lg-5 col-md-3 col-sm-5 col-12"
                                        textLayoutClass="col-lg-7 col-md-9 col-sm-7 col-12"/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeasersBlock;