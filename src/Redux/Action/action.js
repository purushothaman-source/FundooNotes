import NoteService from "../../Services/noteService";
const noteService = new NoteService();

// export function loadColor(){
//     console.log("loadcolor");
//     return(dispatch)=>{
//     let token = localStorage.getItem('Token');
//         return noteService.getNote(token).then((response)=>{
//             dispatch(getNote(response.data.data.data));
//         })
//     }
// }
// export const addNote =(data) =>{
//     return {
//         type : "ADDNOTE",
//         payload:data
//     }
// }

//  function getNotes(){
//     let token = localStorage.getItem('Token');
//         console.log('getnote called in action');
//         return  noteService.getNote(token).then((res)=>{
//         return res.data.data.data;
//         })
// // }
// export function getNote(data){
//     console.log("action getNote");
//     return {
//         type : "GETNOTE",
//         payload:getNotes()
//     }
// }

export const fetchUsers = () => {
    return (dispatch) => {
    let token = localStorage.getItem('Token');
      noteService.getNote(token)
        .then(response => {
          const users = response.data.data.data
          dispatch(fetchUsersSuccess(users))
        })
        // .catch(error => {
        // dispatch(fetchUsersSuccess("forsxs"))
        // console.log("error");
        // })
    }
  }
  export const fetchUsersSuccess = users => {
    return {
      type: "GETNOTE",
      payload: users
    }
  }