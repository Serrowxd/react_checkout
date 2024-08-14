import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Confirmation from "../pages/Confirmation";

// Very basic testing
describe('Routing', () => {
	test('renders HomePage as the default route', () => {
		render(<App />)
		expect(screen.getByText(/The Kevin Depot/i)).toBeInTheDocument();
	});
	
	test('renders Cart', () => {
		render(<Router><Cart cart={[]}/></Router>)
		expect(screen.getByText(/Items Cart/i)).toBeInTheDocument();
	});
	
	test('renders Checkout', () => {
		render(<Router><Checkout /></Router>)
		expect(screen.getByText(/Checkout Form/i)).toBeInTheDocument();
	})
	
	test('renders Confirmation', () => {
		render(<Router><Confirmation /></Router>);
		expect(screen.getByText(/Order Confirmation/i));
	})
})