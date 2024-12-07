import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./Body";
import Login from "./Login"
import Profile from "./Profile"
import Feed from "./Feed"


function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/feed" element={<Feed />}/>
          <Route path="/test" element= {<div>Test page</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
