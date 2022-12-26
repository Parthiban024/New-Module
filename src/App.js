// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";
import PopUp from './popup'
import LoginPage from "./login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/emplist" element={<EmpListing />}></Route>
          <Route path="/" element={<EmpCreate />}></Route>
          <Route path="/employee/details/:empid" element={<EmpDetails />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
          <Route path="/popup" element={<PopUp />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
