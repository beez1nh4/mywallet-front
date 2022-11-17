import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import LoginPage from "./pages/SignUpPage/LoginPage";


function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/sign-up" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
