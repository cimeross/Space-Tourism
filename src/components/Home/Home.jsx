import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

function Home() {
	return (
		<>
			<section className="home">
				<div className="overlay">
					<div className="overlay-info">
						<h2>SO, YOU WANT TO TRAVEL TO</h2>
						<h1>SPACE</h1>
						<p>
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</p>
					</div>
					<div className="btn-overlay">
						<button>
							<Link to="destination">Explore</Link>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
export default Home;
