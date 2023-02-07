import React from 'react';
import {PaginationContainer} from "./PaginationStyled";

const Pagination = ({pages,currentPage, onPageChanged}) => {
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