import Teaser from "../Teaser/Teaser";
import "./ArchiveBlock.scss";
import useFetch from "../../hooks/useFetch";

const ArchiveBlock = () => {

    // Data fetching
    const {data: archivesData} = useFetch(process.env.REACT_APP_ROOT_ADDRESS + "/archives?_format=json", "archivesData")

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