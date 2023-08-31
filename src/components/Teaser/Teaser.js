import './Teaser.scss'

const Teaser = ({ node, additionalClass, thumbnailLayoutClass, textLayoutClass }) => {

    return (
        <div className={`${additionalClass} teaser`}>
            <div className="row">
                <div className={`${thumbnailLayoutClass}`}>
                    <div className={`${additionalClass}-thumbnail teaser__thumbnail`}>
                        <img src={process.env.REACT_APP_ROOT_ADDRESS + node?.field_image_1} alt=""/>
                    </div>
                </div>
                <div className={`${textLayoutClass}`}>
                    <div className={`${additionalClass}-subtitle teaser__subtitle`}>
                        {node.field_date}
                    </div>
                        <div className={`${additionalClass}-title teaser__title`}
                             dangerouslySetInnerHTML={{__html: node.title}}>

                        </div>
                        {node.body &&
                            <div className={`${additionalClass}-summary teaser__summary`}
                                 dangerouslySetInnerHTML={{__html: node.body}}>
                            </div>
                        }
                </div>
            </div>
        </div>
    );
}

export default Teaser;