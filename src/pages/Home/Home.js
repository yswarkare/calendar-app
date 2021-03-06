import React from 'react';
import AddHoliday from '../../components/AddHoliday/AddHoliday';
import Calendar from '../../components/Calendar/Calendar';

const Home = () => {
	return (
		<div className={`w-full flex flex-col justify-center content-center items-center`}>
      <Calendar />
			<AddHoliday />
		</div>
	);
};

export default Home;
