import React, {useMemo, useRef, useState} from 'react';
import {PaginationContainer} from "./PaginationStyled";

const Pagination = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 5}) => {

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
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    // // const memo = useMemo(() => portionNumber);
    // const memo = useRef(portionNumber)


    return (
        <PaginationContainer>

            <button disabled={portionNumber === 1} onClick={() => {
                setPortionNumber(state => state - 1)
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

            <button disabled={!(portionCount > portionNumber)} onClick={() => {
                setPortionNumber(state => state + 1)
            }}>▶️</button>
     </PaginationContainer>
    );
};

export default Pagination;