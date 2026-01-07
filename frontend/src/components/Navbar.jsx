import React, { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { GoSignIn } from "react-icons/go";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const menuRef = useRef(null);
  const isCollection = location.pathname === "/collection";
  const isLogin = location.pathname === "/login";

  // 🔥 Outside click handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (visible && menuRef.current && !menuRef.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [visible]);

  return (
    <div className="flex items-center justify-between py-5 px-5 font-medium sticky top-0 z-50 bg-white">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5 text-sm text-gray-700">
        {["/", "/collection", "/about", "/contact"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-indigo-600 ${
                isActive ? "text-indigo-600" : ""
              }`
            }
          >
            <p>{path === "/" ? "HOME" : path.slice(1).toUpperCase()}</p>
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {isCollection && (
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search"
          />
        )}

        <div className="group relative md:flex hidden">
          <Link to="/login">
            {" "}
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-500 text-gray-50 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">
                <a href="/logout">Logout</a>
              </p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="cart" />
          <p className="absolute -right-2 bottom-0 w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
            {getCartCount?.() || 0}
          </p>
        </Link>

       

        {/* Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer md:hidden"
          alt="menu"
        />
         <Link to="/login" className="relative ">
          {isLogin || (
            <div onClick={() => setShowSearch(true)}>
              <GoSignIn className="text-2xl hover:text-red-500" />
            </div>
          )}
        </Link>
      </div>
     

      {/* Mobile Sidebar */}
      {visible && <div className="fixed inset-0 bg-black/40 z-40"></div>}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-1/2 bg-white z-50 transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 p-3">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="back"
            />
            <p>Back</p>
          </div>
          

          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              onClick={() => setVisible(false)}
              className="mt-3 py-2 pl-3 border rounded hover:bg-red-200"
            >
              {path === "/" ? "Home" : path.slice(1)}
            </NavLink>
            ))}
            
        </div>
        
      </div>
     
    </div>
  );
};

export default Navbar;
