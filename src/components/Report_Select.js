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
          <MenuItem value={"1"}>01-รายงานข้อมูลรถย้อนหลัง แบบรายคัน</MenuItem>
          <MenuItem value={"2"}>02-รายงานรถแยกตามประเภท และผลคัดกรอง</MenuItem>
          <MenuItem value={"3"}>
            03-รายงาน ปริมาณรถแยกตามประเภท แบบรายวัน
          </MenuItem>
          <MenuItem value={"4"}>
            04-รายงาน ปริมาณรถแยกตามประเภท แบบรายเดือน
          </MenuItem>
          <MenuItem value={"5"}>
            05-รายงาน ปริมาณรถแยกตามประเภท แบบรายปี
          </MenuItem>
          <MenuItem value={"6"}>
            06-รายงาน ค่าเฉลี่ยน้ำหนักรถแยกตามประเภท แบบรายวัน
          </MenuItem>
          <MenuItem value={"7"}>
            07-รายงาน ค่าเฉลี่ยน้ำหนักรถแยกตามประเภท แบบรายเดือน
          </MenuItem>
          <MenuItem value={"8"}>
            08-รายงาน ค่าเฉลี่ยน้ำหนักรถแยกตามประเภท แบบรายปี
          </MenuItem>
        </Select>
      </FormControl>
    </Section>
  );
}
export default Report_Select;

const Section = styled.section``;
