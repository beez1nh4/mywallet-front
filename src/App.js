import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddIncomePage from "./pages/AddIncomePage/AddIncomePage";
import AddOutflowPage from "./pages/AddOutflowPage/AddOutflowPage";


function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/add-income" element={<AddIncomePage/>}/>
        <Route path="/add-outflow" element={<AddOutflowPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
