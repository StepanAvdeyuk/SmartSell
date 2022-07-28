import React from 'react'

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchPage from './pages/SearchPage';
import GoodsSearch from './components/Search/GoodsSearch';

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
				</Route>
			</Routes>
       	</div>
	);
}

export default App;
