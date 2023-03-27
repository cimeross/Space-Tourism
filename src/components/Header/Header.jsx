import React from "react";
import logo from "../../assets/shared/logo.svg";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<header className="header">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<nav className="navbar">
					<ul>
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
			</header>
		</>
	);
}

export default Header;
