import React, { useState } from "react"
import { LoginContext } from './components/login-context'
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
    <LoginContext.Provider value={{signedIn, setSignedIn}}>
      <Router>
        <Routes>
          { signedIn === false && <Route path='/'         element={<Homepage />} />}
          { signedIn === false && <Route path='/signup'   element={<SignUpPage />} />}
          { signedIn === true && <Route path='/vaccine'  element={<VaccinePage />} />}
          { signedIn === true && <Route path='/personal' element={<PersonalPage />} />}
          { signedIn === true && <Route path='/update'   element={<UpdatePage />} />}
        </Routes>
        <Footer />
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
