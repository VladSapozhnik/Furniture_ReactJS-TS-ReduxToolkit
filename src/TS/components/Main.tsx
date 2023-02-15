import {FC, useState, useRef, useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Navigation, Controller} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import MainContent from "../container/MainContent";

interface ISlider {
    id: number,
    src: string,
    href: string,
    title: string,
    subtitle: string,
    description: string
}

const Main: FC = () => {
    const [activeSlide, setActiveSlide] = useState<number>(1);

    const mainSwiperRef = useRef<any>();
    const secondarySwiperRef = useRef<any>();

    useEffect(() => {
        mainSwiperRef.current.controller.control = secondarySwiperRef.current;
        secondarySwiperRef.current.controller.control = mainSwiperRef.current;
    }, []);

    const sliderArray: ISlider[] = [
        {
            "id": 1,
            "src": "main-slider-bg.jpg",
            "href": "/#",
            "title": "Новинка!",
            "subtitle": "Ліжко Ornella",
            "description": "Це новий рівень комфортного сну"
        },
        {
            "id": 2,
            "src": "main-slider-bg.jpg",
            "href": "/#",
            "title": "Новинка2!",
            "subtitle": "Ліжко Ornella",
            "description": "Це новий рівень комфортного сну"
        },
        {
            "id": 3,
            "src": "main-slider-bg.jpg",
            "href": "/#",
            "title": "Новинка3!",
            "subtitle": "Ліжко Ornella",
            "description": "Це новий рівень комфортного сну"
        },
        {
            "id": 4,
            "src": "main-slider-bg.jpg",
            "href": "/#",
            "title": "Новинка4!",
            "subtitle": "Ліжко Ornella",
            "description": "Це новий рівень комфортного сну"
        }
    ]

    return (
        <main className="main _pos-rel">
            <Swiper
                onSwiper={swiper => mainSwiperRef.current = swiper}
                modules={[Controller]}
            >
                {sliderArray.map(item =>
                    <SwiperSlide key={item.id}>
                        <div className="main-slide object-fit">
                            <img className="main-slide_bg" src={require(`../../images/main/${item.src}`)} alt={item.description}/>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <div className="container _trans-x-c _wid-100 _index-2">
                <Swiper
                    onSwiper={swiper => secondarySwiperRef.current = swiper}
                    modules={[Navigation, EffectFade, Controller]}
                    effect="fade"
                    // style={{width: "462px", margin: "0px"}}
                    onSlideChange={swiper => {
                        // console.log(swiper.isBeginning)
                        // console.log(swiper.isEnd)
                        setActiveSlide(swiper.activeIndex + 1)
                    }}
                >
                    {sliderArray.map(item =>
                        <SwiperSlide key={item.id}>
                            <MainContent title={item.title} subtitle={item.subtitle} href={item.href} description={item.description}
                                         countSlide={sliderArray.length} activeSlide={activeSlide}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </main>
    )
}

export default Main;