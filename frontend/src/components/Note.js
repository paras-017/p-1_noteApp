import notesStore from "../stores/notesStore"

export default function Note({note,index}){
    const store = notesStore()
    return(
      <>
    
           <tr>
            <th scope="row">{index+1}</th>
            <td>{note.title}</td>
            <td>{note.body}</td>
            <td>
              <button className="btn btn-secondary  " onClick={() => store.toggleUpdate(note)}>Update note</button>
              <button className="btn btn-danger mx-2" onClick={() =>store.deleteNote(note._id)}>Delete note</button>
            </td>
          </tr>
      </>
    )
}