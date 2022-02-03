import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styles from '../../../Assets/CSS/Filter/Filter.module.css'
import ButtonFilter from './ButtonFilter';
import RatingsFilter from './RatingsFilter';
import RedioFilter from './RedioFilter';
import TagFilter from './TagFilter';

const Filter = () => {
    return (
        <>
            <div className={styles.Filter}>

                <div className={styles.FilterWidget}>
                    <div className='FilterEliment'>
                        <ButtonFilter/>
                    </div>
                </div>

                <div className={styles.FilterWidget}>
                    <div className={styles.FilterTitle}>
                        <h2>Ratings</h2> 
                        <RiArrowDownSLine/>
                    </div>
                    <div className='FilterEliment'>
                           <RatingsFilter/>
                    </div>
                </div>

                <div className={styles.FilterWidget}>
                    <div className={styles.FilterTitle}>
                        <h2>instructor</h2> 
                        <RiArrowDownSLine/>
                    </div>
                    <div className='FilterEliment'>
                       
                    </div>
                </div>

                <div className={styles.FilterWidget}>
                    <div className={styles.FilterTitle}>
                        <h2>Price </h2> 
                        <RiArrowDownSLine/>
                    </div>
                    <div className='FilterEliment'>
                        <RedioFilter/>
                    </div>
                </div>

                <div className={styles.FilterWidget}>
                    <div className={styles.FilterTitle}>
                        <h2>Level</h2> 
                        <RiArrowDownSLine/>
                    </div>
                    <div className='FilterEliment'>
                        
                    </div>
                </div>

                <div className={styles.FilterWidget}>
                    <div className={styles.FilterTitle}>
                        <h2> Tag </h2> 
                        <RiArrowDownSLine/>
                    </div>
                    <div className='FilterEliment'>
                        <TagFilter/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Filter;