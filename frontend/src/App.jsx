import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/home.jsx'
import NewItem from './components/NewItem'
import EditItem from './components/EditForm'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/item/new' element={<NewItem/>}/>
        <Route path='/item/update/:id' element={<EditItem/>}/>
      </Routes>
    </>
  )
}

export default App
