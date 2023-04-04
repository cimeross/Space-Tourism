import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/shared/logo.svg";
import "./header.scss";
import menuOpen from "../../../public/assets/shared/icon-hamburger.svg";

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [value, setValue] = useState(0);
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname;
		const linkIndex = navLinks.findIndex((link) => link.to === path);
		if (linkIndex >= 0) {
			setValue(linkIndex);
		}
	}, [location]);

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
							<li key={index} onClick={() => setValue(index)}>
								<Link
									to={link.to}
									onClick={handleLinkClick}
									className={value === index ? "activeLink" : ""}
								>
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
