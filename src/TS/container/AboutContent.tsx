import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hook";
import {fetchAboutContent} from "../../store/aboutSlice";

const AboutContent:FC = () => {
    const dispatch = useAppDispatch();

    const aboutContent = useAppSelector(state => state.aboutContent.aboutContent);

    useEffect(() => {
        dispatch(fetchAboutContent());
    }, [dispatch])

    return (
        <div className="about-content _pos-left">
            {aboutContent.map((item, i) => <div key={item.id} className="about-content_text">{ (i === 0) ? <span>"Furniture" –</span> : null} {item.text}</div>)}
        </div>
    )
}

export default AboutContent;