import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {

        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
    head: {
        textAlign: 'center',
    },
    styling: {
        width: '80%',
        marginBottom: "20px"
    },
    btn: {
        marginLeft: "20%",
    }

}));

function Login() {
    const classes = useStyles();

    return ( <
        form className = { classes.root }
        noValidate autoComplete = "off" >
        <
        label > < h2 className = { classes.head } > Login < /h2></label >
        <
        TextField className = { classes.styling }
        label = "Email"
        required / >
        <
        TextField className = { classes.styling }
        id = "standard-password-input"
        label = "Password"
        type = "password"
        autoComplete = "current-password"
        required /
        >
        <
        br / > < br / >
        <
        Button className = { classes.btn }
        variant = "contained"
        color = "primary" >
        Login <
        /Button> <
        /form>
    );
}

export default Login;