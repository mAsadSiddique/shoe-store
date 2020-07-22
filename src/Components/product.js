import React from 'react';
import { Outlet } from 'react-router-dom';

function Product() {

    const shoe = {
        img: "https://www.shoesonline.com.pk/wp-content/uploads/2018/07/mens1.jpg",
    }
    const Img = shoe.img

    // console.log(ShoeStore)
    // console.log(Image)

    return ( <
        div >
        <
        h2 className = "welcome" > Welcome To Shoe Store < /h2> { < img src = { Img }
            alt = { "shoe" }
            height = "400"
            width = "1350" / > } <
        Outlet / >

        <
        /div>
    )
}

export default Product;