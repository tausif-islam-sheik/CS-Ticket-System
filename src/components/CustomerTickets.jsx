import React, { use } from "react";
import CustomerTicket from "./CustomerTicket";

const CustomerTickets = ({ ticketsPromise }) => {
  const customerTickets = use(ticketsPromise);
  
  return (
    <div className="px-5 pb-10 md:px-36 grid grid-cols-1 md:grid-cols-2 gap-4">
      {customerTickets.map((ticket) => <CustomerTicket ticket={ticket} />)}
    </div>
  );
};

export default CustomerTickets;
