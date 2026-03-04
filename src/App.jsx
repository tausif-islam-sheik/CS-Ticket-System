import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        <Banner />
      </div>
    </>
  );
}

export default App;
