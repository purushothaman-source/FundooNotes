import React  from 'react'
import NoteService from "../../../Services/noteService";
import CreateNote from '../CreateNote/CreateNote'
import DisplayNotes from '../DisplayNotes/DisplayNotes'

const noteService = new NoteService()

export default class getNote extends React.Component {
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        this.getNote()
    }

    getNote =()=>{
        let token = localStorage.getItem('Token');
        console.log('called');
        noteService.getNote(token).then((res)=>{
        this.setState({notes:res.data.data.data})
        console.log(this.state.notes);
        })
    }
    
    
    render(){
        return (
            <div>            
                <CreateNote updateData={this.getNote}  /> 
                <DisplayNotes updateNote={this.props.updateNote} 
                          NotesArray={this.state.notes}               /> 
            </div>
        )
    }
}
