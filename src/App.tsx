import React from 'react'

import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import TechnicalWorks from './components/notifications/TechnicalWorks';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
	return (
		<>
        <div className="container">
			<Header/>
			{false && <TechnicalWorks/>}
			<Sidebar/>
			<Dashboard/>
        </div>
		</>
	);
}

export default App;
