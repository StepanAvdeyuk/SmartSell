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
import FavouritesSearch from './components/Search/FavouritesSearch';
import SearchHistory from './components/Search/SearchHistory';
import GoosList from './components/Search/GoodsList/GoosList';
import ProductsList from './components/Search/ProductsList/ProductsList';
import CommodityPairSettings from './components/CommodityPair/CommodityPairSettings';
import InventoryTags from './components/InventoryTags/InventoryTags';
import InventoryChanges from './components/InventoryChanges/InventoryChanges';

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
					<Route path='favourites' element={<FavouritesSearch/>}/>
					<Route path='history' element={<SearchHistory/>}/>
				</Route>
				<Route path="/goods_list" element={<GoosList/>}/>
				<Route path="/products_list" element={<ProductsList/>}/>
				<Route path="/pair_settings" element={<CommodityPairSettings/>}/>
				<Route path="/tags" element={<InventoryTags/>}/>
				<Route path="/inventory_changes" element={<InventoryChanges/>}/>
			</Routes>
       	</div>
	);
}

export default App;
