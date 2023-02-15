import {FC} from "react";
import AboutContent from "../container/AboutContent";



const About:FC = () => {


    return (
        <section className="about">
            <h2 className="about_title h2">Про нас</h2>
            <div className="about-holder _f _j-end _pos-rel">
                <AboutContent />
                <div className="about-holder_pic object-fit _wid-70">
                    <img src={require("../../images/about-bg.jpg")} alt="about-bg" />
                </div>
            </div>
        </section>
    )
}

export default About;