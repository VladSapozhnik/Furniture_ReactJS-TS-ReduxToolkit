import {FC} from "react";
import { useSwiper } from 'swiper/react';
interface IProps {
    title: string,
    subtitle: string,
    href: string,
    description: string,
    countSlide: number
    activeSlide: number
}

const MainContent:FC<IProps> = ({title, subtitle, href, description, countSlide, activeSlide}) => {
    const swiper = useSwiper();
    // const swiperSlide = useSwiperSlide();
    return (
        <div className="main-content _f _f-column _i-center _width-content">
            <h1 className="main-content_title h1">{title}</h1>
            <h3 className="main-content_subtitle">{subtitle}</h3>
            <p className="main-content_description _text-c">
                {description}
            </p>
            <a href={href} className="main-content_btn">Детальніше</a>
            <div className="main-content_number">0{activeSlide}<span>/ 0{countSlide}</span></div>
            <div className="arrows _f">
                <button disabled={swiper.isBeginning} className={"arrows_btn arrows_btn--prev"} onClick={() => swiper.slidePrev()}></button>
                <button disabled={swiper.isEnd} className={"arrows_btn arrows_btn--next"} onClick={() => swiper.slideNext()}></button>
            </div>
        </div>
    )
}

export default MainContent;