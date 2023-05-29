import styled from "styled-components";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Report_TimePicker({ defaultTime, label, timeChange }) {
  return (
    <Section>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"th-TH"}>
        <MobileTimePicker
          defaultValue={defaultTime}
          label={label}
          ampm={false}
          onChange={timeChange}
        />
      </LocalizationProvider>
    </Section>
  );
}
export default Report_TimePicker;

const Section = styled.section`
  .MuiFormControl-root {
    width: 100%;
  }
`;
