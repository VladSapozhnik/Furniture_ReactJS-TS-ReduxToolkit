import {FC, useEffect, useState} from "react";
import {fetchCategoriesProduct, fetchCategoriesSelect} from "../../store/categoriesProductSlice";
import CategoriesSelect from "../container/CategoriesSelect";
import CategoriesProduct from "../container/CategoriesProduct";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/pagination";
import {useAppDispatch, useAppSelector} from "../hook";


const Categories: FC = () => {
    const [isActive, setIsActive] = useState<number>(0);
    const [nameProduct, setNameProduct] = useState<string>("sofas");

    const dispatch = useAppDispatch();

    const productArray = useAppSelector(state => state.categoriesProduct.productArray);
    const productSelect  = useAppSelector(state => state.categoriesProduct.productSelect);

    useEffect(() => {
        dispatch(fetchCategoriesSelect());
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchCategoriesProduct(nameProduct));
    }, [dispatch, nameProduct])

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
                        {productSelect.map((item, index) =>
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