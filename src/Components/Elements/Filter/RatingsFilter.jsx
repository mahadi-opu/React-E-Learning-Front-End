import React from 'react';
import styles from '../../../Assets/CSS/Filter/Filter.module.css'
import StarRatingComponent from 'react-star-rating-component';

const RatingsFilter = () => {
    return (
        <>
            <ul className='list-unstyled'>
                <li>
                    <div className={styles.RattingFilter}>
                        <div> <label> <input type="radio" name='radio'/>Five Star </label> </div>
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
                    <div className={styles.RattingFilter}>
                        <div> <label> <input type="radio" name='radio'/> Four Star </label> </div>
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
                    <div className={styles.RattingFilter}>
                        <div> <label> <input type="radio" name='radio'/> Three Star </label> </div>
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
                    <div className={styles.RattingFilter}>
                        <div> <label> <input type="radio" name='radio'/> Two Star </label> </div>
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
                    <div className={styles.RattingFilter}>
                        <div> <label> <input type="radio" name='radio'/> One Star </label> </div>
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







