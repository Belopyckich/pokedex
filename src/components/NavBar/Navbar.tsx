import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import MySelect from "../UI/MySelect/MySelect";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [name, setName] = useState<string | null>("");

  const { setIsAuth } = useContext(AuthContext);
  const {
    search,
    setSearch,
    limit,
    setLimit,
    currentPage,
    setCurrentPage,
    selectedSort,
    setSelectedSort,
    isSearchBarActive,
    isLimitActive
  } = useContext(SearchContext);

  const history = useHistory();

  useEffect(() => {
    setName(localStorage.getItem("user"));
  }, [name]);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbarLinks}>
        <NavLink
          to="/pokemons"
          onClick={() => {
            setSearch("");
            setCurrentPage("pokemons");
          }}
          className={style.userText}
        >
          {name} POKEDEX
        </NavLink>
        <div className={style.searchWrapper}>
        <button className={style.back} onClick={() => history.goBack()}/>
          {isLimitActive ?
            <div className={style.selectWrapper}>
            <div style={{ color: "white" }}>LIMIT:</div>
            <MySelect
              isPageChanger={false}
              value={limit}
              onChange={setLimit}
              options={[
                { value: 20, name: "20" },
                { value: 30, name: "30" },
                { value: 50, name: "50" },
              ]}
            />
            </div>
            :
            <div></div>
          }
          <div className={style.selectWrapper}>
            <div style={{ color: "white" }}>SEARCH BY:</div>
            <MySelect
              isPageChanger={true}
              value={currentPage}
              onChange={setCurrentPage}
              options={[
                { value: "pokemons", name: "POKEMONS" },
                { value: "type", name: "TYPES" },
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
                <input
                  className={style.input}
                  value={search}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSearch(e.target.value)
                  }
                />
              </div>
            ) : (
              <div className={style.disabledSearchWrapper}></div>
            )}
          </div>
        </div>
        <button
          className={style.exit}
          style={{ cursor: "pointer" }}
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Navbar;
