import React from 'react';

function Product(props) {
    return (
        <div className='item'>
            <h3>{props.name}</h3>
            <img className='img-responsive itemPic' src={props.imgSource} alt={props.name}></img>
            <p>{props.description}</p>
            <p>£{props.price}</p>
        </div>
    )
};


export default Product;