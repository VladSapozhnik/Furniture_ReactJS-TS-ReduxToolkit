import {FC, useState} from "react";
import ProductSelection from "../../container/ProductSelection";
import Logo from "../../container/Logo";
import Basket from "../../container/Basket";

const HeaderUnder:FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className="header-under _pt-15 _pb-15">
                <div className="container _f _i-center _j-between">
                    <div className={`open-popup ${isOpen === true ? "active" : ""}`} onClick={() => setIsOpen(prev => !prev)}>
                        <span></span>
                    </div>

                    <ProductSelection />
                    <Logo logo="logo" />
                    <Basket />
                </div>
            </div>
        </>
    )
}

export default HeaderUnder;