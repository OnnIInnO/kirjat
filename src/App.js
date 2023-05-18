import { Routes, Route } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/CustomNavBar";
import HomePage from "./components/HomePage";
import Testi from "./components/Testi";
import Tiede from "./components/Tiede";
import Blogi from "./components/Blogi";
import Footer from "./components/Footer";

//This is the main app including all the routing to the right parts.
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <div className="App-routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<TestPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="science" element={<Science />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
function Home() {
  return (
    <div id="Home">
      <HomePage />
    </div>
  );
}
function TestPage() {
  return (
    <div id="TestPage">
      <Testi />
    </div>
  );
}
function Blog() {
  return (
    <div id="Blog">
      <Blogi />
    </div>
  );
}
function Science() {
  return (
    <div id="Science">
      <Tiede />
    </div>
  );
}

export default App;
