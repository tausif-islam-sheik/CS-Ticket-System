import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CustomerTickets from "./components/CustomerTickets";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import { useState } from "react";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        <Banner />
        <h1 className="max-w-7xl mx-auto pb-4 font-bold text-xl md:text-3xl px-3 md:px-0">
          Customer Tickets
        </h1>
        <div className="max-w-7xl mx-auto pb-5 md:pb-0 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tickets Area (2 Columns) */}
            <div className="lg:col-span-2">
              <Suspense
                fallback={
                  <div className="flex justify-center py-10">
                    <span className="loading loading-bars loading-xl"></span>
                  </div>
                }
              >
                <CustomerTickets
                  ticketsPromise={ticketsPromise}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              </Suspense>
            </div>

            {/* Sidebar (1 Column) */}
            <div>
              <Tasks tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
