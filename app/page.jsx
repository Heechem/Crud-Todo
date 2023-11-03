import TicketCard from './(components)/TicketCard';

const apiLocal = process.env.NEXT_API_URL;

const getTickets = async () => {
  try {
    const res = await fetch(`${apiLocal}/api/Tickets`, {
      cache: 'no-store',
    });

    return res.json();
  } catch (error) {
    console.log('error is ', error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  // Make sure we have tickets needed for production build.
  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniquecategory, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-4"
            >
              <h2>{uniquecategory}</h2>
              <div className=" lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniquecategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      key={_index}
                      id={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
