// import './App.css'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import LockScreenPage from './pages/LockScreenPage';
import MainPage from './pages/MainPage';

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/intro' element = {<LockScreenPage/>}/>
        <Route path='/main' element = {<MainPage/>}/>
      </Routes>
   
    </>
  )
}

export default App
