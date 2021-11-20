import React, {FC, useContext} from 'react';
import style from "./LoginPage.module.css";
import headerImg from "../../images/loginPageImages/autorisation.png";
import { AuthContext } from '../../context/AuthContext';
import MyButton from '../../components/UI/MyButton/MyButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form";
import MyInput from "../../components/UI/MyInput/MyInput";
import * as yup from "yup";
import nameImg from "../../images/loginPageImages/name.png";
import passwordImg from "../../images/loginPageImages/password.png";

type IFormInputs = {
    name: string,
    password: string
}

const schema = yup.object({
  name: yup.string().min(3).required(),
  password: yup.string().min(6).required(),
}).required()

const Login: FC = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<IFormInputs>({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
  
    const {setIsAuth} = useContext(AuthContext);
  
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);
        setIsAuth(true);
        localStorage.setItem('auth', 'false');
        localStorage.setItem('user', data.name.toUpperCase());
    }

    return (
        <div className={style.loginWrapper}>
            <div className={style.loginForm}>
                <img src={headerImg} alt="headImg" className={style.loginFormImg}/>
                <form onSubmit={handleSubmit(onSubmit)} className={style.loginFormStyle}>
                    <MyInput property="name" placeholder="Enter name" message={errors.name?.message} register={register} type="text" img={nameImg}/>
                    <MyInput property="password" placeholder="Enter password" message={errors.password?.message} register={register} type="password" img={passwordImg}/>
                    <MyButton type="submit" error={[errors.name?.message, errors.password?.message]}>JOIN FAMILY</MyButton>
                </form>
            </div>
        </div>
    )
}

export default Login;