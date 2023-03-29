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
						<li>
							<Link to="/">
								<span>00</span> Home
							</Link>
						</li>
						<li>
							<Link to="/destination">
								<span>01</span> Destination
							</Link>
						</li>
						<li>
							<Link to="/crew">
								<span>02</span> Crew
							</Link>
						</li>
						<li>
							<Link to="/technology">
								<span>03</span> Technology
							</Link>
						</li>
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
