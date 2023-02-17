import {FC, useState, useRef, useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Navigation, Controller} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import MainContent from "../container/MainContent";
import {useAppDispatch, useAppSelector} from "../hook";
import {fetchMainPresent} from "../../store/MainSlice";

const Main: FC = () => {
    const [activeSlide, setActiveSlide] = useState<number>(1);

    const dispatch = useAppDispatch();
    const mainSlide = useAppSelector(state => state.mainPresent.mainPresentArray);


    useEffect(() => {
        dispatch(fetchMainPresent());
    }, [dispatch])

    const mainSwiperRef = useRef<any>();
    const secondarySwiperRef = useRef<any>();

    useEffect(() => {
        mainSwiperRef.current.controller.control = secondarySwiperRef.current;
        secondarySwiperRef.current.controller.control = mainSwiperRef.current;
    }, []);


    return (
        <main className="main _pos-rel">
            <Swiper
                onSwiper={swiper => mainSwiperRef.current = swiper}
                modules={[Controller]}
            >
                {mainSlide.map(item =>
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
                    onSlideChange={swiper => {
                        // console.log(swiper.isBeginning)
                        // console.log(swiper.isEnd)
                        setActiveSlide(swiper.activeIndex + 1)
                    }}
                >
                    {mainSlide.map(item =>
                        <SwiperSlide key={item.id}>
                            <MainContent title={item.title} subtitle={item.subtitle} href={item.href} description={item.description}
                                         countSlide={mainSlide.length} activeSlide={activeSlide}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </main>
    )
}

export default Main;