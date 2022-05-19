import { createContext, useContext, useEffect } from 'react';
import holidays from '../data/holidays.data';
import useLocalStorage from './useLocalStorage';

const inititalState = {
	holidays: holidays,
};

const ContextState = createContext(inititalState);

export const useContextState = () => {
	return useContext(ContextState);
};

const UpdateContextState = createContext(() => {});

export const useUpdateContextState = () => {
	return useContext(UpdateContextState);
};

export const ContextStateProvider = ({ children }) => {
	const [contextState, setContextState] = useLocalStorage('context-state', inititalState);

	useEffect(() => {
		console.log({ contextState });
	}, [contextState]);

	const updateContextState = (prop, value) => {
		setContextState((prevState) => ({ ...prevState, [prop]: value }));
	};

	return (
		<ContextState.Provider value={contextState}>
			<UpdateContextState.Provider value={updateContextState}>
				{children}
			</UpdateContextState.Provider>
		</ContextState.Provider>
	);
};
