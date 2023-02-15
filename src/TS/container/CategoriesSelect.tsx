import {FC} from "react";

interface IProps {
    src: string,
    title: string,
    name: string
    isActive: number
    index: number,
    handlerClick: (active:number, name: string) => void
}
const CategoriesSelect: FC<IProps> = ({src, title, name , isActive, index, handlerClick}) => {
    return (
        <div className={`select-item ${isActive === index ? "active" : ''}`} onClick={() => handlerClick(index, name)}>
            <img className="select-item_pic" src={require("../../images/categories/"+src)} alt={title}/>
            <h3 className="select-item_name _text-upp">{title}</h3>
        </div>
    )
}

export default CategoriesSelect;