import {useQuery} from "react-query";
import Teaser from "../Teaser";
import "./style.scss";
const ArchiveBlock = () => {

    const {data: archivesData} = useQuery("archivesData", () =>
        fetch("http://91.107.217.207/archives?_format=json")
            .then((resp) => resp.json()));

    return (
        <section className="archive">
            <h3 className="archive__heading">Archive 2021</h3>
            <div className="archive__items">
                {archivesData.map((item, index) => (
                    <Teaser key={`archive-articles${index}`}
                            node={item}
                            additionalClass={"archive__item"}
                            textLayoutClass={"col-12"}
                            thumbnailLayoutClass={"d-none"}/>
                ))}
            </div>
        </section>
    );
}

export default ArchiveBlock;