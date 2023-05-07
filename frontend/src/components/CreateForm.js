import React from 'react'
import notesStore from '../stores/notesStore'

export default function CreateForm() {
    const store = notesStore()
    if(store.updateForm._id) return <></>
  return (
        <>
            <div className='container'>
            <h2 className='my-4'>Create note</h2>
            
            <form onSubmit={store.createNote}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input value={store.createForm.title} onChange={store.updateCreateFormField} name="title" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control"  onChange={store.updateCreateFormField}name="body"  value={store.createForm.body}/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        
        </>
  )
}
