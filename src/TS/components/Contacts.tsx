import {FC} from "react";
import ContactsContent from "../container/ContactsContent";

const Contacts:FC = () => {
    // const [text, setText] = useState<string>("");

    return (
        <section className="contacts">
            <h2 className="contacts_title h2">Залишились питання?</h2>
            <div className="contacts-holder _f _pos-rel">
                <div className="contacts-holder_pic object-fit _wid-85">
                    <img src={require("../../images/contacts-bg.jpg")} alt="contacts-bg" />
                </div>
                <ContactsContent className="_pos-right _f-column" />
            </div>
        </section>
    )
}

export default Contacts;