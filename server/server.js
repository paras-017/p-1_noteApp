if(process.env.NODE_ENV != 'production') { 
   require('dotenv').config()
}
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectDb = require('./config/connectToDb');
const Note = require('./models/note');
const { getContacts,createContact,getContact,updateContact,deleteContact } = require('./controllers/notesController');
const { signup, login, logout, checkAuth } = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');
const port = process.env.PORT || 5000
const app = express();

app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true,
}))
app.use(cookieParser())
connectDb()

// ROUTES FOR NOTES
app.get('/notes', requireAuth,getContacts)
app.post('/notes',requireAuth,createContact)
app.get('/notes/:id',requireAuth,getContact)
app.put('/notes/:id',requireAuth,updateContact)
app.delete('/notes/:id',requireAuth,deleteContact)

// ROUTES FOR USERS
app.post('/signup', signup)
app.post('/login', login)
app.get('/logout', logout)
app.get('/check-auth', requireAuth ,checkAuth)

app.listen(port,()=>{
    console.log(`app listening on port http://localhost:${port}`)
})