import {FC, useEffect, useState} from "react";
import {fetchCategoriesProduct} from "../../store/categoriesProductSlice";
import CategoriesSelect from "../container/CategoriesSelect";
import CategoriesProduct from "../container/CategoriesProduct";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/pagination";
import {useAppDispatch, useAppSelector} from "../hook";

interface ICategoriesSelectArray {
    id: number,
    src: string,
    title: string,
    name: string
}

const Categories: FC = () => {
    const [isActive, setIsActive] = useState<number>(0);
    const [nameProduct, setNameProduct] = useState<string>("sofas");


    const dispatch = useAppDispatch();
    const productArray = useAppSelector(state => state.categoriesProduct.productArray);

    useEffect(() => {
        dispatch(fetchCategoriesProduct(nameProduct));
    }, [dispatch, nameProduct])

    const categoriesSelectArray: ICategoriesSelectArray[] = [
        {
            "id": 1,
            "src": "1.svg",
            "title": "Дивани",
            "name": "sofas"
        },
        {
            "id": 2,
            "src": "2.svg",
            "title": "Ліжка",
            "name": "beds"
        },
        {
            "id": 3,
            "src": "3.svg",
            "title": "Крісла",
            "name": "chairs"
        },
        {
            "id": 4,
            "src": "4.svg",
            "title": "Комоди",
            "name": "dressers"
        },
        {
            "id": 5,
            "src": "5.svg",
            "title": "Шафи",
            "name": "wardrobe"
        },
        {
            "id": 6,
            "src": "6.svg",
            "title": "Кухня",
            "name": "kitchen"
        },
    ]

    const handlerClick = (number: number, name: string): void => {
        setIsActive(number);
        setNameProduct(name);
    }

    return (
        <>
            <div className="categories">
                <div className="container">
                    <h2 className="categories_title h2">Категорії товарів</h2>
                    <Swiper
                        className="categories_select _f _i-end"
                        spaceBetween={30}
                        slidesPerView={3}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            380: {
                                spaceBetween: 15,
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            480: {
                                spaceBetween: 15,
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            },
                            640: {
                                spaceBetween: 15,
                                slidesPerView: 4,
                                slidesPerGroup: 2
                            },
                            980: {
                                spaceBetween: 20,
                                slidesPerView: 6,
                            },
                            1520: {
                                spaceBetween: 30,
                                slidesPerView: 6
                            },
                        }}
                    >
                        {categoriesSelectArray.map((item, index) =>
                            <SwiperSlide key={item.id}>
                                <CategoriesSelect
                                    src={item.src}
                                    title={item.title}
                                    name={item.name}
                                    isActive={isActive}
                                    index={index}
                                    handlerClick={handlerClick}
                                /></SwiperSlide>)}
                    </Swiper>
                    <div className="categories_products _f _f-wrap ">
                        {productArray.map(item =>
                            <CategoriesProduct
                                key={item.id}
                                src={item.src}
                                isNew={item.isNew}
                                isStock={item.isStock}
                                isHitSale={item.isHitSale}
                                title={item.title}
                                price={item.price}
                                stockPrice={item.stockPrice}
                            />)
                        }
                    </div>
                    <a href="/#" className="categories_btn _ml-auto _mr-auto _block">В каталог</a>
                </div>
            </div>
        </>
    )
}

export default Categories;