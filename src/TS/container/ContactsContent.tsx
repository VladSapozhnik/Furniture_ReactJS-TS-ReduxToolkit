import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
interface IProps {
    className: string,
}

interface IShippingFields {
    name: string,
    email: string
}
const ContactsContent:FC<IProps> = ({className}) => {
    const { register, handleSubmit, reset, formState: {errors}} = useForm<IShippingFields>({mode: "onChange"});

    const handlerSubmit:SubmitHandler<IShippingFields> = data => {
        alert(`Name: ${data.name}, email: ${data.email}`);
        reset();
    }

    return (
        <div className={`contacts-content ${className}`}>
            <h3 className="contacts-content_title _mb-30">Замовте консультацію</h3>
            <form className="contacts-content_form _wid-100 _mb-30" onSubmit={handleSubmit(handlerSubmit)}>
                <div className="validation__field _mb-15">
                    <input className="validation__input _wid-100" {...register('name', {
                        required: "Поле ім'я обов'язкове для вводу",
                    })} type="text" placeholder="Ім'я" />
                    {errors?.name && <div style={{color: "red"}}>{errors.name.message}</div>}
                </div>
                <div className="validation__field _mb-15">
                    <input className="validation__input _wid-100" {
                        ...register('email', {
                            required: "Введено невірну адресу ел. пошти",
                            pattern: {
                                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                message: "Введено невірну адресу ел. пошти"
                            }
                        })
                    } type="tel" placeholder="Номер телефону" />
                    {errors?.email && <div style={{color: "red"}}>{errors.email.message}</div>}
                </div>
                <button className="contacts-content-form_btn btn" type="submit">Відправити</button>
            </form>
            <p className="contacts-content_info">
                Залиште заявку або телефонуйте за номером <span>(099) 111 22 33</span>, і наш менеджер звяжеться з вами для кваліфікованої консультації.
            </p>
        </div>
    )
}

export default ContactsContent;