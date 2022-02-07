import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import styles from'../../../Assets/CSS/Partials/Search.module.css';

const Search = () => {
    return (
        <>
             <div className={styles.NavSearch}>
                <input type="text"/><VscSearch/>
            </div>
        </>
    );
};

export default Search;