import React, {useState} from 'react';

import SearchIcon from "@mui/icons-material/Search.js";
import {useNavigate} from "react-router-dom";
import {SearchButton, SearchInput, SearchWrapper} from "./SearchStyled.js";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm("");
        }
    };
    return (
        <SearchWrapper component="form"
                       onSubmit={onhandleSubmit}>
            <SearchInput placeholder="Search"
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}/>
            <SearchButton
                type="submit"
                aria-label="search">
                <SearchIcon sx={{fontSize: 30, color: "black"}}/>
            </SearchButton>
        </SearchWrapper>
    );
};

export default Search;