import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage } from "./Routes.js";


// This is umcomplete right now first complete it.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
         <Route path="/activation/:url" element={<ActivationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
