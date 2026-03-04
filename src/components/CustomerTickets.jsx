import TicketCard from "./TicketCard";

const CustomerTickets = ({
  tickets,
  removeFromTickets,
  setTasks,
  setProgress,
}) => {
  return (
    <>
      <div className="pb-10 px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            removeFromTickets={removeFromTickets}
            setTasks={setTasks}
            setProgress={setProgress}
          />
        ))}
      </div>
    </>
  );
};

export default CustomerTickets;
