import React from 'react';
import { Link } from 'react-router-dom';
import Item from "../components/Item";

const Cart = ({ cart }) => {
	return(
		<div className={"p-8"}>
			<h1 className={"text-2xl font-bold mb-4"}>Your Cart</h1>
			{cart.length > 0 ? (
				cart.map(item => (
					<div className={"flex-col"}>
						<Item key={item.id} item={item} />
					</div>
				))
			) :
			<p>"Please add items to your cart"</p>}
			<Link to="/checkout" className={"mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"}>
				Proceed to Checkout
			</Link>
		</div>
	)
}

export default Cart;