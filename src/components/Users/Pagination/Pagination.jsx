import React from 'react';
import {PaginationContainer} from "./PaginationStyled";


const Pagination = ({setCurrentPortion,currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 5,currentPortion=1}) => {

    let pagesCount = 1;
    let pagesNum = Math.ceil(totalItemsCount / pageSize);
    if (pagesNum > 100) {
        pagesCount = 100;
    } else {
        pagesCount = pagesNum;
    }


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize);
    // let [portionNumber, setPortionNumber] = useState(currentPortion);
    let leftPortionPageNumber = (currentPortion - 1) * portionSize + 1;
    let rightPortionPageNumber = currentPortion * portionSize;




    return (
        <PaginationContainer>

            <button disabled={currentPortion === 1} onClick={() => {
                setCurrentPortion(currentPortion - 1)
            }}>◀️</button>

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span
                        className={ currentPage === p ? "active" :null}
                        key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}

            <button disabled={!(portionCount > currentPortion)} onClick={() => {
                setCurrentPortion(currentPortion + 1)

            }}>▶️</button>
     </PaginationContainer>
    );
};

export default Pagination;