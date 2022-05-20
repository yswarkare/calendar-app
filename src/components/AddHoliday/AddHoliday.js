import React, { useState } from 'react';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';
import DatePicker from 'react-datepicker';

const initialHolidayObj = { title: '', start: '', end: '' };

const AddHoliday = () => {
	const [showInput, setShowInput] = useState(false);
	const [newHoliday, setNewHoliday] = useState(initialHolidayObj);
	const allHolidays = useContextState().holidays;
	const updateContextState = useUpdateContextState();

	const handleAddHoliday = () => {
		updateContextState('holidays', [...allHolidays, newHoliday]);
		setNewHoliday(initialHolidayObj);
		setShowInput(false);
	};

	const onCancel = () => {
		setShowInput(false);
		setNewHoliday(initialHolidayObj);
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
				<div className={`w-full gap-8 flex flex-col justify-center content-center items-center`}>
					<div className={`w-1/2 gap-4 flex flex-row justify-center content-center items-center`}>
						<input
							className={`w-full px-2 border-1 rounded`}
							type='text'
							placeholder='Add Title'
							value={newHoliday.title}
							onChange={(e) => setNewHoliday({ ...newHoliday, title: e.target.value })}
						/>
						<DatePicker
							className={`w-full px-2 border-1 rounded`}
							placeholderText='Date'
							selected={newHoliday.start}
							onChange={(date) => setNewHoliday({ ...newHoliday, start: date, end: date })}
						/>
					</div>
					<div className={`w-full gap-8 flex flex-row justify-center content-center items-center`}>
						<button className={`btn-blue w-fit`} onClick={() => handleAddHoliday()}>
							Add Holiday
						</button>
						<button className={`btn-blue w-fit`} onClick={() => onCancel()}>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AddHoliday;
