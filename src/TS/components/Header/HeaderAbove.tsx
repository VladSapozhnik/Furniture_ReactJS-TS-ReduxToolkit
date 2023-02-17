import {FC, useState} from "react";
import Social from "../../container/Social";
import Menu from "../../container/Menu";
import PhoneMenu from "../../container/PhoneMenu";
import MenuMobile from "../../container/MenuMobile";

const HeaderAbove:FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="header-above _pt-10 _pb-10">
            <div className="container _f _i-center">
                <Social className="_mr-50" />
                <PhoneMenu />
                <Menu />
                <div className={`open-popup ${isOpen === true ? "active" : ""}`} onClick={() => setIsOpen(prev => !prev)}>
                    <span></span>
                </div>
                <MenuMobile className="_trans-x-100" isOpen={isOpen} closePopup={setIsOpen}>
                    <Menu/>
                </MenuMobile>
            </div>
        </div>
    )
}

export default HeaderAbove;