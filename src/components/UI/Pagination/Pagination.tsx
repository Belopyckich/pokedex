import { useHistory, useParams } from 'react-router-dom';
import style from "./Pagination.module.css";

interface PaginationProps {
    pageCount: number
}

const Pagination: React.FC<PaginationProps> = ({pageCount}) => {
  const {page, type} = useParams<{page: string, type: string}>()
  const history = useHistory();

    return (
      <div className={style.pagesWrapper}>
        <div className={style.pagesContainer}>
          <button
            className={
              Number(page) === 1
                ? `${style.arrowDisable} ${style.pushLeftArrow}`
                : style.pushLeftArrow
            }
            disabled={Number(page) === 1}
            onClick={() => history.location.pathname.includes('types') ? history.push(`/types/${type}/1`) : history.push('/pokemons/1') }/>
          <button
            className={
              Number(page) === 1
                ? `${style.arrowDisable} ${style.leftArrow}`
                : style.leftArrow
            }
            disabled={Number(page) === 1}
            onClick={() => history.location.pathname.includes('types') ? history.push(`/types/${type}/${Number(page) - 1}`) : history.push(`/pokemons/${Number(page) - 1}`)}
          />
          <div className={style.pageNavigation}>
            <div className={style.pageNavigation__text}>{page}/{pageCount}</div>
          </div>
          <button
            className={
              Number(page) === pageCount
                ? `${style.arrowDisable} ${style.rightArrow}`
                : style.rightArrow
            }
            disabled={Number(page) === pageCount}
            onClick={() => history.location.pathname.includes('types') ? history.push(`/types/${type}/${Number(page) + 1}`) : history.push(`/pokemons/${Number(page) + 1}`)}
          />
          <button
            className={
              Number(page) === pageCount
                ? `${style.arrowDisable} ${style.pushRightArrow}`
                : style.pushRightArrow
            }
            disabled={Number(page) === pageCount}
            onClick={() => history.location.pathname.includes('types') ? history.push(`/types/${type}/${pageCount}`) : history.push(`/pokemons/${pageCount}`)}
          />
        </div>
      </div>
    );
};

export default Pagination;