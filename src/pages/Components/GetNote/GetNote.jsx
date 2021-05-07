import React, { Profiler }  from 'react'
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
        console.log('notes',this.state.notes);
        }).catch((err)=>{
            console.log("error occured in api call");
        })
    }
     onRenderCallback =(
        id, 
        phase,
        actualDuration, 
        baseDuration, startTime, commitTime, interactions 
      ) => {
        console.log('ID',id);
        console.log('phase',phase);
        console.log('actualDuration',actualDuration);
        console.log('baseDuration',baseDuration);
        console.log('starttime',startTime);
        console.log('committime',commitTime);
        console.log('interactions',interactions);


        // console.log();
      }
    
    render(){
        return (
            <div>   
                 <Profiler id="CreateNote" onRender={this.onRenderCallback}>         
                <CreateNote updateData={this.getNote}  /> </Profiler>
                {/* <DisplayNotes updateNote={this.props.updateNote} 
                          NotesArray={this.state.notes}               />  */}
                 <Profiler id="DisplayNote" onRender={this.onRenderCallback}>         

                          <DisplayNotes />
                          </Profiler>
            </div>
        )
    }
}
