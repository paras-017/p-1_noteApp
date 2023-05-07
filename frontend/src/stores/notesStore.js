import { create } from 'zustand'
import axios from "axios";

const notesStore = create((set,get) => ({
        notes:null,
        createForm:{title: "",body: ""},
        updateForm:{_id: null,title: "",body: ""},
        
        fetchNotes:async()=>{
            console.log('he')
                // Fetch the notes
                const res = await axios.get("http://localhost:3000/notes");
                console.log(res)
                // Set to state
                set({notes:res.data.note})
           },
           deleteNote: async (_id) => {
            console.log(_id)
            // Delete the note
           await axios.delete(`http://localhost:3000/notes/${_id}`);
            get().fetchNotes()
       },
        updateCreateFormField:(e)=>{
            const { name, value } = e.target;
             set((state)=>{
               return {
                createForm:{
                    ...state.createForm,
                    [name]: value,
                },
             }
            })
           },

        createNote:async (e) => {
            e.preventDefault();
           const {createForm, notes} = notesStore.getState()
            const res = await axios.post("http://localhost:3000/notes", createForm);
            set({
                notes:[...notes, res.data.note],
                createForm:{
                    title: "",
                    body: ""
                }
            })
           },
          
          handleUpdateFieldChange: (e) => {
            const { value, name } = e.target;
             set(state=>{
                return {
                    updateForm:{
                        ...state.updateForm,
                        [name]: value,
                    }
                }
             })
           
          },

          toggleUpdate:(note) => {
            // Set state on update form
            const {_id,title,body} = note
            set({
               updateForm:{
                _id ,title, body, 
               }
            })
          },

          updateNote:async (e) => {
            e.preventDefault();
            const { updateForm :{title, body , _id}} = notesStore.getState()
            // Send the update request
                await axios.put(`http://localhost:3000/notes/${_id}`,{ title, body });
            // Update state
            get().fetchNotes()
            // Clear update form state
            set({
                updateForm:{_id: null,title: "",body: ""}
            })
          },

       
  
}))
export default notesStore