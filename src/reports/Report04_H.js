import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import HeaderBar from "../components/HeaderBar";
import { FiChevronsLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Report04PDF_H from "./Report04PDF_H";

import Loading from "../components/Loading";

const columns = [
  { id: "year", label: "ปี", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "month", label: "เดือน", minWidth: 80, maxWidth: 80, align: "center" },

  { id: "2", label: "2", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "3", label: "3", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "4", label: "4", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "5", label: "5", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "6", label: "6", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "7", label: "7", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "8", label: "8", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "9.1", label: "9.1", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "9.2", label: "9.2", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "9.3", label: "9.3", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "9.4", label: "9.4", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "10", label: "10", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "11", label: "11", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "12", label: "12", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "13", label: "13", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "14", label: "14", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "15", label: "15", minWidth: 80, maxWidth: 80, align: "center" },
  { id: "total", label: "รวม", minWidth: 90, maxWidth: 90, align: "center" },
];

function Report04_H() {
  const navigate = useNavigate();
  const receiveData = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://127.0.0.1:3001/api/HS_Report04";
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          url,
          {
            params: {
              dateFrom: receiveData.state.startDateValue,
              timeFrom: receiveData.state.startTimeValue,
              dateTo: receiveData.state.endDateValue,
              timeTo: receiveData.state.endTimeValue,
            },
          }
          // customConfig
        );
        if (res.status === 200 && res.data) {
          setGetData(res.data);

          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [
    receiveData.state.startDateValue,
    receiveData.state.startTimeValue,
    receiveData.state.endDateValue,
    receiveData.state.endTimeValue,
  ]);
  return (
    <Section>
      <HeaderBar wimType="High Speed Report" />
      <div className="mainReport">
        <Button
          variant="contained"
          className="btnBack"
          color="info"
          onClick={() => navigate("/report_hsp")}
        >
          <FiChevronsLeft />
          Back
        </Button>
        <Report04PDF_H
          variant="contained"
          color="secondary"
          buttonText="Export To PDF"
          data={getData}
          startDate={receiveData.state.startDateValue}
          endDate={receiveData.state.endDateValue}
          startTime={receiveData.state.startTimeValue}
          endTime={receiveData.state.endTimeValue}
        />
        <div className="mainReportName">
          รายงาน ปริมาณรถแยกตามประเภท แบบรายเดือน
          <Typography variant="subtitle1" gutterBottom mt={1}>
            ข้อมูลวันที่ {receiveData.state.startDateValue} ถึงวันที่{" "}
            {receiveData.state.endDateValue} เวลา{" "}
            {receiveData.state.startTimeValue} -{" "}
            {receiveData.state.endTimeValue}
          </Typography>
        </div>
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      align="center"
                      style={{
                        backgroundColor: "#D0CCA9",
                        border: "solid 1px white",
                      }}
                    >
                      ช่วงเวลา
                    </TableCell>
                    <TableCell
                      colSpan={18}
                      align="center"
                      style={{
                        backgroundColor: "#D0CCA9",
                        border: "solid 1px white",
                      }}
                    >
                      ประเภทรถ (คัน)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
                          backgroundColor: "#EBE9CE",
                          border: "solid 1px white",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getData.map((row) => {
                    let Month = "";
                    if (row.Month === 1) {
                      Month = "มกราคม";
                    }
                    if (row.Month === 2) {
                      Month = "กุมภาพันธ์";
                    }
                    if (row.Month === 3) {
                      Month = "มีนาคม";
                    }
                    if (row.Month === 4) {
                      Month = "เมษายน";
                    }
                    if (row.Month === 5) {
                      Month = "พฤษภาคม";
                    }
                    if (row.Month === 6) {
                      Month = "มิถุนายน";
                    }
                    if (row.Month === 7) {
                      Month = "กรกฎาคม";
                    }
                    if (row.Month === 8) {
                      Month = "สิงหาคม";
                    }
                    if (row.Month === 9) {
                      Month = "กันยายน";
                    }
                    if (row.Month === 10) {
                      Month = "ตุลาคม";
                    }
                    if (row.Month === 11) {
                      Month = "พฤศจิกายน";
                    }
                    if (row.Month === 12) {
                      Month = "ธันวาคม";
                    }
                    return (
                      <TableRow key={row.Date} hover>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.Year}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">{Month}</Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class2}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class3}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class4}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class5}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class6}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class7}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class8}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class91}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class92}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class93}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class94}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class10}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class11}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class12}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class13}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class14}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.class15}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">
                            {row.Total_Month}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </div>
    </Section>
  );
}
export default Report04_H;

const Section = styled.section`
  .mainReport {
    background-color: #ffffff;
    padding-top: 30px;
    margin: 0 5% 5% 5%;
    z-index: -1;
  }
  .mainReportName {
    text-align: center;
    font-size: 1.4rem;
    color: #2869a6;
    padding-bottom: 50px;
  }
  .btnBack {
    margin-left: 1%;
    margin-bottom: 10px;
  }
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
