import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Friends from './pages/Friends'

function App() {
  
  return (
    <BrowserRouter >
      <Routes>
        <Route path='home' element={<Home />}/>
         <Route path='friends' element={<Friends />}/>
        {/*<Route path='requests' element={}/>
        <Route path='profile' element={}/> */}
        <Route path='*' element={<p>not found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
