import {useQuery} from "react-query";
import ImportantTeaser from "./ImportantTeaser";
import "./style.scss";

const TeasersBlock = () => {
    const {data: importantTeaser} = useQuery("importantTeaser", () =>
        fetch("http://91.107.217.207/blog-articles-first?_format=json")
            .then((resp)=> resp.json()));
    const {data: otherTeasers} = useQuery("otherTeasers", () =>
        fetch("http://91.107.217.207/blog-articles-second?_format=json")
            .then((resp)=> resp.json()));
    return (
        <div className="teasers">
            <div className="container">
                <div className="dark">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <ImportantTeaser node={importantTeaser[0]}/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="teasers__other-articles"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeasersBlock;