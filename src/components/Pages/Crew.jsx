import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import "./crew.scss";
import { crew } from "../../data.json";

export default function Crew() {
	const [member] = useState(crew);
	const [value, setValue] = useState(0);

	const { name, images, role, bio } = member[value];

	return (
		<>
			<div className="crew">
				<div className="crew_heading">
					<h2>
						<span>02</span> Meet your crew
					</h2>
					<div className="crew_image">
						<img src={images.png} />
					</div>
				</div>
				<div className="crew-info">
					<div className="choose-member">
						{member.map((item, index) => (
							<BsCircle
								key={index}
								onClick={() => setValue(index)}
								className={value === index ? "active" : ""}
							>
								{item.name}
							</BsCircle>
						))}
					</div>
					<div className="crew-details">
						<h3>{role}</h3>
						<h1>{name}</h1>
						<p>{bio}</p>
					</div>
				</div>
			</div>
		</>
	);
}
