import CartIcon from "../assets/shopping-cart-01.svg";

const NavBar = () => {
  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
         <h2 className="bg-linear-to-r from-[#4F39F6] via-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-3xl">DigiTools</h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="flex gap-3">
          <img onClick={"cart"} src={CartIcon} alt="" /> <span>Login</span>
        </div>
        <a className="btn bg-linear-to-r from-[#4F39F6] via-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;