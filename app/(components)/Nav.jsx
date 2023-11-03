import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className=" flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link
          href={'/'}
          className="text-white"
        >
          <FontAwesomeIcon
            icon={faHome}
            className="icon pr-2"
          />
          Home
        </Link>
        <Link
          href={'/TicketPage/new'}
          className="text-white"
        >
          <FontAwesomeIcon
            icon={faTicket}
            className="icon pr-2"
          />
          New / Update ticket
        </Link>
      </div>
      <div>
        <p className=" text-default-text">User email</p>
      </div>
    </nav>
  );
};

export default Nav;
