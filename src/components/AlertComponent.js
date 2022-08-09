import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useAlertReducer } from "../AlertManager";

function AlertComponent() {
	const { addAlert, state } = useAlertReducer()
	return (
		<>
			<Stack direction="row" spacing={2} sx={{ width: "100%" }} mt={5}>
				<Button
					variant="contained"
					color="success"
					onClick={(e) => {
						e.preventDefault();
						addAlert({ alertType: "success", text: "Success", timeLimit: 10000, color: "success" });
					}}
				>
					ADD SUCCESS ALERT
				</Button>
				<Button
					variant="contained"
					color="warning"
					onClick={(e) => {
						e.preventDefault();
						addAlert({ alertType: "warning", text: "Warning", timeLimit: 10000, color: "warning" });
					}}
				>
					ADD WARNING ALERT
				</Button>
				<Button
					variant="contained"
					color="info"
					onClick={(e) => {
						e.preventDefault();
						addAlert({ alertType: "info", text: "Info", timeLimit: 10000, color: "info" });
					}}
				>
					ADD INFO ALERT
				</Button>
				<Button
					variant="contained"
					color="error"
					onClick={(e) => {
						e.preventDefault();
						addAlert({ alertType: "error", text: "Error", timeLimit: 10000, color: "error" });
					}}
				>
					ADD ERROR ALERT
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