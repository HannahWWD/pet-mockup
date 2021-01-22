import React,{useState} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Result from './pages/Result'
//import MockCatProfiles from './data/MockCatProfiles'




function App() {
  const [finalAnswer, setFinalAnswer] = useState(null)

  const getFinalAnswer = (answersFromChild) => {
    setFinalAnswer(answersFromChild)
  }

  console.log(finalAnswer)
  // get mock api
  // MockCatProfiles()

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/questions" render={(props)=>(<Questions {...props} getFinalAnswer={getFinalAnswer} />)} /> 
      <Route path="/result" render={()=>(<Result finalAnswer={finalAnswer} />)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
