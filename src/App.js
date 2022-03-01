import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Homepage from './components/page1-home'
import SignUpPage from './components/page2-sign-up'
import VaccinePage from './components/page3-vaccine'
import PersonalPage from './components/page4-personal'
import UpdatePage from './components/page5-update'

function App() {
  return (
    // <div className="App">
    //     <Homepage />
    //     <SignUpPage />
    //     <VaccinePage />
    //     <PersonalPage />
    //     <UpdatePage />
    // </div>
    <BrowserRouter>
        <Route path='/'         component={Homepage} />
        <Route path='/signup'   component={SignUpPage} />
        <Route path='/vaccine'  component={VaccinePage} />
        <Route path='/personal' component={PersonalPage} />
        <Route path='/update'   component={UpdatePage} />
    </BrowserRouter>
  );
}

export default App;
