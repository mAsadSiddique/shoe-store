import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Login from './Login';

const useStyles = makeStyles({
    root: {
        margin: "0px auto",
        marginTop: "20px",
        padding: "10px",
        width: 400,
        height: 400,
        boxShadow: "0 0 10px #463636",
    },
});

function Home() {
    const classes = useStyles();

    return ( <
        div >
        <
        Card className = { classes.root }
        variant = "outlined" >
        <
        CardContent >
        <
        Login / >
        <
        /CardContent> <
        /Card> <
        div className = "footer" >
        <
        p > Made By Asad Siddique < /p> <
        /div> <
        /div>
    );
}

export default Home;