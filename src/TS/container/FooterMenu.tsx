import {FC} from "react";

interface IProps {
    href: string,
    title: string
}


const Menu:FC<IProps> = ({href, title}) => {

    return (
       <li className="footer-menu_item _line-list-footer"><a className="footer-menu_link _text-upp" href={href}>{title}</a></li>
    )
}

export default Menu;