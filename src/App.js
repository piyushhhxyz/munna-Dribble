import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/login";
import Signup from "./components/signup";
import CreateProfile from "./components/profile";
import Roletype from "./components/roletype";
import Home from "./components/main";
import Error from "./components/Error";
import MailVerify from "./components/mailVerify";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}> </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/create-profile" element={isLoggedIn ? <CreateProfile /> : <Login />}></Route>
      <Route path="/role-type" element={<Roletype />}></Route>
      <Route path="/emailverify" element={isLoggedIn ? <MailVerify /> : <Login />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
