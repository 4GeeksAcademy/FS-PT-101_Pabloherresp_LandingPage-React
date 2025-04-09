import React from "react";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-md bg-dark">
			<div className="container text-light">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-dark navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
					<a className="navbar-brand text-light" href="#">Start Bootstrap</a>
					<ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
						<li className="nav-item">
							<a className="nav-link active text-light" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" aria-disabled="true">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" aria-disabled="true">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;