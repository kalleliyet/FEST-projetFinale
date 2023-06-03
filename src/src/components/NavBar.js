import { useRef } from "react";
import { FaBars, FaTimes, FaConnectdevelop} from "react-icons/fa";
import "./styles/NavBar.css"
import { NavLink } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="logo"><FaConnectdevelop className="navbar-icon"/> PunicFest</h3>
			<nav ref={navRef}>
				<NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/program">Program</NavLink>
        <NavLink to="/tickets">Tickets</NavLink>
        <NavLink to="/register">Register</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;