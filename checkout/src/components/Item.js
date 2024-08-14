import React, { useState } from 'react';

const Item = ({ item, addToCart, isEnabled }) => {
	// in this case, isEnabled is the "state" of whether it's on the home page.
	
	const [isAdded, setIsAdded] = useState(false);
	
	const handleAddToCart = () => {
		addToCart(item);
		setIsAdded(true); // true when item is in cart
	};
	
	return (
		<div key={item.id} className={`flex-col p-5 m-2 inline-flex border-2 ${isEnabled ? (isAdded ? 'bg-green-100' : 'bg-red-100') : ''}`}>
			<h3 className={"p-2"}>{item.name} - ${item.price.toFixed(2)}</h3>
			{isEnabled &&
				<button onClick={handleAddToCart} className={"btn btn-primary"}>Add to Cart</button>
			}
		</div>
	)
}

export default Item;