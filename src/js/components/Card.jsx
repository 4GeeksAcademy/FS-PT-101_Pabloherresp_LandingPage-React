import React from "react";

const Card = (props) => {
	return (
		<div className="col-xs-12 col-md-6 col-lg-3 p-3">
			<div className="card text-center">
				<img src={props.url} className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quas, totam incidunt esse quia dolor neque. Nostrum, soluta dignissimos pariatur vero, veniam unde facilis magnam sunt molestias recusandae rerum animi.</p>
				</div>
				<div className="card-footer bg-white">
					<button className="btn btn-primary" type="button">Find Out More!</button>
				</div>
			</div>
		</div>
	);
};

export default Card;