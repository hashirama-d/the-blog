const Teaser = ({ node }) => {
    return (
        <div className="teasers__small-teaser">
            <a href="" className="teasers__small-teaser-link">
                <div className="row flex-md-row flex-row-reverse">
                    <div className="col-lg-5 col-md-3 col-5 ">
                        <div className="teasers__small-teaser-thumbnail">
                            <img src={"http://91.107.217.207" + node.field_image_1} alt=""/></div>
                    </div>
                    <div className="col-lg-7 col-md-9 col-sm-7 col-7">
                        <div className="teasers__small-teaser-date">{node.field_date}</div>
                        <div className="teasers__small-teaser-title">{node.title.replace(/<\/?[^>]+(>|$)/g, "")}</div>
                    </div>
                </div>
            </a>

        </div>
    )
}

export default Teaser;