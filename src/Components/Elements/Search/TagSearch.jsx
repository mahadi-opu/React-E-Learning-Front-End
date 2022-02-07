import React from 'react';
import { VscSearch } from 'react-icons/vsc';
// import { VscSearch } from 'react-icons/vsc';
import styles from '../../../Assets/CSS/Partials/Search.module.css';

const TagSearch = () => {
    return (
        <>
            <div className={styles.TagSearch}>
                <input type="text"/><VscSearch/>
            </div>
        </>
    );
};

export default TagSearch;