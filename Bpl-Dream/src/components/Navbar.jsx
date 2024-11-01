import PropTypes from 'prop-types';

const Navbar = ({ coins }) => {
  return (
    <nav className="navbar flex justify-between h-[6rem] items-center px-32">
      <img src="logo.png" alt="" className="h-16 w-20"/>
      <div className="nav flex justify-between gap-32 items-center">
        <ul className="nav-items flex gap-16 text-md text-[#131313] items-center">
          <li><a href="" className="">Home</a></li>
          <li><a href="" className="">Fixture</a></li>
          <li><a href="" className="">Teams</a></li>
          <li><a href="" className="">Schedules</a></li>
        </ul>
        <div className="coins border h-12 px-4 rounded-lg shadow-sm flex items-center justify-center gap-2">
          <strong>{coins}</strong>
          <img src="coin.png" alt="" className="inline h-7"/>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default Navbar;
