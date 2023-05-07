import notesStore from "../stores/notesStore";
import Note from "./Note";

export default function Notes(){
    const store = notesStore()
    
    return(
      <>

     { <table className="table container my-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {store.notes &&
          store.notes.map((note,index) => {
            return (
              <Note key={note._id} note={note} index={index}/>
              ); 
            })}
        </tbody>
      </table>}
      </>
    )
}