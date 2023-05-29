import { Alert } from "@mui/material";

function AlertReport({ type, message }) {
  return (
    <div>
      <Alert severity={type}>{message}</Alert>
    </div>
  );
}
export default AlertReport;
