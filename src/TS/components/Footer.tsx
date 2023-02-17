import Logo from "../container/Logo";
import FooterMenu from "../container/FooterMenu";
import FooterContacts from "../container/FooterContacts";
import {useAppDispatch, useAppSelector} from "../hook";
import {useEffect} from "react";
import {fetchProductMenu} from "../../store/menuSlice";

const Footer = () => {
    const dispatch = useAppDispatch();

    const menu = useAppSelector(state => state.menu.footerMenu);
    const productMenu = useAppSelector( state =>  state.menu.productMenu);

    useEffect(() => {
        dispatch(fetchProductMenu());
    }, [dispatch])

    return (
        <footer className="footer _pos-rel _f">
            <div className="footer_arrow-top _pos-abs _c-pointer"></div>
            <div className="footer-content _wid-45 _ml-auto">
                <Logo logo="footer-logo" className="_mb-50"/>
                <div className="footer-menu _f _mb-100">
                    <ul className="footer-menu_product _list-none _mr-55">
                        {productMenu.map(item => <FooterMenu key={item.id} href={item.href} title={item.title}/>)}
                    </ul>

                    <ul className="footer-menu_category _list-none">
                        {menu.map(item => <FooterMenu key={item.id} href={item.href} title={item.title}/>)}
                    </ul>
                    <FooterContacts />
                </div>
                <div className="footer-info _f _j-between">
                    <div className="footer-info_copy">© ТОВ Furniture, працюємо з 2006 року</div>
                    <div className="footer-info_name _text-upp">Глянець — розробка інтернет-магазинів</div>
                </div>
            </div>
            <div className="footer_pic _wid-55 object-fit">
                <img src={require("../../images/footer-bg.jpg")} alt="footer-bg"/>
            </div>
        </footer>
    )
}

export default Footer;