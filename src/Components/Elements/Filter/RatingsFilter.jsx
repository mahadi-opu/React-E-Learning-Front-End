import React from 'react';
import styles from '../../../Assets/CSS/Filter/Filter.module.css';
import StarRatingComponent from 'react-star-rating-component';

const RatingsFilter = () => {
    return (
        <>
            <ul className='list-unstyled mb-0'>
                <li>
                    <div className={styles.RattingFilterRawp}>
                        <div className={styles.RedioName}> 
                            <label> <input type="radio" name='radio'/>Five Star </label>
                        </div>
                        <div> --- </div>
                        <div>
                            <StarRatingComponent
                                name="5" 
                                starCount={5}
                            />
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.RattingFilterRawp}>
                        <div className={styles.RedioName}>
                             <label> <input type="radio" name='radio'/>Five Star </label>
                        </div>
                        <div> --- </div>
                        <div>
                            <StarRatingComponent 
                                name="4" 
                                starCount={5}
                            />
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.RattingFilterRawp}>
                        <div className={styles.RedioName}> 
                            <label> <input type="radio" name='radio'/>Five Star </label>
                        </div>
                        <div> --- </div>
                        <div>
                            <StarRatingComponent 
                                name="3" 
                                starCount={5}
                            />
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.RattingFilterRawp}>
                        <div className={styles.RedioName}> 
                            <label> <input type="radio" name='radio'/>Five Star </label> 
                        </div>
                        <div> --- </div>
                        <div>
                            <StarRatingComponent 
                                name="2" 
                                starCount={5}
                            />
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.RattingFilterRawp}>
                        <div className={styles.RedioName}>
                            <label> <input type="radio" name='radio'/>Five Star </label>
                        </div>
                        <div> --- </div>
                        <div>
                            <StarRatingComponent 
                                name="1" 
                                starCount={5}
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default RatingsFilter;







