import React, {FC, useEffect} from 'react';
import style from "./MyInput.module.css";

interface MyInputProps {
    property: string,
    placeholder?: string,
    message?: string,
    register: any,
    type?: string,
    img?: string,
}
const MyInput: FC<MyInputProps> = ({property, register, message, placeholder, type, img}) => {

    return (
        <div className={style.myInputWrapper}>
            <div className={style.myInputImgWrapper}>
                <img src={img} className={style.myInputImg} alt={property}/>
            </div>
            <div className={style.myInputContainer}>
                <div className={message ? style.myValidTextError : style.myValidText} >{message}</div>
                <input {...register(property, { required: true, maxLength: 20 })} placeholder={placeholder} type={type}  className={message ? style.myInputError : style.myInput}></input>
            </div>
        </div>
    );
};

export default MyInput;