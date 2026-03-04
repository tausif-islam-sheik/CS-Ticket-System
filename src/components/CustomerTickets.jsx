import { use } from "react";
import CustomerTicket from "./CustomerTicket";

const CustomerTickets = ({ ticketsPromise, tasks, setTasks }) => {
  const customerTickets = use(ticketsPromise);

  return (
    <>
      
      <div className="pb-10 px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        {customerTickets.map((ticket) => (
          <CustomerTicket key={ticket.id} ticket={ticket} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
    </>
  );
};

export default CustomerTickets;
