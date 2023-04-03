import React, { useState } from "react";
import "./technology.scss";
import { technology } from "../../data.json";
import { BsCircle } from "react-icons/bs";

function Technology() {
	const [vehicle] = useState(technology);
	const [value, setValue] = useState(0);

	const { name, images, description } = vehicle[value];

	return (
		<div className="technology">
			<div className="technology_Heading">
				<h2>
					<span>03</span> Space Launch 101
				</h2>
			</div>
			<div className="technology_Wrapper">
				<div className="technology_Img">
					<img src={images.landscape} alt="" />
				</div>
				<div className="technology_vehicle">
					<div className="choose_vehicle">
						{vehicle.map((item, index) => (
							<button
								key={index}
								onClick={() => setValue(index)}
								className={value === index ? "active" : ""}
							>
								{item.id}
							</button>
						))}
					</div>
					<div className="vehicle_info">
						<h3>The terminology...</h3>
						<h2>{name}</h2>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Technology;
