import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CustomerTickets from "./components/CustomerTickets";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {
  const ticketsPromise = fetchTickets();
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        <Banner />
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <CustomerTickets ticketsPromise={ticketsPromise} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
