import React, { useState, FC, createContext } from "react";

export interface SearchContextProps {
  children: React.ReactNode | React.ReactChild;
}

export interface SearchContextInterface {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  limit: number;
  setLimit: any;
  currentPage: string;
  setCurrentPage: any;
  selectedSort: string;
  setSelectedSort: any;
  isSearchBarActive: boolean;
  setIsSearchBarActive: any;
  isLimitActive: boolean;
  setIsLimitActive: any;
}

export const SearchContext = createContext<SearchContextInterface>(
  {} as SearchContextInterface
);

export const SearchContextComponent: FC<SearchContextProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<string>("pokemons");
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
        currentPage,
        setCurrentPage,
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
