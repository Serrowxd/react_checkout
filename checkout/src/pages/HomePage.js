import React from 'react';
import { Link } from 'react-router-dom';
import Item from "../components/Item";

const HomePage = ({items, addToCart}) => {
	return(
		<div className={"container-fluid"}>
			<div className={"w-full"}>
				<div className={"columns-container"}>
					<div className={"row-auto text-center bg-gray-800 text-white p-5"}>
						<h1 className={"text-6xl p-2"}>Sell Things & Stuff</h1>
						<p className={"text-2xl p-1 text-center"}>We sell things!</p>
					</div>
					<h2 className={"text-4xl mt-5 mb-5 text-center"}>Products</h2>
					<div className={"flex-row flex-wrap"}>
						{items.map((item => (
							<Item key={item.id} item={item} addToCart={addToCart} isEnabled={true}/>
						)))}
					</div>
				</div>
				<Link to="/Cart" className={"mt-4 inline-block bg-blue-500 text-white ml-2 py-2 px-4 rounded"}>
					Proceed to Cart
				</Link>
			</div>
		</div>
	)
}

export default HomePage;