import {FC} from "react";

interface IProps {
    title: string,
    src: string,
    description: string
}
const AdvantageItem:FC<IProps> = ({src, title, description}) => {
    return (
        <div className="advantage-item">
            <img className="advantage-item_pic" src={require("../../images/advantage/"+src)} alt={title}/>
            <h3  className="advantage-item_title h3">{title}</h3>
            <p className="advantage-item_description">{description}</p>
        </div>
    )
}

export default AdvantageItem;