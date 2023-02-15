import {FC} from "react";

interface IPhone {
    id: number,
    href: string,
    name: string
}

const PhoneMenu:FC = () => {
    const phoneMenu: IPhone[] = [
        {
            "id": 1,
            "href": "+30991112233",
            "name": "(099) 111 22 33"
        },
        {
            "id": 2,
            "href": "+380992223344",
            "name": "(099) 222 33 44"
        }
    ]

    const phone = phoneMenu.filter((item, i) => i > 0);

    return (
        <div className="menu-tel dropdown">
            <a href={"tel:"+phoneMenu[0].href}>{phoneMenu[0].name}</a>
            <div className="dropdown-content _pt-10 _pb-10">
                {phone.map(item => <a href={"tel:"+item.href} key={item.id}> {item.name}</a>)}
            </div>
        </div>
    )
}

export default PhoneMenu;