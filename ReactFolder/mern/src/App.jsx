import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import './index.css'
import Update from './components/Update'
import Create from './components/Create'
import ViewPost from './components/ViewPost'
import Delete from './components/Delete'
function App() {
  return(
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/update" element={<Update/>}/>
        <Route exact path="/create" element={<Create />}/>
        <Route exact path="/view" element={<ViewPost />}/>
        <Route exact path="/delete" element={<Delete />}/>
      </Routes>
    </>
  )

}

export default App
