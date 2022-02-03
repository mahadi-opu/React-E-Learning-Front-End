import React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from '../../../Assets/CSS/Filter/Filter.module.css';
const ButtonFilter = () => {
    return (
        <>
            <Link to='#' className={styles.FilterButton}> <BsFilterLeft/> Filter</Link>
            <Link to='#' className={styles.SortByButton}> Sort By.... <RiArrowDownSLine/> </Link>
        </>
    );
};

export default ButtonFilter;