import React from "react"
import Homepage from './components/page1-home'
import SignUpPage from './components/page2-sign-up'
import ProfilePage from './components/page3-profile'
import PersonalPage from './components/page4-personal'
import VaccinePage from './components/page5-vaccine'
import UpdatePage from './components/page6-update'

function App() {
  return (
    <div className="App">
      <Homepage />
      <SignUpPage />
      <ProfilePage />
      <PersonalPage />
      <VaccinePage />
      <UpdatePage />

    </div>
  );
}

export default App;
