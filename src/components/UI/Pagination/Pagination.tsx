import React, {FC} from 'react';
import style from "./Pagination.module.css";

interface PaginationProps {
    currentPage: number,
    setCurrentPage: any,
    pageCount: number
}

const Pagination: FC<PaginationProps> = ({currentPage, setCurrentPage, pageCount}) => {
    return (
        <div className={style.pagesWrapper}>
        <div className={style.pagesContainer}>
          <button
            className={
              currentPage === 1
                ? `${style.arrowDisable} ${style.pushLeftArrow}`
                : style.pushLeftArrow
            }
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
          <button
            className={
              currentPage === 1
                ? `${style.arrowDisable} ${style.leftArrow}`
                : style.leftArrow
            }
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <div className={style.pageNavigation}>
            <div className={style.pageNavigation__text}>{currentPage}/{pageCount}</div>
          </div>
          <button
            className={
              currentPage === pageCount
                ? `${style.arrowDisable} ${style.rightArrow}`
                : style.rightArrow
            }
            disabled={currentPage === pageCount}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
          <button
            className={
              currentPage === pageCount
                ? `${style.arrowDisable} ${style.pushRightArrow}`
                : style.pushRightArrow
            }
            disabled={currentPage === pageCount}
            onClick={() => setCurrentPage(pageCount)}
          />
        </div>
      </div>
    );
};

export default Pagination;