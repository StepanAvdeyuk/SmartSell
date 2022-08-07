import React from 'react'

import TechnicalWorks from '../components/TechnicalWorks/TechnicalWorks';
import Dashboard from '../components/Dashboard/Dashboard';
import SummaryNotifications from '../components/Notifications/SummaryNotifications';
import Pagination from '../components/Pagination/Pagination';
import SalesReview from '../components/SalesReview/SalesReview';

const MainPage = () => {
	return (
		<>
		{false && <TechnicalWorks/>}
		{false && <SummaryNotifications/>}
		<Dashboard/>
		<SalesReview/>
		</>
	)
}

export default MainPage;