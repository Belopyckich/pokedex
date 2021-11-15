import style from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { FormSubmitHandler, SubmitHandler } from "redux-form";
import headerImg from "../../images/autorisation.png";


interface FormData {
    userName: string
    password: string
}

const Login: React.FC = () => {
    return (
        <div className={style.loginWrapper}>
            <div className={style.loginForm}>
                <img src={headerImg} alt="headImg" className={style.loginFormImg}/>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;