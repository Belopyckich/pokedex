import style from "./SearchPage.module.css";
import errorImage from "../../images/Error/psyduck.svg";
import Footer from '../../components/UI/Footer/Footer';

const EmptyPage = () => {

    return (
        <div className={style.search}>
          <div className={style.errorWrapper}>
            <img className={style.errorImage} src={errorImage} alt="errorImage" />
            <div className={style.errorMessage}>
              NO POKEMON MATCHED YOUR SEARCH
            </div>
          </div>
          <Footer/>
        </div>
    )
};

export default EmptyPage;