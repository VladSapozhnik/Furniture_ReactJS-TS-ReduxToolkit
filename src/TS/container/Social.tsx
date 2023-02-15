import {FC} from "react";

interface ISocial {
    id: number,
    href: string,
    name: string,
    img: string
}

interface IProps {
    className: string
}

const Social:FC<IProps> = ({className}) => {
    const social: ISocial[] = [
        {
            "id": 1,
            "href": "/#",
            "name": "Telegram",
            "img": "telegram.svg"
        },
        {
            "id": 2,
            "href": "/#",
            "name": "Facebook",
            "img": "facebook.svg"
        },
        {
            "id": 3,
            "href": "/#",
            "name": "Instagram",
            "img": "instagram.svg"
        }
    ]
    return (
        <div className={"social _f _i-center " + className}>
            <div className="social_title _mr-5">Ми в соціальних мережах:</div>
            <ul className="social-list _list-none _f _i-center">
                {social.map(item => <li className="social-list_item" key={item.id}>
                    <a href={item.href} className="social-list_link _f _i-center _j-center">
                        <img className="social-list_pic" src={require(`../../images/social/${item.img}`)} alt={item.name}/>
                    </a>
                </li>)}
            </ul>
        </div>
    )
}

export default Social;