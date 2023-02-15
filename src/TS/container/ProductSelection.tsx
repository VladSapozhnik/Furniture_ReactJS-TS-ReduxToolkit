import {FC, useState} from "react";

interface IProduct {
    id: number,
    title: string,
    href: string,
    category: ICategory[]
}

interface ICategory {
    id: number,
    title: string
    href: string
}
const ProductSelection:FC = () => {
    const [isActive, setIsActive] = useState<number>(0);

    const productArray: IProduct[] = [
        {
            id: 1,
            title: "Дивани",
            "href": "/#",
            "category": [
                {
                    id: 33,
                    title: "Диван 1",
                    "href": "/#"
                },
                {
                    id: 34,
                    title: "Диван 2",
                    "href": "/#"
                },
                {
                    id: 35,
                    title: "Диван 3",
                    "href": "/#"
                },
                {
                    id: 36,
                    title: "Диван 4",
                    "href": "/#"
                }
            ]
        },
        {
            id: 2,
            title: "ліжка",
            "href": "/#",
            "category": [
                {
                    id: 33,
                    title: "Диван 1",
                    "href": "/#"
                },
                {
                    id: 34,
                    title: "Диван 2",
                    "href": "/#"
                },
                {
                    id: 35,
                    title: "Диван 3",
                    "href": "/#"
                },
                {
                    id: 36,
                    title: "Диван 4",
                    "href": "/#"
                }
            ]
        },
        {
            id: 3,
            title: "Крісла",
            "href": "/#",
            "category": [
                {
                    id: 33,
                    title: "Диван 1",
                    "href": "/#"
                },
                {
                    id: 34,
                    title: "Диван 2",
                    "href": "/#"
                },
                {
                    id: 35,
                    title: "Диван 3",
                    "href": "/#"
                },
                {
                    id: 36,
                    title: "Диван 4",
                    "href": "/#"
                }
            ]
        },
        {
            id: 4,
            title: "комоди",
            "href": "/#",
            "category": [
                {
                    id: 33,
                    title: "Диван 1",
                    "href": "/#"
                },
                {
                    id: 34,
                    title: "Диван 2",
                    "href": "/#"
                },
                {
                    id: 35,
                    title: "Диван 3",
                    "href": "/#"
                },
                {
                    id: 36,
                    title: "Диван 4",
                    "href": "/#"
                }
            ]
        },
        {
            id: 5,
            title: "шафи",
            "href": "/#",
            "category": [
                {
                    id: 33,
                    title: "Диван 1",
                    "href": "/#"
                },
                {
                    id: 34,
                    title: "Диван 2",
                    "href": "/#"
                },
                {
                    id: 35,
                    title: "Диван 3",
                    "href": "/#"
                },
                {
                    id: 36,
                    title: "Диван 4",
                    "href": "/#"
                }
            ]
        },
        {
            id: 6,
            title: "Кухня",
            "href": "/#",
            "category": [
                {
                    id: 33,
                    title: "Диван 1",
                    "href": "/#"
                },
                {
                    id: 34,
                    title: "Диван 2",
                    "href": "/#"
                },
                {
                    id: 35,
                    title: "Диван 3",
                    "href": "/#"
                },
                {
                    id: 36,
                    title: "Диван 4",
                    "href": "/#"
                }
            ]
        }
    ]

    return (
        <ul className="product-selection _f _list-none">
            {productArray.map(item =>
                <li className="product-selection_item _text-upp _pos-rel" key={item.id} onClick={() => setIsActive(item.id)}>
                    <a href={item.href} className="product-selection_link">{item.title}</a>
                    <ul className={`product-subselection _list-none _pos-abs`} style={{display: isActive === item.id ? "block" : "none"}}>
                        {item.category.map(category => <li key={category.id} className="product-subselection_item"><a href={category.href}>{category.title}</a></li>)}
                    </ul>
                </li>
            )}
        </ul>
    )
}

export default ProductSelection;