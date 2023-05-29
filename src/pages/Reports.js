import styled from "styled-components";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import "dayjs/locale/th";
import Report_Select from "../components/Report_Select";
import Report_DatePicker from "../components/Report_DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function Reports() {
  const date_now = dayjs();
  const [selectedReport, setSelectedReport] = useState("");
  const [startDate, setStartDate] = useState(date_now);
  const [endDate, setEndDate] = useState(date_now);
  const [timePickerValue, setTimePickerValue] = useState(
    dayjs("2018-01-01T00:00:00.000Z")
  );

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  return (
    <Section>
      <Container>
        <div className="container">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Report_Select
                  selectedReport={selectedReport}
                  handleReportChange={handleReportChange}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Report_DatePicker
                  dateValue={startDate}
                  dateOnChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  dateLabel="วันที่เริ่ม"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Report_DatePicker
                  dateValue={endDate}
                  dateOnChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  dateLabel="ถึงวันที่"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={1}>
              <Grid item xs={6} sm={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="เวลาเริ่ม"
                    value={timePickerValue}
                    onChange={(newValue) => setTimePickerValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Report_DatePicker
                  dateValue={endDate}
                  dateOnChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  dateLabel="ถึงวันที่"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale={"th-TH"}
                >
                  <TimePicker
                    value={timePickerValue}
                    onChange={(newValue) => setTimePickerValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sm={3}></Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Section>
  );
}
export default Reports;

const Section = styled.section`
  .container {
    background-color: #ffffff;

    padding: 1%;
    padding-top: 20px;
  }
`;
