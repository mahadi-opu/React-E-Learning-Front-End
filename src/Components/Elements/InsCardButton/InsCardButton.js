import React from 'react';
import { Link } from 'react-router-dom';
import './InsCardButton.css';

const InsCardButton = (props) => {

    const { btnLabel,} = props;

    return (
        <div className=''>
            <Link className='instCardButton' to={'#'}> {btnLabel} </Link>
        </div>
    );
};

export default InsCardButton;