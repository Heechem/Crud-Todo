import TicketForm from '@/app/(components)/TicketForm';

const apiLocal = process.env.NEXT_API_URL;

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    throw new Error('failed to get the ticket');
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === 'new' ? false : true;
  let updatedTicket = {};

  if (EDITMODE) {
    updatedTicket = await getTicketById(params.id);
    updatedTicket = updatedTicket.foundTicket;
  } else {
    updatedTicket = {
      _id: 'new',
    };
  }

  return <TicketForm ticket={updatedTicket} />;
};

export default TicketPage;
