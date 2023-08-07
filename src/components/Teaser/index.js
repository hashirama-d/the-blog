import './style.scss'

const Teaser = ({ node, additionalClass, thumbnailLayoutClass, textLayoutClass }) => {
    return (
        <div className={`${additionalClass} teaser`}>
            <a className={`${additionalClass}-link teaser__link`} href={node.view_node}>
                <div className="row">
                    <div className={`${thumbnailLayoutClass}`}>
                        <div className={`${additionalClass}-thumbnail teaser__thumbnail`}>
                            <img src={"http://91.107.217.207" + node.field_image_1} alt=""/>
                        </div>
                    </div>
                    <div className={`${textLayoutClass}`}>
                        <div className={`${additionalClass}-subtitle teaser__subtitle`}>
                            {node.field_date}
                        </div>
                        <div className={`${additionalClass}-title teaser__title`}>
                            {node.title.replace(/<\/?[^>]+(>|$)/g, "")}
                        </div>
                        {node.body &&
                            <div className={`${additionalClass}-summary teaser__summary`}>
                                {node.body.replace(/<\/?[^>]+(>|$)/g, "")}
                            </div>}

                    </div>
                </div>
            </a>
        </div>
    )
}

export default Teaser;