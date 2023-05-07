import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import Notes from "../components/Notes";
import Update from "../components/Update";
import CreateForm from "../components/CreateForm";

export const NotesPage = () => {
      // STORE
   const store = notesStore()

   // Use effect
   useEffect(() => {
     store.fetchNotes();
     // eslint-disable-next-line
   }, []);
 
  return (
    <>
            <Notes/>
            <Update/>
            <CreateForm/>
    </>
  )
}
