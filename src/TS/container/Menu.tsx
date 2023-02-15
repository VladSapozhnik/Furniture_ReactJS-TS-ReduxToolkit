import {FC} from "react";

interface IMenu {
    id: number,
    href: string,
    title: string
}

interface IProps {
    className?: string
}

const Menu:FC<IProps> = ({className = ""}) => {

    const menuArray: IMenu[] = [
        {
            "id": 1,
            "href": "#/",
            "title": "Головна"
        },
        {
            "id": 2,
            "href": "#/",
            "title": "АкцІї"
        },
        {
            "id": 3,
            "href": "#/",
            "title": "Доставка та оплата"
        },
        {
            "id": 4,
            "href": "#/",
            "title": "про нас"
        },
        {
            "id": 5,
            "href": "#/",
            "title": "контакти"
        },
    ]

    return (
        <ul className={`menu ${className} _f _list-none`}>
            {menuArray.map(item => <li className="menu_item" key={item.id}><a className="menu_link _text-upp" href={item.href}>{item.title}</a></li>)}
        </ul>
    )
}

export default Menu;