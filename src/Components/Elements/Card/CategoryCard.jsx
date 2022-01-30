/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../../Assets/CSS/Card/CategoryCard.module.css';


const CategoryCard = ({icon, title, cat_link }) => {
    return (
        <>
            <div className={styles.CardCetegoryWrap}>
                <div className={styles.CategorySliderIcon}>
                    <img src={icon} alt="" />
                
                </div>
                <div className={styles.CategorySliderTitle}>
                    <h2><a href={cat_link}>{title}</a></h2>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;