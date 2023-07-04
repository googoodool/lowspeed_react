import styled from "styled-components";
import { useState } from "react";
import { Container, Grid, Button, Box } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/th";
import ReportSelect from "../components/Report_Select";
import ReportDatePicker from "../components/Report_DatePicker";
import ReportTimePicker from "../components/Report_TimePicker";
import HeaderBar from "../components/HeaderBar";
import { useNavigate } from "react-router-dom";

function ReportHSP() {
  const navigate = useNavigate();
  const date_now = dayjs();
  const [selectedReport, setSelectedReport] = useState("");
  const [startDate, setStartDate] = useState(date_now);
  const [endDate, setEndDate] = useState(date_now);
  const [startTime, setStartTime] = useState(dayjs("00:01:00", "HH:mm:ss"));
  const [endTime, setEndTime] = useState(dayjs("23:59:00", "HH:mm:ss"));

  // const [submitButton, setSubmitButton] = useState(null);

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const generateReport = (event) => {
    event.preventDefault();
    // setSubmitButton(true);

    var startDateValue = startDate.format("YYYY-MM-DD");
    var endDateValue = endDate.format("YYYY-MM-DD");
    var startTimeValue = startTime.format("HH:mm:ss");
    var endTimeValue = endTime.format("HH:mm:ss");

    switch (selectedReport) {
      case "1":
        // setSubmitButton("1");
        navigate("/Report01", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      case "2":
        navigate("/Report02_H", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      case "3":
        navigate("/Report03_H", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      case "4":
        navigate("/Report04_H", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      case "5":
        navigate("/Report05_H", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      case "6":
        navigate("/Report06_H", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      case "7":
        navigate("/Report07_H", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      case "8":
        navigate("/Report08_H", {
          state: {
            startDateValue: startDateValue,
            endDateValue: endDateValue,
            startTimeValue: startTimeValue,
            endTimeValue: endTimeValue,
          },
        });
        break;
      default:
      // setSubmitButton(null);
    }
  };

  return (
    <Section>
      <HeaderBar wimType="High Speed Report" />
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
                  name="nameStartDate"
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
                  onChanges={handleReportChange}
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
