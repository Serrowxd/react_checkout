import React from 'react';
import { Link } from 'react-router-dom';
import Item from "../components/Item";

const Cart = ({ cart }) => {
	return (
		<div className={"p-8"}>
			<h1 className={"text-2xl font-bold mb-4"}>Items Cart</h1>
			{cart.length > 0 ? (
				<>
					{cart.map(item => (
						<div key={item.id} className={"flex-col"}>
							<Item item={item}/>
						</div>
					))}
				</>
			) : (
				<div>
					<p>"Please add items to your cart"</p>
					<Link to="/" className={"mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded"}>
						Back to Products
					</Link>
				</div>
			)}
			<h2 className={"text-4xl mt-5"}>
				Total Items: {cart.length} // Cost: {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
			</h2>
			<Link to="/checkout" className={"mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"}>
				Proceed to Checkout
			</Link>
		</div>
	);
}

export default Cart;