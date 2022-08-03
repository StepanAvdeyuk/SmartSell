import React from 'react'

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchPage from './pages/SearchPage';
import GoodsSearch from './components/Search/GoodsSearch';
import SellersSearch from './components/Search/SellersSearch';
import CategorySearch from './components/Search/CategorySearch';
import BrandSearch from './components/Search/BrandSearch';

const App: React.FC = () => {
	return (
        <div className="container">
			<Header/>
			<Sidebar/>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/notifications" element={<NotificationsPage/>}/>
				<Route path="/search" element={<SearchPage/>}>
					<Route path='goods' element={<GoodsSearch/>}/>
					<Route path='sellers' element={<SellersSearch/>}/>
					<Route path='category' element={<CategorySearch/>}/>
					<Route path='brands' element={<BrandSearch/>}/>
				</Route>
			</Routes>
       	</div>
	);
}

export default App;
