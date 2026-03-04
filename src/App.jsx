import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CustomerTickets from "./components/CustomerTickets";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [resolvedTask, setResolvedTask] = useState([]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const res = await fetch("/tickets.json");
        const data = await res.json();
        setTickets(data);
      } catch (error) {
        console.error("Failed to load tickets:", error);
      }
    };

    loadTickets();
  }, []);

  // Remove from Customer Tickets
  const removeFromTickets = (id) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
  };

  // Remove from Task Status
  const handleTasks = (id) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        <Banner progress={progress} resolved={resolved} />
        <h1 className="max-w-7xl mx-auto pb-4 font-bold text-xl md:text-3xl px-3 md:px-0">
          Customer Tickets
        </h1>
        <div className="max-w-7xl mx-auto pb-5 md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Tickets Area (2 Columns) */}
            <div className="lg:col-span-3">
              <Suspense
                fallback={
                  <div className="flex justify-center py-10">
                    <span className="loading loading-bars loading-xl"></span>
                  </div>
                }
              >
                <CustomerTickets
                  tickets={tickets}
                  removeFromTickets={removeFromTickets}
                  setTasks={setTasks}
                  setProgress={setProgress}
                />
              </Suspense>
            </div>

            {/* Sidebar (1 Column) */}
            <div>
              <Tasks
                tasks={tasks}
                setResolved={setResolved}
                setProgress={setProgress}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                handleTasks={handleTasks}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="center-top" reverseOrder={false} />
    </>
  );
}

export default App;
