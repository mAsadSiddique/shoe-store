import React from 'react';
import { useParams } from 'react-router-dom';
import ShoeStore from './data.json';

function ProductDetails() {
    const { Details } = useParams();
    const shoe = ShoeStore[Details]
    console.log(shoe)
    return ( <
        div className = "container" >
        <
        div className = "shoeBox" >
        <
        h4 > { shoe.name } < /h4> <
        img src = { shoe.img }
        alt = { shoe.name }
        /> <
        button className = "btn" > Buy Now < /button> <
        /div>

        <
        /div>
    )
}
export default ProductDetails;