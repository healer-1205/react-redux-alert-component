import { useEffect, useReducer, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const initialState = []

const reducer = (state, action) => {
	switch (action.type) {
		case "addAlert":
			return [...state, action.payload];
		case "removeAlert":
			return state.filter((item) => item.id !== action.payload.id)
		default: throw new Error();
	}
}

export const useAlertReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [removeIDList, setRemoveIDList] = useState([]);

	useEffect(() => {
		removeIDList.forEach((item) => {
			removeAlert({ id: item })
		})
		// eslint-disable-next-line
	}, [removeIDList])

	const addAlert = (params) => {
		const id = uuidv4();
		dispatch({ type: "addAlert", payload: { id: id, ...params } });
		setTimeout(() => {
			setRemoveIDList([...removeIDList, id])
		}, params.timeLimit)
	}

	const removeAlert = (params) => {
		dispatch({ type: "removeAlert", payload: params });
		setRemoveIDList(removeIDList.filter(item => item !== params.id))
	}

	return { state, addAlert, removeAlert }
}