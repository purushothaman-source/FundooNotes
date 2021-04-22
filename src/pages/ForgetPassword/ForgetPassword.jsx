import React from 'react';
import './ForgetPassword.css'
import logo from '../../Assets/googleimg.svg'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'
import UserService from "../../Services/userService"
import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';


const service = new UserService();

export default class ForgetPassword extends React.Component {
    constructor(probs) {
        super(probs);
        this.state = {
            username: "",
            password: "",
            "show": false,
            "snackmsg": ""
        }
    }

    submit = () => {
        this.setState({ snackmsg: "valid email" })
        this.setState({ show: true })
        let data = {
            "email": this.state.username,
            // "password":this.state.password
        }
        service.forgetpassword(data).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ show: false })
    };

    render() {
        return (
            <><div className="fullbody">
                <div className="loginbody">
                    <div className="topcontent">
                        <div className="fonty">  <span id="f">F</span><span id="o1">u</span><span id="o2">n</span>
                            <span id="d">d</span><span id="o3">oo</span></div>
                        <p className="fonty"> Account Recovery </p>
                        <div>Enter your username for retrieve your password</div>
                        <div className="textfields">    <TextField id="outlined-basic" className="asdf" variant="outlined" name="username"
                            label="Email or phone " size="small"  margin="dense" onChange={this.handleChange} /></div>
                    </div>
                    <div className="inline___button">
                       <Link to="/">Try another way</Link>  
                        < Button variant="outlined" size="small" onClick={this.submit}>submit</Button>
                        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={this.state.show}
            autoHideDuration={1000}
            onClose={this.handleClose}
            message={this.state.snackmsg}
            action={
                <React.Fragment>

                    {/* <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                                    <CloseIcon fontSize="small" />
                                                </IconButton> */}
                </React.Fragment>}  />
                    </div>
                </div>
            </div>
                      </>)
    }
}