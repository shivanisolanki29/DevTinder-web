import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Feed from "./Components/Feed";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/test" element={<div>Test page</div>} />
              <Route path="/error" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
