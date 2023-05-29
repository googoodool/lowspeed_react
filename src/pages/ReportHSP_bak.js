import styled from "styled-components";
import { useState } from "react";
import { Container, Grid, Button, Box } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/th";
import ReportSelect from "../components/Report_Select";
import ReportDatePicker from "../components/Report_DatePicker";
import ReportTimePicker from "../components/Report_TimePicker";
import HeaderBar from "../components/HeaderBar";
import AlertReport from "../components/AlertReport";
import Report01 from "../reports/Report01";

function ReportHSP() {
  const date_now = dayjs();
  const [selectedReport, setSelectedReport] = useState("");
  const [startDate, setStartDate] = useState(date_now);
  const [endDate, setEndDate] = useState(date_now);
  const [startTime, setStartTime] = useState(dayjs("00:01:00", "HH:mm:ss"));
  const [endTime, setEndTime] = useState(dayjs("23:59:00", "HH:mm:ss"));

  const [popupAlert, setPopupAlert] = useState(false);

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const generateReport = (event) => {
    setSelectedReport(event.target.value);

    console.log(selectedReport);
    if (selectedReport === "") {
      setPopupAlert(true);
    } else {
      setPopupAlert(false);
    }
    let startDateValue = startDate.format("DD/MM/YYYY");
    let endDateValue = endDate.format("DD/MM/YYYY");
    let startTimeValue = startTime.format("HH:mm");
    let endTimeValue = endTime.format("HH:mm");
    console.log("start Date " + startDateValue);
    console.log("End Date " + endDateValue);
    console.log("Start Time " + startTimeValue);
    console.log("End Time " + endTimeValue);
  };

  return (
    <Section>
      <HeaderBar
        wimType="High Speed Report"
        stationName="สถานีตรวจสอบน้ำหนัก สิงห์บุรี"
      />
      <Container>
        <div className="container">
          <form onSubmit={generateReport}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <ReportDatePicker
                  dateValue={startDate}
                  dateOnChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  dateLabel="วันที่เริ่ม"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <ReportDatePicker
                  dateValue={endDate}
                  dateOnChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  dateLabel="ถึงวันที่"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <ReportTimePicker
                  label="เวลาเริ่ม"
                  defaultTime={startTime}
                  timeChange={(newTime) => {
                    setStartTime(newTime);
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <ReportTimePicker
                  label="ถึงเวลา"
                  defaultTime={endTime}
                  timeChange={(newTime) => {
                    setEndTime(newTime);
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={1}>
              <Grid item xs={6} sm={9}>
                <ReportSelect
                  selectedReport={selectedReport}
                  handleReportChange={handleReportChange}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Button
                    style={{ display: "block", alignItems: "right" }}
                    variant="contained"
                    type="submit"
                  >
                    Generate Report
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
        {popupAlert && (
          <AlertReport type="error" message="กรุณาเลือกประเภทรายงาน" />
        )}
      </Container>
    </Section>
  );
}
export default ReportHSP;

const Section = styled.section`
  .container {
    background-color: #ffffff;

    padding: 1%;
    padding-top: 20px;
  }
`;
