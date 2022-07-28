import React from 'react'

import TechnicalWorks from '../components/TechnicalWorks/TechnicalWorks';
import Dashboard from '../components/Dashboard/Dashboard';
import SummaryNotifications from '../components/Notifications/SummaryNotifications';

const MainPage = () => {
	return (
		<>
		{false && <TechnicalWorks/>}
		{false && <SummaryNotifications/>}
		<Dashboard/>
		</>
	)
}

export default MainPage;