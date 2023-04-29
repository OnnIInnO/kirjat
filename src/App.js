import { Routes, Route } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/CustomNavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<TestPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="science" element={<Science />} />
        <Route path="challenge" element={<Challenge />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <div id="Home">
      <CustomNavbar />
      <HomePage />
    </div>
  );
}
function TestPage() {
  return (
    <div id="TestPage">
      <CustomNavbar />
      <p>Test will come here</p>
    </div>
  );
}
function Blog() {
  return (
    <div id="Blog">
      <CustomNavbar />
      <p>Blog will come here</p>
    </div>
  );
}
function Science() {
  return (
    <div id="Science">
      <CustomNavbar />
      <p>Science will come here</p>
    </div>
  );
}
function Challenge() {
  return (
    <div id="Challenge">
      <CustomNavbar />
      <p>Challenge will come here</p>
    </div>
  );
}

export default App;
