import {FC} from "react";

interface IProps {
    logo: string,
    className?: string
}
const Logo:FC<IProps> = ({logo, className= ""}) => {
    return (
        <a className={`logo ${className} _f _i-center`} href="/#">
           <img className="logo_pic" src={require(`../../images/${logo}.svg`)}  alt="logo" />
            <span className="logo_name">Furniture.test</span>
        </a>
    )
}

export default Logo;