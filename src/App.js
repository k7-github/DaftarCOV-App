import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/footer"
import Homepage from './pages/1_home'
import SignUpPage from './pages/2_sign-up'
import VaccinePage from './pages/3_vaccine'
import PersonalPage from './pages/4_personal'
import UpdatePage from './pages/5_update'

function App() {
  
  const [signedIn, setSignedIn] = useState(false)
  
  return (
    <Router>
      <Routes>
        {/* <Route path='/'         element={<Homepage />} /> */}
        {/* <Route path='/signup'   element={<SignUpPage />} /> */}
        {/* <Route path='/vaccine'  element={<VaccinePage />} /> */}
        {/* <Route path='/personal' element={<PersonalPage />} /> */}
        {/* <Route path='/update'   element={<UpdatePage />} /> */}
        { signedIn === false && <Route path='/'         element={<Homepage />} setSignedIn={setSignedIn} />}
        { signedIn === false && <Route path='/signup'   element={<SignUpPage />} setSignedIn={setSignedIn} />}
        { signedIn === true && <Route path='/vaccine'  element={<VaccinePage />} setSignedIn={setSignedIn} />}
        { signedIn === true && <Route path='/personal' element={<PersonalPage />} setSignedIn={setSignedIn} />}
        { signedIn === true && <Route path='/update'   element={<UpdatePage />} setSignedIn={setSignedIn} />}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
