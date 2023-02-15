import {FC} from "react";
import { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import AdvantageItem from "../container/AdvantageItem";

interface IAdvantage {
    id: number,
    src: string,
    title: string,
    description: string
}

const Advantage:FC = () => {
    const advantageArray: IAdvantage[] = [
        {
            "id": 1,
            "src": "1.jpg",
            "title": "Меблі преміум класу",
            "description": "За 14 років на ринку меблів для дому ми стали надійними партнерами на ринку Вінницької області та України"
        },
        {
            "id": 2,
            "src": "2.jpg",
            "title": "Надійність",
            "description": "За 14 років на ринку меблів для дому ми стали надійними партнерами на ринку Вінницької області та України"
        },
        {
            "id": 3,
            "src": "3.jpg",
            "title": "Безкоштовна доставка",
            "description": "За 14 років на ринку меблів для дому ми стали надійними партнерами на ринку Вінницької області та України"
        },
        {
            "id": 4,
            "src": "1.jpg",
            "title": "Меблі преміум класу",
            "description": "За 14 років на ринку меблів для дому ми стали надійними партнерами на ринку Вінницької області та України"
        },
        {
            "id": 5,
            "src": "2.jpg",
            "title": "Надійність",
            "description": "За 14 років на ринку меблів для дому ми стали надійними партнерами на ринку Вінницької області та України"
        },
        {
            "id": 6,
            "src": "3.jpg",
            "title": "Безкоштовна доставка",
            "description": "За 14 років на ринку меблів для дому ми стали надійними партнерами на ринку Вінницької області та України"
        }
    ]

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
                        // 540: {
                        //     slidesPerView: 2,
                        // },
                        // 798: {
                        //     slidesPerView: 1,
                        // },
                        960: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        // 1280: {
                        //     spaceBetween: 30,
                        //     slidesPerView: 2
                        // },
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