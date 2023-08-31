import "./StaticBlock.scss";

const StaticBlock = ( {block, additionalClass} ) => {

    return (
        <div className="block row">
            <div className={`${additionalClass}__left block__left col-md-6 col-12 d-flex flex-column align-items-center align-items-md-start`}>
                <div className={`${additionalClass}__title block__title`}>
                    {block.data.field_title.replace(/<\/?[^>]+(>|$)/g, "")}
                </div>
                <div className={`${additionalClass}__summary block__summary`}
                     dangerouslySetInnerHTML={{__html: block.data.body.value}}>
                </div>
                <a className={`${additionalClass}__link block__link`} href={block.data.field_link.uri}>
                    {block.data.field_link.title}
                </a>
            </div>
            <div className={`${additionalClass}__right block__right col-md-6 col-12`}>
                <div className={`${additionalClass}__image block__image`}>
                    <img src={process.env.REACT_APP_ROOT_ADDRESS + block.data.field_image.uri.url} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default StaticBlock;