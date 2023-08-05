

const ImportantTeaser = ({ node }) => {
    return (
        <div className="teasers__important-teaser">
            <a className="teasers__important-teaser-link" href={node.view_node}>
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <div className="teasers__important-teaser-thumbnail">
                            <img src={"http://91.107.217.207" + node.field_image_1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="teasers__important-teaser-date">{node.field_date}</div>
                        <div className="teasers__important-teaser-title">{node.title.replace(/<\/?[^>]+(>|$)/g, "")}</div>
                        <div className="teasers__important-teaser-summary">{node.body.replace(/<\/?[^>]+(>|$)/g, "")}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ImportantTeaser;