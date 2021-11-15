import React, {FC, useEffect, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import MyButton from '../UI/MyButton/MyButton';
import style from "./LoginForm.module.css";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form";
import MyInput from "../UI/MyInput/MyInput";
import * as yup from "yup";
import nameImg from "../../images/name.png";
import passwordImg from "../../images/password.png";

type IFormInputs = {
    name: string,
    password: string
}

const schema = yup.object({
  name: yup.string().min(3).required(),
  password: yup.string().min(6).required(),
}).required()

const LoginForm: FC = () => {
    const { 
      register, 
      handleSubmit, 
      formState: { errors } 
    } = useForm<IFormInputs>({
      mode: "onBlur",
      resolver: yupResolver(schema)
    })

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const onSubmit: SubmitHandler<IFormInputs> = () => {
       setIsAuth(true);
       localStorage.setItem('auth', 'true');
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
      <MyInput property="name" placeholder="Enter name" message={errors.name?.message} register={register} type="text" img={nameImg}/>
      <MyInput property="password" placeholder="Enter password" message={errors.password?.message} register={register} type="password" img={passwordImg}/>
      <MyButton type="submit" error={[errors.name?.message, errors.password?.message]}>JOIN FAMILY</MyButton>
    </form>
    )   
}

export default LoginForm;