import React, { useState } from 'react';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';
import DatePicker from 'react-datepicker';

const AddHoliday = () => {
	const [showInput, setShowInput] = useState(false);
	const [newHoliday, setNewHoliday] = useState({ title: '', start: '', end: '' });
	const allHolidays = useContextState().holidays;
	const updateContextState = useUpdateContextState();

	const handleAddHoliday = () => {
		updateContextState('holidays', [...allHolidays, newHoliday]);
		setShowInput(false);
	};

	return (
		<div
			className={`w-full px-8 py-8 gap-4 flex flex-col justify-center content-center items-center`}
		>
			<h2>Add New Holiday</h2>
			{!showInput && (
				<button className={`btn-blue w-fit`} onClick={() => setShowInput(true)}>
					Add
				</button>
			)}
			{showInput && (
				<div className={`w-full gap-4 flex flex-col justify-center content-center items-center`}>
					<div className={`w-1/2 gap-4 flex flex-row justify-center content-center items-center`}>
						<input
							className={`w-full border-1 rounded`}
							type='text'
							placeholder='Add Title'
							value={newHoliday.title}
							onChange={(e) => setNewHoliday({ ...newHoliday, title: e.target.value })}
						/>
						<DatePicker
							className={`w-full border-1 rounded`}
							placeholderText='Date'
							selected={newHoliday.start}
							onChange={(date) => setNewHoliday({ ...newHoliday, start: date, end: date })}
						/>
					</div>
					<div>
						<button className={`btn-blue w-full`} onClick={() => handleAddHoliday()}>
							Add Holiday
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AddHoliday;
