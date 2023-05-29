import styled from "styled-components";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

function Report_Select({ selectedReport, onChanges }) {
  return (
    <Section>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">เลือกข้อมูลรายงาน</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedReport}
          label="เลือกข้อมูลรายงาน"
          onChange={onChanges}
          required
        >
          <MenuItem value={"1"}>รายงานข้อมูลรถย้อนหลัง แบบรายคัน</MenuItem>
          <MenuItem value={"2"}>Report02</MenuItem>
          <MenuItem value={"3"}>Report03</MenuItem>
        </Select>
      </FormControl>
    </Section>
  );
}
export default Report_Select;

const Section = styled.section``;
