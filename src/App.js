import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/page1-home'
import SignUpPage from './pages/page2-sign-up'
import VaccinePage from './pages/page3-vaccine'
import PersonalPage from './pages/page4-personal'
import UpdatePage from './pages/page5-update'

function App() {
  return (
    // <div className="App">
    //     <Homepage />
    //     <SignUpPage />
    //     <VaccinePage />
    //     <PersonalPage />
    //     <UpdatePage />
    // </div>
    <Router>
      <Routes>
        <Route path='/'         element={<Homepage />} />
        <Route path='/signup'   element={<SignUpPage />} />
        <Route path='/vaccine'  element={<VaccinePage />} />
        <Route path='/personal' element={<PersonalPage />} />
        <Route path='/update'   element={<UpdatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
