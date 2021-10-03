import React from 'react'

const AllProduct = (props) => {
    const {title} = props.product;
    // console.log('product', props.product);
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

export default AllProduct
