import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../Assets/CSS/Partials/Button.module.css'
import { MdDoubleArrow } from "react-icons/md";

const LoadMore = ({name,Customurl}) => {
    return (
        <div className={styles.LoadMorebtn}>
            <Button><Link to={Customurl}> {name}<MdDoubleArrow/> </Link></Button>
        </div>
    );
};

export default LoadMore;