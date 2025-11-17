import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import CompJs from "./compJs";
import CompJsx from "./compJsx";
import Navbar from "./Navbar";
import { Card } from "./Card";
import Prueba from "./prueba";


//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<Navbar />
			<section className="container row ">
				<div className="col-sm-12 col-md-6 col-lg-4">

					<Card />
				</div> 
				<div className="col-sm-12 col-md-6 col-lg-4">

					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">

					<Card />
				</div>
			</section>



<Card />

<Prueba/>



			<h1 className="text-center mt-5">Hello Pepe!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;