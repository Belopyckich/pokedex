import React, {FC, useEffect} from 'react';
import style from "./MyButton.module.css";

interface MyButtonProps {
    error: any[];
    type?: any;
    children: string;
}
const MyButton: FC<MyButtonProps> = ({type, children, error}) => {

    return (
        <button type={type} disabled={error.find(item => typeof item !== 'undefined')} className={style.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;