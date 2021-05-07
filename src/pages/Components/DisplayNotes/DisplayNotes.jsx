import React, { Component } from 'react';
import Icons from '../Icons/Icon'
import InputBase from '@material-ui/core/InputBase';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NoteService from '../../../Services/noteService'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Pin from '../../../Assets/pin.jpeg';
import { connect } from 'react-redux';
import {fetchUsers} from '../../../Redux/Action/action'

const noteService = new NoteService();


 class DisplayNotes extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            title: "",
            description: "",
            open: false,
            noteId: '',
            color:null,
        })
    }
    
    setColor=(colorValue)=>{

        this.setState({ color : colorValue });

    }
    componentDidMount() {    
        this.props.fetchUsers();
        console.log('props:',this.props.note);
    }
    
    updateNote = (e) => {
        e.stopPropagation();
        let token = localStorage.getItem("Token");
        let data = {
            title: this.state.title,
            description: this.state.description,
            noteId: this.state.noteId,
        }
        console.log(data.noteId);
        if (data.title != "" && data.description != "") {
            noteService.updateNote(data, token).then((result) => {
                // this.props.updateNote();
                { this.handleClose() }
                console.log(result);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    handleDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    handleTitle = (e) => {
        this.setState({ title: e.target.value })

    }
    handleClickOpen = (e, value) => {
        e.stopPropagation();
        this.setState({
            open: true,
            noteId: value.id,
            title: value.title,
            description: value.description
        })
    };

    handleClose = () => {
        console.log("im working");
        this.setState({ open: !this.state.open })
        console.log(this.state.open);
    };

    render() {
      

        return (
            <>
                <div className="notess">
                    {/* {this.props.note} */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>
                <div className="appear">  Notes you add will appear here </div> */}
                     {this.props.note.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value, index) => {
                        var style={backgroundColor:value.color}
                        return (<div className="notebox" style={style}>
                            <div onClick={(e) => this.handleClickOpen(e, value)}>
                              <div className="inline1">  <h4 style={{width:'90%'}}>{value.title}</h4>
                                <img src={Pin} alt=""/></div>
                                <p>{value.description}</p></div>
                            <Icons Notes={value} SetColor={this.setColor} />                         
                        </div>)
                    })} 
                    
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <div className="dialogbox">
                        <InputBase
                            defaultValue=""
                            multiline
                            className="inputbas"
                            placeholder="  Title"
                            fullWidth
                            onChange={this.handleTitle}
                            defaultValue={this.state.title}
                            inputProps={{ 'aria-label': 'Title ' }}
                        />

                        <InputBase
                            defaultValue=""
                            multiline
                            fullWidth
                            className="inputbas"
                            placeholder="  Title"
                            onChange={this.handleDescription}
                            defaultValue={this.state.description}
                            inputProps={{ 'aria-label': 'Title ' }}
                        />
                         <div className="enclose">
                                < Icons />
                                <div class="inp">
                                    <input type="button" onClick={(e) => this.updateNote(e)} value="Close" />
                                </div>
                            </div>
                       
                    </div>
                </Dialog>
            </>
        )
    }
}
const mapStateToProps =(state) =>{
    console.log("im state from store",state.notes.data);
    return {
        note : state.notes.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(DisplayNotes);

