/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authentication/AuthSharer";


const Navbar = () => {

    const { user,logout } = useContext(AuthContext)
    console.log(user)

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allCraft'>All Arts & Crafts</NavLink></li>
        <li><NavLink to='/addCraft'>Add Craft</NavLink></li>
        <li><NavLink to='/myCraft'>My Craft</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Masu Ake's</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        value="dark"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                {/* User Section */}
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                                <li>
                                    {user.displayName}
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={logout}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <div className="flex justify-center items-center gap-3">
                            <Link to="/login" className="btn btn-success btn-sm md:btn-md">Login</Link>
                            <Link to="/register" className="btn btn-outline btn-sm md:btn-md">Register</Link>
                        </div>
                        
                }
            </div>
        </div>
    );
};

export default Navbar;