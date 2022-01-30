import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    const { title } = props;
    return (
        <>
            <div className='d-flex justify-content-center'>
                <h2 className='sectionTitle'> { title ?? ''} </h2>
            </div>
        </>         
    );
};

export default SectionTitle;