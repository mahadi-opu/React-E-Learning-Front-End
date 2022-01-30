import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../Assets/CSS/Partials/Button.module.css';

const LearnMore = ({name, Customurl}) => {
    return (
        <div className={styles.learnMoreBtn}>
            <button><Link to={Customurl}>{name} </Link></button>
        </div>
    );
};

export default LearnMore;