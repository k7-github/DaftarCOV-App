import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DaftarCOV from "./components/masthead-green"
import Profile from "./components/masthead-blue"
import Footer from "./components/footer"
import Homepage from './pages/1_home'
import SignUpPage from './pages/2_sign-up'
import VaccinePage from './pages/3_vaccine'
import PersonalPage from './pages/4_personal'
import UpdatePage from './pages/5_update'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="daftarcov" element={<DaftarCOV/>}>
        <Route path='/'         element={<Homepage />} />
        <Route path='/signup'   element={<SignUpPage />} />
        </Route>
        <Route path='/vaccine'  element={<VaccinePage />} />
        <Route path='/personal' element={<PersonalPage />} />
        <Route path='/update'   element={<UpdatePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
