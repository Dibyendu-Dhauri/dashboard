import Home from "./components/Home"
import {Routes,Route} from 'react-router-dom'
import Nav from "./components/Nav"
import CreateAds from "./components/CreateAds"

import TextForm from "./components/TextForm"

// import Submit from "./components/Submit"

function App() {
 

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createAds" element={<CreateAds/>}/>
      <Route path="/createAds/media" element={<TextForm/>} />
      <Route path="/createAds/text" element={<TextForm/>} />
      {/* <Route path="/createAds/text/submit" element={<Submit/>} /> */}
      
    </Routes>
   
    </>
  )
}

export default App
