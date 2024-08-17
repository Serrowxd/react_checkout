import React, { useState } from 'react';

const Item = ({ item, addToCart, isEnabled }) => {
	// isEnabled is the "state" of whether it's on the home page.
	
	// Move this to global state
	const [isAdded, setIsAdded] = useState(false);
	
	const handleAddToCart = () => {
		addToCart(item);
		setIsAdded(true); // true when item is in cart
	};
	
	// I feel like having the {isEnabled && ...} check will cause issues later.
	// Look into adding a conditional for whether it shows "add to cart" and "remove from cart"
	// It should only show "remove from cart" in the cart screen, clicking "remove from cart" will slice the relevant index out of the array, so we wouldn't need to see it.
	return (
		<div key={item.id} className={`flex-col p-5 m-2 inline-flex border-2 ${isEnabled ? (isAdded ? 'bg-green-100' : 'bg-red-100') : ''}`}>
			<h3 className={"p-2"}>{item.name} - ${item.price.toFixed(2)}</h3>
			{isEnabled &&
				<button onClick={handleAddToCart} className={"mt-4 inline-block bg-gray-800 text-white py-2 px-4 rounded"}>{isAdded ? "Remove from Cart" : "Add to Cart"} </button>
			}
		</div>
	)
}

export default Item;