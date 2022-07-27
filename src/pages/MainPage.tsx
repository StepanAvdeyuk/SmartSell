import React from 'react'

import TechnicalWorks from '../components/notifications/TechnicalWorks';
import Dashboard from '../components/Dashboard/Dashboard';
import SummaryNotifications from '../components/notifications/SummaryNotifications';

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