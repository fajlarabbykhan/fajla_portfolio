import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="box">
                <img src={props.image} alt="" />
            </div>
        </>
    );
};

export default Card;