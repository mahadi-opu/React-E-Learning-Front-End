/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from 'react-bootstrap';
import './SingleCourseBigCard.css';
import { AiFillHeart , AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


import courseDefaultThumbnail from './../../../Assets/Images/Courses/defultthumbnail.jpg';


const SingleCourseBigCard = (props) => {

    const { 
        courseTitle,
        instructor,
        money,
        currency,
        currencyPosition,
        btnLabel,
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
            <Card style={{ width: '100%'}} className='courseCard shadow'>
                <Card.Img className='courseThumbNail' variant="top" src={thumbNailImage()} alt='Picture'/>

                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title className='courseInstructor'>{instructor}</Card.Title>
                        <Card.Title className='instructorSocial'> 
                                <Link to=''> <AiFillHeart/> </Link>
                                <Link to=''> <AiOutlineShoppingCart/> </Link>
                                <Link to=''> <BsFillShareFill/> </Link>
                        </Card.Title>
                    </div>  
                    <Card.Text className='courseTitle'> {courseTitle} </Card.Text>
                    <div className='d-flex justify-content-between align-items-center border-top pt-4'>
                        <Card.Title className='coursePrice'>{priceCurrency()}</Card.Title>
                        <div className='buyNewButton text-center'>
                            <Link to={'#'}> {btnLabel} </Link>
                        </div>
                    </div>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default SingleCourseBigCard;