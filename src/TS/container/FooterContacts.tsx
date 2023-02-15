import {FC} from "react";
import Social from "./Social";

const FooterContacts:FC = () => {
    const phoneFooter = [
        {
            "id": 1,
            "href": "+380991112233",
            "tel": "(099) 111 22 33"
        },
        {
            "id": 2,
            "href": "+380992223344",
            "tel": "(099) 222 33 44"
        }
    ]

    return (
        <div className="footer-contacts">
            <div className="footer-contacts_marker _pos-rel _mb-15">TEST</div>
            <div className="footer-contacts_calendar _pos-rel _mb-15">Пн-Пт, з 10 до 18</div>
            <ul className="footer-contacts_tel footer-tel _list-none _pos-rel _mb-30">
                {phoneFooter.map(item => <li className={`footer-tel_item`} key={item.id}><a href={item.href} className="footer-tel_link">{item.tel}</a></li>)}
            </ul>
            <Social className="footer_social _f-column" />
        </div>
    )
}

export default FooterContacts;