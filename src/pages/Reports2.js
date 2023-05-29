import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function Reports2() {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    reportType: "",
  });
  const [reportData, setReportData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData.reportType);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Determine the API endpoint and payload based on the selected report type
    let endpoint, payload, columns;
    switch (formData.reportType) {
      case "sales":
        endpoint = "/api/generate-sales-report";
        payload = { startDate: formData.startDate, endDate: formData.endDate };
        columns = [
          "Order ID",
          "Customer Name",
          "Product Name",
          "Quantity",
          "Total",
        ];
        break;
      case "inventory":
        endpoint = "/api/generate-inventory-report";
        payload = { location: formData.location };
        columns = ["SKU", "Product Name", "Location", "Quantity"];
        break;
      default:
        alert("Please select a report type");
        return;
    }

    // Send the form data to the API endpoint
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReportData({ columns, data }); // Save the response data in state
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Start Date"
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Date"
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl fullWidth>
          <InputLabel>Report Type</InputLabel>
          <Select
            name="reportType"
            value={formData.reportType}
            onChange={handleInputChange}
          >
            <MenuItem value="">Select a report type</MenuItem>
            <MenuItem value="01">Sales Report</MenuItem>
            <MenuItem value="02">Inventory Report</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Generate Report
        </Button>
      </form>

      {reportData && (
        <table>
          <thead>
            <tr>
              {reportData.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reportData.data.map((row) => (
              <tr key={row.id}>
                {reportData.columns.map((column) => (
                  <td key={column}>{row[column.toLowerCase()]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Reports2;
