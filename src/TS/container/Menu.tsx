import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hook";
import {fetchMenuSlice} from "../../store/menuSlice";

interface IProps {
    className?: string
}

const Menu:FC<IProps> = ({className = ""}) => {
    const dispatch = useAppDispatch();
    const menuArray = useAppSelector(state => state.menu.menu);

    useEffect(() => {
        dispatch(fetchMenuSlice());
    }, [dispatch])

    return (
        <ul className={`menu ${className} _f _list-none`}>
            {menuArray.map(item => <li className="menu_item" key={item.id}><a className="menu_link _text-upp" href={item.href}>{item.title}</a></li>)}
        </ul>
    )
}

export default Menu;