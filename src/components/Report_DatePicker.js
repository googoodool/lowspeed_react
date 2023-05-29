import styled from "styled-components";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
function Report_DatePicker({ dateValue, dateOnChange, dateLabel }) {
  return (
    <Section>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"th-TH"}>
        <DatePicker
          disableFuture
          label={dateLabel}
          format="DD/MM/YYYY"
          value={dateValue}
          onChange={dateOnChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Section>
  );
}
export default Report_DatePicker;

const Section = styled.section`
  .MuiFormControl-root {
    width: 100%;
  }
`;
