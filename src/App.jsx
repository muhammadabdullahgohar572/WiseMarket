import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Categorieslink } from "./components/Categorieslink";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./components/Login/Login";
import { Sngup } from "./components/singup/Sngup";
import { Accounts } from "./components/Accounts/Accounts";
// import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Categorieslink />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="Account" element={<Accounts/>} />
          <Route path="Home" element={<Home/>} />
          <Route path="singup" element={<Sngup/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
