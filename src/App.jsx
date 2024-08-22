import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import LoginDisplay from "./pages/LoginDisplay";
import SignupDisplay from "./pages/SignupDisplay";
// import { useState } from "react";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="login/welcome" element={<LoginDisplay />} />

            <Route path="signup" element={<Signup />} />
            <Route path="signup/signup-welcome" element={<SignupDisplay />} />

            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
