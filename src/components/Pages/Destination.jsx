import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { destinations } from "../../data.json";
import "./destination.scss";

function Destination() {
	const [planets] = useState(destinations);
	const [value, setValue] = useState(0);

	const isActive = (path) => {
		return path === location.pathname;
	};

	const { name, images, description, distance, travel } = planets[value];
	return (
		<>
			<section>
				<div className="planetWrapper">
					<div className="planet">
						<h1>
							<span>01</span> Pick your destination
						</h1>
						<img src={images.png} />
					</div>
					<div className="planetDescription">
						{planets.map((item, index) => (
							<button
								key={index}
								onClick={() => setValue(index)}
								className={value === index ? "active" : ""}
							>
								{item.name}
							</button>
						))}

						<h2>{name}</h2>
						<p>{description}</p>
						<ul>
							<li>
								AVG. DISTANCE <span>{distance}</span>
							</li>
							<li>
								Est. travel time <span>{travel}</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Destination;
