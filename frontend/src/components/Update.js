import notesStore from "../stores/notesStore"


export default function Update() {
    const store = notesStore()
    if(!store.updateForm._id) return <></>
  return (
                <>
                  {/* <div>
                        <h2>Update note</h2>
                        <form onSubmit={store.updateNote}>
                            <input
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.title}
                            name="title"
                            />
                            <textarea
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.body}
                            name="body"
                            />
                            <button type="submit">Update note</button>
                        </form>
                 </div> */}


<div className='container'>
            <h2 className='my-4'>Update note</h2>
            
            <form onSubmit={store.updateNote}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input value={store.updateForm.title} onChange={store.handleUpdateFieldChange} name="title" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control"  onChange={store.handleUpdateFieldChange} name="body"  value={store.updateForm.body}/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
                   
                </>
  )
}
