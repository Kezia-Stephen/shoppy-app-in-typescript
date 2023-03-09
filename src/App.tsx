import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import MainPage from "./Components/MainPage";
import Checkout from "./CheckoutComponents/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
