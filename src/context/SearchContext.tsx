import React, { useState, FC, createContext } from "react";

export interface SearchContextProps {
  children: React.ReactNode | React.ReactChild;
}

export interface SearchContextInterface {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  searchBy: string;
  setSearchBy: React.Dispatch<React.SetStateAction<string>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  isSearchBarActive: boolean;
  setIsSearchBarActive: React.Dispatch<React.SetStateAction<boolean>>;
  isLimitActive: boolean;
  setIsLimitActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchContextInterface>(
  {} as SearchContextInterface
);

export const SearchContextComponent: FC<SearchContextProps> = ({
  children,
}) => {
  const [searchBy, setSearchBy] = useState<string>("pokemons");
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(20);
  const [selectedSort, setSelectedSort] = useState<string>("alphabet");
  const [isSearchBarActive, setIsSearchBarActive] = useState<boolean>(true);
  const [isLimitActive, setIsLimitActive] = useState<boolean>(true);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        limit,
        setLimit,
        searchBy,
        setSearchBy,
        selectedSort,
        setSelectedSort,
        isSearchBarActive,
        setIsSearchBarActive,
        isLimitActive,
        setIsLimitActive,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
