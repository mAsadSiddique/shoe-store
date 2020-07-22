import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Product from './product';
import Header from './Header';
import Home from './Home';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import SvgIcon from '@material-ui/core/SvgIcon';
import ProductIndex from './productIndex';

function HomeIcon(props) {
    return ( <
        SvgIcon {...props } >
        <
        path d = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" / >
        <
        /SvgIcon>
    );
}

function RoutePanel() {
    return ( <
        div >
        <
        BrowserRouter >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > } > < /Route> <
        Route path = "Product"
        element = { < Product / > } >
        <
        Route path = "/"
        element = { < ProductIndex / > } > < /Route> <
        Route path = ":Details"
        element = { < ProductDetails / > } > < /Route> <
        /Route> <
        Route path = "*"
        element = { < NotFound / > } > < /Route> <
        /Routes>

        <
        /BrowserRouter> <
        /div>
    );
}

export default RoutePanel;