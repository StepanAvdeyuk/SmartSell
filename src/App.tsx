import React from 'react'

import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
	return (
		<>
        <div className="container">
			<Header/>
			<Sidebar/>
			<Dashboard/>
        </div>
		</>
	);
}

export default App;
