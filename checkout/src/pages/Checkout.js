import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
	return(
		<div className={"p-8"}>
			<h1 className={"text-2xl font-bold mb-4"}>Checkout</h1>
			<p>Checkout form...</p>
			<Link to="/confirmation" className={"mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded"}>
				Proceed to Checkout
			</Link>
		</div>
	)
}

export default Checkout;