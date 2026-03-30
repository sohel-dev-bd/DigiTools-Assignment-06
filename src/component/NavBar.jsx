const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
         <h2 className="bg-linear-to-r from-[#4F39F6] via-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-3xl">DigiTools</h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;