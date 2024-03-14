import "./layout.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./routes/homePage/HomePage.jsx";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
