import React from 'react';
import './Login.css'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'
import UserService from "../../Services/userService";
import { BrowserRouter as Router, Route, Link, Navlink, Switch } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';



const service = new UserService();

export default class Login extends React.Component {
     constructor(probs){
         super(probs);
         this.state ={
             "username":"",
             "password":"",
             "usernameError":false,
             "usernameMsg":"",
             "passwordError":false,
             "passwordErrorMsg":"",
             "showpassword":true,
             "show": false,
             "snackmsg": ""

         }
         
     }
     handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ show: false })
        // setOpen(false);
    };
    handlechange =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }
    validationCheck = () => {
        this.setState({
            usernameError: false,
            usernameErrorMsg: '',
            passwordError: false,
            passwordErrorMsg: '',
        })
        var valid = true;

        let patter = "^[0-9a-zA-Z]+([.\\-_+][0-9a-zA-Z]+)*@[a-z0-9A-Z]+.[a-z]{2,4}([.][a-zA-Z]{2,})*$";
        let pattern = new RegExp(patter);
        if (!pattern.test(this.state.username)) {
            this.setState({ usernameError: true })
            this.setState({ usernameErrorMsg: "Invalid Gmail address" })
            valid = false;
        }
        if (this.state.username.length == 0) {
            this.setState({ usernameError: true })
            this.setState({ usernameErrorMsg: "Choose Gmail address" })
            valid = false;
        }

        if (this.state.password.length < 8) {
            this.setState({ passwordError: true })
            this.setState({ passwordErrorMsg: "password should be atleast 8 characters" })
            valid = false;
        }

        if (this.state.password.length == 0) {
            this.setState({ passwordError: true })
            this.setState({ passwordErrorMsg: "Enter a password" })
            valid = false;
        }

        return valid;

    }
    handleClick = (e) => {
        this.setState({ showpassword: !this.state.showpassword })

    }
    submit =()=>{
       
        if(this.validationCheck()){
            this.setState({ snackmsg: "Login sucess" })
            this.setState({ show: true })
        let data = {
            "email": this.state.username,
            "password": this.state.password,
            "server": "advance"
        }
        service.login(data).then((result) => {
            localStorage.setItem('Token',result.data.id);
            localStorage.setItem('FirstName',result.data.firstName);
            localStorage.setItem('LastName',result.data.lastName);
            localStorage.setItem('Email',result.data.email);
            
            localStorage.setItem('userDetails',JSON.stringify(result.data))
            console.log(result.data.id);
            window.location.href = "http://localhost:4200/dashboard"
            
        }).catch((error) => {
            console.log(error);
        })
    }
    else{
        this.setState({ snackmsg: "Please Enter Valid details" })
        this.setState({ show: true })
    }
}

    render() {
        return (
            <>
            <div className="fullbody">
                <div className="loginbody">
                    <div className="topcontent">
                   <div className="fonty"> <span id="f">F</span><span id="o1">u</span><span id="o2">n</span>
                                <span id="d">d</span><span id="o3">oo</span></div>
                                <p className="fonty" > Sign in</p>
                             <div >  Use your fundoo Account </div>

                             <div className="textfields">
                               <TextField id="outlined-basic"  error={this.state.usernameError} helperText={this.state.usernameErrorMsg}className="TFwidth" variant="outlined" name="username"
                                label="Email or phone " size="small" onChange={this.handlechange} margin="dense" />

                            <TextField id="outlined-basic" type={this.state.showpassword ? "password" : "type"}  error={this.state.passwordError} helperText={this.state.passwordErrorMsg} variant="outlined" className="TFwidth" name="password"
                                label="Password" size="small" margin="dense" onChange={this.handlechange} />
                                  <div className="pas">
                                <input type="checkbox" id="radio"  onClick={this.handleClick}   value="Show password"/>
                                <label htmlFor="radio"> Show password</label>
                            </div>
                            {/* <div> <a href="">forgetpassword?</a></div> */}
                            <div className="forget"> <a href=""><Link to ="/forgetpassword">forgetpassword</Link></a></div>
                    </div>
                </div>
                     
                    <div className="inline__button">
                       <Link to="/">Create Account</Link>  
                        < Button variant="outlined" size="small" onClick={this.submit}>Sign in</Button>
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

                {/* <div className="lbody">
                    <div className="lgbody">
                        <div className="fundoo">
                            <div className="content">
                            <h2>
                                <span id="f">F</span><span id="o1">u</span><span id="o2">n</span>
                                <span id="d">d</span><span id="o3">oo</span></h2>
                            <p > Sign in</p>
                             <div className="acc">  Use your fundoo Account </div>
                             </div>
                             <div className="textfields">
                               <TextField id="outlined-basic" variant="outlined" name="username"
                                label="Email or phone " size="small" onChange={this.handlechange} margin="dense" />

                            <TextField id="outlined-basic" variant="outlined" name="password"
                                label="Password" size="small" margin="dense" onChange={this.handlechange} />
                                  <div className="pas">
                                <input type="checkbox" id="radio"     value="Show password"/>
                                <label htmlFor="radio"> Show password</label>
                            </div>
                            <a href="#">Create Account</a>
                            < Button variant="outlined" size="small" onClick={this.submit}>Login</Button>
                        </div>
                        </div>
                    </div>
                </div> */}
            </>)
    }
}