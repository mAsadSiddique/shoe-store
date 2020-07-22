import React from 'react';
import ShoeStore from './data.json';
import { Link } from 'react-router-dom';

function ProductIndex() {
    return ( <
        div className = "ShoeDetail" > {
            Object.keys(ShoeStore).map(shoes => {
                const ShoeDetail = ShoeStore[shoes];
                return ( <
                    Link className = "ShoeDetailLink"
                    key = { shoes }
                    to = { `/Product/${shoes}` } >
                    <
                    h4 > { ShoeDetail.name } < /h4> <
                    img src = { ShoeDetail.img }
                    alt = { ShoeDetail.name }
                    /> <
                    /Link>
                )
            })
        } <
        /div>
    )
}

export default ProductIndex;