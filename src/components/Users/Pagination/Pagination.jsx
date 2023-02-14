import React from 'react';
import {PaginationContainer} from "./PaginationStyled";

const Pagination = ({currentPage, onPageChanged,totalUsersCount,pageSize}) => {

    let pagesCount = 1;
    let pagesNum = Math.ceil(totalUsersCount / pageSize);
    if (pagesNum > 10) {
        pagesCount = 10;
    } else {
        pagesCount = pagesNum;
    }

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <PaginationContainer>
            {pages.map((p, index) => {
                return <span key={index}
                             className={ currentPage === p ? "active" :null}
                             onClick={(e) => {

                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </PaginationContainer>
    );
};

export default Pagination;