import React from 'react'

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotificationsPage from './pages/NotificationsPage';

const App: React.FC = () => {
	return (
        <div className="container">
			<Header/>
			<Sidebar/>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/notifications" element={<NotificationsPage/>}/>
			</Routes>
       	</div>
	);
}

export default App;
