const Note = require("../models/note")

const getContacts = async(req, res) => {
    try {
        const note = await Note.find({user:req.user._id})
        res.json({note})
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

const createContact = async (req, res) => {
    try {
        const {title, body} = req.body
    const note = await Note.create({title, body, user:req.user._id})
    console.log(note)
    res.json({note})
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

const getContact = async(req, res) => {
    try {
        const noteId = req.params.id
    const note = await Note.findOne({_id:noteId, user:req.user._id})
     res.json({note})
    } catch (error) {
       
    }
 }

 const updateContact = async (req, res) => {
  try {
    const noteId = req.params.id
    const {title, body} = req.body
   const note = await Note.findOneAndUpdate({_id:noteId,user:req.user._id}, {title,body},{new:true})
    res.json({note})
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
}

const deleteContact = async (req, res) => {
   try {
    console.log('Can you see me')
    const noteId = req.params.id
    console.log(`someThing wrong`)
    const note = await Note.findByIdAndDelete(noteId)
    if(!note){
        console.log(`someThing wrong2`)
    }
    console.log(`something wrong 3`)
    res.json({note})
    console.log(`something wrong 4`)
   } catch (error) {
    console.log(error)
    res.sendStatus(400)
   }
}
module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}