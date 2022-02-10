import React from 'react';
import styles from "../../../Assets/CSS/Course/Course.module.css";
import { BsTranslate,BsFillKeyFill } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { GiNetworkBars } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { RiTableAltLine } from 'react-icons/ri';


const CourseOverview = () => {
    return (
        <>
            <ul className={styles.overviewArea}>
                <li>
                    <div className={styles.overviewItem}>
                        <div className={styles.language}><h5> <BsTranslate/> Language</h5></div>
                        <div className={styles.border}> -- </div>
                        <div className={styles.bangla}><h5> Bangla</h5></div>
                    </div>
                </li>
                <li>
                    <div className={styles.overviewItem}>
                        <div className={styles.language}><h5><RiTableAltLine/>Category</h5></div>
                        <div className={styles.border}> -- </div>
                        <div className={styles.bangla}><h5> Web Dev </h5></div>
                    </div>
                </li>
                <li>
                    <div className={styles.overviewItem}>
                        
                        <div className={styles.language}><h5> <GiNetworkBars/> Level</h5></div>
                        <div className={styles.border}> -- </div>
                        <div className={styles.bangla}><h5> Advanced</h5></div>
                    </div>
                </li>
                <li>
                    <div className={styles.overviewItem}>
                        <div className={styles.language}><h5> <FiClock/>Duration</h5></div>
                        <div className={styles.border}> -- </div>
                        <div className={styles.bangla}><h5>1 week</h5></div>
                    </div>
                </li>
                <li>
                    <div className={styles.overviewItem}>
                        <div className={styles.language}><h5> <MdAttachMoney/>Price</h5></div>
                        <div className={styles.border}> -- </div>
                        <div className={styles.bangla}><h5> 2,000 Tk</h5></div>
                    </div>
                </li>
                <li>
                    <div className={styles.overviewItem}>
                        <div className={styles.language}><h5> <BsFillKeyFill/> Keywords </h5></div>
                        <div className={styles.border}> -- </div>
                        <div className={styles.bangla}><h5> Javascript</h5></div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default CourseOverview;