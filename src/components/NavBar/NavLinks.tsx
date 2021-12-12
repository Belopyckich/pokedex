import React, {
  ChangeEvent,
  useContext,
} from "react";
import { useHistory} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import MySelect from "../UI/MySelect/MySelect";
import style from "./Navbar.module.css";
import back from "../../images/NavBar/leftArrow.svg";
import exit from "../../images/NavBar/exit.svg";

const NavLinks : React.FC = () => {
  
  const { setIsAuth } = useContext(AuthContext);
  const {
    search,
    setSearch,
    limit,
    setLimit,
    selectedSort,
    setSelectedSort,
    isSearchBarActive,
    isLimitActive,
    searchBy,
    setSearchBy,
  } = useContext(SearchContext);

  const history = useHistory();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    history.push("/pokemons/1");
    setSearch(e.target.value);
  }

  return (
    <div>
      <div className={style.navbarWrapper}>
        {isSearchBarActive ? (
          <input
            className={style.input}
            value={search}
            onChange={handleChange}
          />
        ) : (
          <div className={style.disabledSearchWrapper}></div>
        )}
        <img
          src={back}
          className={style.back}
          alt="back"
          onClick={() => history.goBack()}
        />
        {isLimitActive ? (
          <div className={style.selectWrapper}>
            <div style={{ color: "white" }}>LIMIT:</div>
            <MySelect
              isPageChanger={false}
              value={limit}
              onChange={setLimit}
              options={[
                { value: "10", name: "10" },
                { value: "20", name: "20" },
                { value: "30", name: "30" },
                { value: "50", name: "50" },
              ]}
            />
          </div>
        ) : (
          <div></div>
        )}
        <div className={style.selectWrapper}>
          <div style={{ color: "white" }}>SEARCH BY:</div>
          <MySelect
            isPageChanger={true}
            value={searchBy}
            onChange={setSearchBy}
            options={[
              { value: "/pokemons/1", name: "POKEMONS" },
              { value: "/types", name: "TYPES" },
            ]}
          />
        </div>
        <div className={style.selectWrapper}>
          {isSearchBarActive ? (
            <div className={style.pokemonSearchWrapper}>
              <div className={style.selectWrapper}>
                <div style={{ color: "white" }}>SORT BY:</div>
                <MySelect
                  isPageChanger={false}
                  value={selectedSort}
                  onChange={setSelectedSort}
                  options={[
                    { value: "alphabet", name: "ALPHABET" },
                    { value: "favorite", name: "FAVORITE" },
                    { value: "weight", name: "WEIGHT" },
                    { value: "height", name: "HEIGHT" },
                    { value: "id", name: "ID" },
                    { value: "hp", name: "HP" },
                    { value: "attack", name: "ATTACK" },
                    { value: "defense", name: "DEFENSE" },
                    { value: "speed", name: "SPEED" },
                  ]}
                />
              </div>
            </div>
          ) : (
            <div className={style.disabledSearchWrapper}></div>
          )}
        </div>
        <img src={exit} className={style.exit} onClick={logout} alt="exit" />
      </div>
    </div>
  );
};

export default NavLinks;
