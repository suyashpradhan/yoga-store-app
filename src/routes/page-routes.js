/** @format */

import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from '../components/Home';
import { ProductsListing } from '../components/ProductsListing/ProductsListing.jsx';
import { ProductDetails } from '../Pages/ProductDetails/ProductDetails.jsx';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { PrivateRoutes } from './private-routes';
import { Bag } from '../pages/Bag';
import { Wishlist } from '../pages/Wishlist';

export const PageRoutes = () => {
	return (
		<Routes>
			<Route exact path='/products' element={<ProductsListing />}></Route>
			<Route exact path='/' element={<Home />}></Route>
			<Route exact path='/products/:_id' element={<ProductDetails />}></Route>
			<Route exact path='/wishlist' element={<Wishlist />}></Route>
			<PrivateRoutes exact path='/bag' element={<Bag />}></PrivateRoutes>
			<Route exact path='/login' element={<SignIn />}></Route>
			<Route exact path='/register' element={<SignUp />}></Route>
		</Routes>
	);
};
