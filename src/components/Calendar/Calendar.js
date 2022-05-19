import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar as NewCalendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useContextState } from '../../hooks/ContextState';

const locales = {
	'en-US': require('date-fns/locale/en-IN'),
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const Calendar = () => {
	const allHolidays = useContextState().holidays;

	return (
		<div className='App'>
			<h1>Calendar</h1>
			<NewCalendar
				localizer={localizer}
				events={allHolidays}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 500, margin: '50px' }}
			/>
		</div>
	);
};

export default Calendar;
