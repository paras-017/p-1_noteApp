const mongoose =  require('mongoose');
const noteSchema = mongoose.Schema({
    title: String,
    body: String,
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:"User"
    }
})

module.exports = mongoose.model('Note', noteSchema)