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
  TablePagination,
  TableRow,
  Chip,
  Button,
  Typography,
  ButtonGroup,
} from "@mui/material";

import HeaderBar from "../components/HeaderBar";
import { FiChevronsLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Report01Modal from "./Report01Modal";
import Loading from "../components/Loading";

import { PhotoProvider, PhotoView } from "react-photo-view";

const columns = [
  { id: "overview", label: "Image", minWidth: 80, maxWidth: 80 },
  { id: "view", label: "View", minWidth: 80, maxWidth: 80 },
  { id: "status", label: "Status", minWidth: 80, maxWidth: 80 },

  { id: "date", label: "วันที่", minWidth: 120, maxWidth: 120 },
  { id: "time", label: "เวลา", minWidth: 80, maxWidth: 90 },
  { id: "license", label: "ทะเบียน", minWidth: 120, maxWidth: 120 },
  { id: "province", label: "จังหวัด", minWidth: 130, maxWidth: 140 },
  { id: "max", label: "พิกัด", minWidth: 80, maxWidth: 80 },
  { id: "gross", label: "น้ำหนัก", minWidth: 80, maxWidth: 80 },
  { id: "lane", label: "Lane", minWidth: 80, maxWidth: 80 },
  { id: "speed", label: "Speed", minWidth: 90, maxWidth: 90 },
  { id: "axle", label: "เพลารวม", minWidth: 90, maxWidth: 90 },
  { id: "type", label: "ประเภท", minWidth: 235, maxWidth: 235 },
];

function Report01() {
  const navigate = useNavigate();
  const receiveData = useLocation();

  const url = "http://127.0.0.1:3001/api/HS_Report01";
  const [getData, setGetData] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sendID, setSendID] = useState("");
  const [sendDataModal, setSendDataModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const customConfig = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  const handleShowModal = (id, row) => {
    setShowModal(true);
    setSendID(id);
    setSendDataModal(row);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

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
      <HeaderBar
        wimType="High Speed Report"
        stationName="สถานีตรวจสอบน้ำหนัก สิงห์บุรี"
      />
      <div className="mainReport">
        <Button
          variant="contained"
          className="btnBack"
          onClick={() => navigate("/report_hsp")}
        >
          <FiChevronsLeft />
          Back
        </Button>

        <div className="mainReportName">
          รายงานข้อมูลรถย้อนหลัง แบบรายคัน
          <Typography variant="subtitle1" gutterBottom mt={1}>
            ข้อมูลวันที่ {receiveData.state.startDateValue} ถึงวันที่{" "}
            {receiveData.state.endDateValue} เวลา{" "}
            {receiveData.state.startTimeValue} -{" "}
            {receiveData.state.endTimeValue}
          </Typography>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
            }}
          >
            <TableContainer sx={{ maxHeight: 1040 }}>
              <Table stickyHeader aria-label="sticky table">
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
                  {getData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      let convertDate = row.Date.substring(0, 10);
                      let convertTime = row.Time.substring(11, 19);
                      let statusWeight;
                      if (row.WeightStatus === "PASS") {
                        statusWeight = "success";
                      } else if (row.WeightStatus === "OVER") {
                        statusWeight = "error";
                      } else {
                        statusWeight = "secondary";
                      }

                      return (
                        <TableRow
                          key={row.WimHeader_ID}
                          hover
                          role="checkbox"
                          tabIndex={-1}
                        >
                          <TableCell>
                            <PhotoProvider>
                              <PhotoView
                                src={`data:image/png;base64,${row.ImageOverview}`}
                              >
                                <img
                                  className="testImg"
                                  src={`data:image/png;base64,${row.ImageOverview}`}
                                  style={{ width: "100px" }}
                                />
                              </PhotoView>
                            </PhotoProvider>
                          </TableCell>
                          <TableCell>
                            <ButtonGroup
                              variant="outlined"
                              aria-label="outlined primary button group"
                              size="small"
                            >
                              <Button
                                variant="outlined"
                                size="small"
                                color="secondary"
                                onClick={() =>
                                  handleShowModal(row.WimHeader_ID, row)
                                }
                              >
                                View
                              </Button>
                              <Button>Print</Button>
                            </ButtonGroup>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={row.WeightStatus}
                              color={statusWeight}
                              variant="contained"
                              size="small"
                              align="center"
                            />
                          </TableCell>
                          <TableCell>{convertDate}</TableCell>
                          <TableCell>{convertTime}</TableCell>
                          <TableCell>{row.LicensePlate_Number}</TableCell>
                          <TableCell>{row.LicensePlate_Province}</TableCell>
                          <TableCell>{row.MaxWeight}</TableCell>
                          <TableCell>{row.Gross}</TableCell>
                          <TableCell>{row.Lane}</TableCell>
                          <TableCell>
                            {Math.round(row.Speed * 0.1)} km/h
                          </TableCell>
                          <TableCell>{row.Sum_Axle} เพลา</TableCell>
                          <TableCell>{row.ClassDetail}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={getData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {showModal && (
              <Report01Modal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                id={sendID}
                data={sendDataModal}
              />
            )}
          </Paper>
        )}
      </div>
    </Section>
  );
}
export default Report01;

const Section = styled.section`
  .mainReport {
    background-color: #ffffff;
    padding-top: 30px;
    margin: 0 5% 5% 5%;
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
