/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from 'react-bootstrap';
import styles from '../../../Assets/CSS/Card/SmallCourseCard.module.css';
import { AiFillHeart , AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


import courseDefaultThumbnail from './../../../Assets/Images/Courses/defultthumbnail.jpg';


const SmallCourseCard = (props) => {

    const { 
        courseTitle,
        instructor,
        money,
        currency,
        currencyPosition,
        thumbnail 
    } = props;

    const priceCurrency = ()=>{
        let 
        res = '',
        c   = /tk/gim.test(currency) ? ` ${currency.toUpperCase()} ` : currency,
        m   = money ? money : 0;
        c   = c ? c :' TK ';

        res = currencyPosition && currencyPosition === 'before' ? ( c + m) : (m + c);
        return res;
    }

    const thumbNailImage = () => {
        return thumbnail ? thumbnail : courseDefaultThumbnail;
    }

    return (
        <div> 
            <Card style={{ width: '100%'}} className={styles.courseCard}>
                <Card.Img className='courseThumbNail' draggable="false" variant="top" src={thumbNailImage()} alt='Picture'/>

                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title className={styles.courseInstructorSmallCard}>{instructor}</Card.Title>
                        <Card.Title className={styles.instructorSocialSmallCard}> 
                                <Link to=''> <AiFillHeart/> </Link>
                                <Link to=''> <AiOutlineShoppingCart/> </Link>
                                <Link to=''> <BsFillShareFill/> </Link>
                        </Card.Title>
                    </div>  
                    <Card.Text className={styles.courseTitleSmallCard}> {courseTitle} </Card.Text>
                    <div className='d-flex justify-content-between align-items-center border-top pt-3'>
                        <Card.Title className={styles.coursePriceSmallCard}>{priceCurrency()}</Card.Title>
                        
                    </div>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default SmallCourseCard;