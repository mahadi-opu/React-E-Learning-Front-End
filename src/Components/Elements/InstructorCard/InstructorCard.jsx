/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from 'react-bootstrap';
import './InstructorCard.css';
import { AiFillYoutube } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import instructor_maruf from './../../../Assets/Images/instructor/instructor_maruf.png';
import InsCardButton from '../InsCardButton/InsCardButton';


const InstructorCard = (props) => {

    const { 
        instructor,
        instructordesignation,
        instructorcareer,
        thumbnail 
    } = props;

  
    const thumbNailImage = () => {
        return thumbnail ? thumbnail : instructor_maruf;
    }

    return (
        <div> 
            <Card style={{ width: '100%'}} className='courseCard shadow'>
                <Card.Img className='instructorThumbnail' draggable="false" variant="top" src={thumbNailImage()} alt='Picture'/>

                <Card.Body>
                    <div className='text-center'>
                        <Card.Title className='instructorName'>{instructor}</Card.Title>
                        <Card.Text className='instructordesignation'> {instructordesignation} </Card.Text>
                        <Card.Text className='instructorCareer'> {instructorcareer} </Card.Text>
                    </div>  
                    
                    <div className='d-flex justify-content-between align-items-center border-top pt-3'>
                        
                        <div className='instructorSocialMedia'> 
                                <Link to=''> <FaFacebookF/> </Link>
                                <Link to=''> <GrLinkedinOption/> </Link>
                                <Link to=''> <AiFillYoutube/> </Link>
                        </div>

                        <div>
                            <InsCardButton
                                btnLabel="More Info"  
                            />
                        </div>
                    </div>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default InstructorCard;