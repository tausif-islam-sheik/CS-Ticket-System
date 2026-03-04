import { use } from "react";
import TicketCard from "./TicketCard";

const CustomerTickets = ({ ticketsPromise, tasks, setTasks, progress, setProgress }) => {
  const customerTickets = use(ticketsPromise);

  return (
    <>
      <div className="pb-10 px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        {customerTickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            tasks={tasks}
            setTasks={setTasks}
            progress={progress}
            setProgress={setProgress}
          />
        ))}
      </div>
    </>
  );
};

export default CustomerTickets;
