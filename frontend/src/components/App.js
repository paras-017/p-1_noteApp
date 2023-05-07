import LoginPage from "../pages/LoginPage";
import { NotesPage } from "../pages/NotesPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import { LogoutPage } from "./LogoutPage";
import Navbar from "./Navbar";

function App() {

  return (

    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
       <Routes>
        <Route index element={<RequireAuth><NotesPage/></RequireAuth>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/logout' element={<LogoutPage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;