import React from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { useAlertReducer } from "../AlertManager";

function AlertComponent() {
	const { addAlert, state } = useAlertReducer();
	const [alerts, setAlerts] = useState({
		alerttype: "",
		text: "",
		color: "",
		timelimit: 0,
	})

	const handleChange = (e) => {
		setAlerts({
			...alerts, [e.target.name]: e.target.value
		});
		console.log(alerts);
	}

	return (
		<>
			<Stack direction="row" spacing={2} sx={{ width: "100%" }} mt={5}>
				<TextField id="outlined-basic" name="text" label="Text" variant="outlined" value={alerts.text} onChange={handleChange} />
				<TextField id="outlined-basic" name="color" label="Color" variant="outlined" value={alerts.color} onChange={handleChange} />
				<TextField type="number" id="outlined-basic" name="timelimit" label="TimeLimit" variant="outlined" value={alerts.timelimit} onChange={handleChange} />
				<TextField id="outlined-basic" name="alerttype" label="AlertType" variant="outlined" value={alerts.alerttype} onChange={handleChange} />
				<Button
					variant="contained"
					color="error"
					onClick={(e) => {
						e.preventDefault();
						addAlert({ alertType: alerts.alerttype, text: alerts.text, timeLimit: alerts.timelimit, color: alerts.color });
					}}
				>
					GENERATE ALERT
				</Button>
			</Stack>
			<Stack sx={{ width: "10%", position: "fixed", top: 0, right: 0 }} spacing={2} mt={2}>
				{state.map((item) => {
					return (
						<Alert severity={item.alertType} key={item.id} color={item.color}>{item.text}</Alert>
					)
				})}
			</Stack>
		</>
	);
}

export default AlertComponent;