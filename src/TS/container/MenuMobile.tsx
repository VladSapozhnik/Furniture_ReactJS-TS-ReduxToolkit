import {FC, ReactNode} from "react";
import Logo from "./Logo";

interface IProps {
    children: ReactNode,
    className?: string,
    closePopuo: (prev: boolean) => void,
    isOpen: boolean
}
const MenuMobile:FC<IProps> = ({children, className = "", isOpen, closePopuo}) => {
    return (
        <div className={`menu-mobile ${isOpen ===    true ? "active" : ""} ${className}`}>
            <div className="menu-mobile_close" onClick={() => closePopuo(false)}></div>
            <Logo logo="logo" />
            {children}
        </div>
    )
}

export default MenuMobile;