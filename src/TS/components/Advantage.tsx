import {FC, useEffect} from "react";
import { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import AdvantageItem from "../container/AdvantageItem";
import {useAppDispatch, useAppSelector} from "../hook";
import {fetchAdvantage} from "../../store/AdvantageSlice";


const Advantage:FC = () => {
    const dispatch = useAppDispatch();
    const advantageArray = useAppSelector(state => state.advantage.advantageArray);

    useEffect(() => {
        dispatch(fetchAdvantage());
    }, [dispatch])

    return (
        <div className="advantage">
            <div className="container">
                <h2 className="advantage_title h2">Наші переваги</h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation
                    breakpoints={{
                        380: {
                            slidesPerView: 1,
                        },
                        960: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        1600: {
                            spaceBetween: 30,
                            slidesPerView: 3
                        },
                    }}
                >
                    {advantageArray.map(item => <SwiperSlide key={item.id}><AdvantageItem title={item.title} src={item.src} description={item.description}/></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default Advantage;