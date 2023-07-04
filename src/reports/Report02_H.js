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

import Loading from "../components/Loading";
import Report02PDF_H from "./Report02PDF_H";

const columns = [
  { id: "type", label: "ประเภท", minWidth: 80, maxWidth: 80, align: "center" },
  {
    id: "truckType",
    label: "ประเภทรถ",
    minWidth: 250,
    maxWidth: 250,
    align: "center",
  },
  {
    id: "status",
    label: "จำนวนเพลา",
    minWidth: 120,
    maxWidth: 120,
    align: "center",
  },

  {
    id: "date",
    label: "พิกัดน้ำหนัก(kg)",
    minWidth: 170,
    maxWidth: 170,
    align: "center",
  },
  {
    id: "time",
    label: "จำนวนรถ(คัน)",
    minWidth: 120,
    maxWidth: 120,
    align: "center",
  },
  {
    id: "license",
    label: "% รถบรรทุก แต่ละประเภท",
    minWidth: 150,
    maxWidth: 150,
    align: "center",
  },
  {
    id: "province",
    label: "จำนวนรถ ผ่านได้ (คัน)",
    minWidth: 150,
    maxWidth: 150,
    align: "center",
  },
  {
    id: "max",
    label: "% รถที่ผ่านได้ ",
    minWidth: 150,
    maxWidth: 150,
    align: "center",
  },
  {
    id: "gross",
    label: "จำนวนรถ นน.เกิน หรือมีข้อผิดพลาดอื่น (คัน)",
    minWidth: 200,
    maxWidth: 200,
    align: "center",
  },
  {
    id: "lane",
    label: "% รถที่ นน.เกิน หรือมีข้อผิดพลาดอื่น",
    minWidth: 200,
    maxWidth: 200,
    align: "center",
  },
];

function Report02_H() {
  const navigate = useNavigate();
  const receiveData = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://127.0.0.1:3001/api/HS_Report02";
  const [getData, setGetData] = useState([]);
  let sumTotal = 0;
  let sumPass = 0;

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
          console.log(getData);
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
        <Report02PDF_H
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
          รายงานรถแยกตามประเภท และผลคัดกรอง
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
            <TableContainer sx={{ maxHeight: 1040, maxWidth: 1800 }}>
              <Table aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
                          backgroundColor: "#E4DFCA",
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
                    let notPassCount = row.OVER_Count + row.ERROR_Count;
                    sumTotal = sumTotal + row.total;
                    sumPass = sumPass + row.PASS_Count;

                    return (
                      <TableRow key={row.type} hover>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.type}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.class_detail}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.sum_axle} เพลา
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.max_weight}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.total}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.all_avg}%
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.PASS_Count}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.Per_Pass}%
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {notPassCount}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Typography variant="subtitle2">
                            {row.Per_Over}%
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow sx={{ backgroundColor: "#F1EDD7" }}>
                    <TableCell></TableCell>
                    <TableCell sx={{ textAlign: "right", fontWeight: "900" }}>
                      SUM
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell sx={{ textAlign: "center", fontWeight: "900" }}>
                      {sumTotal} คัน
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontWeight: "900" }}>
                      100%
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontWeight: "900" }}>
                      {sumPass} คัน
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontWeight: "900" }}>
                      {Math.round((sumPass * 100) / sumTotal, 2)}%
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontWeight: "900",
                        color: "red",
                      }}
                    >
                      {sumTotal - sumPass} คัน
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontWeight: "900",
                        color: "red",
                      }}
                    >
                      {100 - Math.round((sumPass * 100) / sumTotal, 2)}%
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </div>
    </Section>
  );
}
export default Report02_H;

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
