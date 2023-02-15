import {FC} from "react";

interface IProduct {
    src: string,
    isNew: boolean,
    isStock: boolean,
    isHitSale: boolean,
    title: string,
    price: number,
    stockPrice: number | null
}
const CategoriesProduct:FC<IProduct> = ({src, isNew, isStock, isHitSale, title, price, stockPrice}) => {
    const prettify = (num:number):string => {
        let n = num.toString();
        let separator = " ";
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    }

    return (
        <div className="categories-product _pos-rel _f _f-column">
            <img className="categories-product_pic" src={require("../../images/product/"+src)} alt={title}/>
            <div className="categories-product_label product-label _f _f-column _pos-abs _pos-left _pos-top-10">
                {isNew === true ? <span className="product-label_new _pt-5 _pb-5 _pl-15 _pr-15">Новинка</span> : null}
                {isHitSale === true ? <span className="product-label_hit-stock _pt-5 _pb-5 _pl-15 _pr-15">Хіт продаж</span> : null}
                {isStock === true ? <span className="product-label_stock _pt-5 _pb-5 _pl-15 _pr-15">Акція</span> : null}
            </div>
            <div className="categories-product_info product-info _f _j-between">
                <h3 className="product-info_title">{title}</h3>
                <div className="product-info_price product-price">
                    {stockPrice !== null && isStock === true ? <span className="product-price_stock _mr-10">{prettify(stockPrice)} грн</span> : null}
                    <span className={`product-price_current ${stockPrice !== null && isStock === true ? "active" : ''}`}>{prettify(price)} грн</span>
                </div>
            </div>
        </div>
    )
}

export default CategoriesProduct;