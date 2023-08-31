import "./IndustryDesignBlock.scss";
import Teaser from "../Teaser/Teaser";
import useFetch from "../../hooks/useFetch";

const IndustryDesignBlock = () => {

    // Data fetching
    const {data: industryDesignItems} = useFetch("http://91.107.217.207/latest-articles?_format=json",
        "industryDesignItems")

    return (
        <section className="industry">
            <div className="container">
                <div className="dark">
                    <div className="industry__inner">
                        <h3 className="industry__heading">
                            Industry Design
                        </h3>
                        <div className="industry__articles row">
                            {industryDesignItems.map((item, index) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-6" key={`industry-article${index}`}>
                                        <Teaser
                                            node={item}
                                            additionalClass="industry__article"
                                            thumbnailLayoutClass="col-12"
                                            textLayoutClass="col-12"/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IndustryDesignBlock;