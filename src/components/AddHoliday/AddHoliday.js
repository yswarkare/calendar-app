import React, { useState } from 'react';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';
import DatePicker from 'react-datepicker';

const AddHoliday = () => {
	const [newHoliday, setNewHoliday] = useState({ title: '', start: '', end: '' });
	const allHolidays = useContextState().holidays;
	const updateContextState = useUpdateContextState();

	const handleAddHoliday = () => {
		updateContextState('holidays', [...allHolidays, newHoliday]);
	};

	return (
		<div className={`w-full flex flex-col justify-center content-center items-center`}>
			<h2>Add New Holiday</h2>
			<div className={`w-full flex flex-row justify-center content-center items-center`}>
				<input
					type='text'
					placeholder='Add Title'
					style={{ width: '20%', marginRight: '10px' }}
					value={newHoliday.title}
					onChange={(e) => setNewHoliday({ ...newHoliday, title: e.target.value })}
				/>
				<DatePicker
					placeholderText='Start Date'
					style={{ marginRight: '10px' }}
					selected={newHoliday.start}
					onChange={(start) => setNewHoliday({ ...newHoliday, start })}
				/>
				<DatePicker
					placeholderText='End Date'
					selected={newHoliday.end}
					onChange={(end) => setNewHoliday({ ...newHoliday, end })}
				/>
			</div>
			<div>
				<button stlye={{ marginTop: '10px' }} onClick={() => handleAddHoliday()}>
					Add Holiday
				</button>
			</div>
		</div>
	);
};

export default AddHoliday;
