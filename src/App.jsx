import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        <Banner />
      </div>
      <Footer />
    </>
  );
}

export default App;
