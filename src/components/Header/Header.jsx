import logo from "../../assets/shared/logo.svg";
import "./header.scss";
import { Link } from "react-router-dom";
import menuOpen from "../../assets/shared/icon-hamburger.svg";
import { useState } from "react";

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	const handleLinkClick = () => {
		setIsNavOpen(false);
	};

	const navLinks = [
		{ to: "/", label: "Home" },
		{ to: "/destination", label: "Destination" },
		{ to: "/crew", label: "Crew" },
		{ to: "/technology", label: "Technology" },
	];

	return (
		<div>
			<header className="header">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<nav className={isNavOpen ? "navbar active" : "navbar"}>
					<ul className="nav-links">
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link to={link.to} onClick={handleLinkClick}>
									<span>0{index}</span> {link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="hamburger" onClick={toggleNav}>
					<button className="menu-btn">
						<img
							src={menuOpen}
							alt="menu icon"
							className={isNavOpen ? "active" : ""}
						/>
					</button>
				</div>
			</header>
		</div>
	);
}

export default Header;
