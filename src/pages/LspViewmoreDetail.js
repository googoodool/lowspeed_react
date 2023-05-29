import React from "react";
import styled from "styled-components";
import { Container } from "@mui/system";
import { PhotoProvider, PhotoView } from "react-photo-view";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Card,
  CardMedia,
  createTheme,
  ThemeProvider,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Grid,
  Button,
  CardActions,
} from "@mui/material";
import Logo from "../assets/logo.png";
import "../assets/Sarabun-Regular-normal";
import "../assets/Sarabun-Light-normal";
import "../assets/Prompt-Regular-normal";

function LspViewmoreDetail({ data }) {
  const generatePDF = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();
    var dateTime = date + "-" + time;

    const doc = new jsPDF();
    // Header
    doc.addImage(Logo, "PNG", 180, 8, 17, 17); // Add your logo image
    doc.setFont("Sarabun-Regular");
    doc.setFontSize(10);
    doc.setTextColor("#77787B");
    doc.text("รายงานตรวจสอบนำ้หนักรถบรรทุก โดยระบบ WEIGHT IN MOTION", 15, 14);
    doc.text("สำนักงานควบคุมนำ้หนักยานพาหนะ กรมทางหลวง", 15, 19); // Add your header text
    doc.text("สถานีตรวจสอบน้ำหนัก สิงห์บุรี", 15, 24);
    doc.setLineWidth(0.7);
    doc.line(15, 28, 197, 28);
    doc.setLineWidth(0.3);
    doc.line(15, 29, 197, 29);

    doc.setFont("Prompt-Regular");
    doc.setFontSize(11);
    doc.setTextColor("#00000");
    doc.text("ภาพถ่ายรถบรรทุก", 105, 42, "center");
    doc.setFontSize(10);
    doc.text("Overview", 50, 53);
    doc.text("LPR", 145, 53);

    doc.addImage(overImg, "PNG", 15, 57, 85, 55);
    doc.addImage(lprImg, "PNG", 110, 57, 85, 55);

    doc.text("ข้อมูลรถบรรทุกจากระบบ WIM", 83, 130);

    autoTable(doc, {
      startY: 140,
      didParseCell: function (data) {
        var cell = data.cell;
        cell.styles.font = "Sarabun-Regular";
      },
      head: [["รายการ", "ข้อมูลจากระบบ WIM", "รายการ", "ข้อมูลจากระบบ WIM"]],
      body: [
        ["วันที่", data_date, "เวลา", data_time],
        [
          "ช่องจราจร",
          "เลน " + data.lane,
          "ความเร็ว",
          Math.round(data.speed * 0.1) + " Km/H",
        ],
        [
          "ประเภทรถ",
          data.legal_class + " - " + data.class_detail,
          "ป้ายทะเบียน",
          data.lpr_number + " " + data.province,
        ],
        ["จํานวนเพลา", data.sum_axle + " เพลา", "สถานะ", statusText],
        ["น้ําหนักพิกัดกฎหมาย", data.max_weight + " Kg", "ESAL Flexible", 10],
        [
          "น้ําหนักรถบรรทุก",
          data.gross + " Kg",
          "ESAL Regid10 / Regid11",
          10 + " / " + 10,
        ],
      ],
    });

    doc.text("ตารางแสดงข้อมูลเพลารถบรรทุก", 83, 208);

    autoTable(doc, {
      startY: 215,

      didParseCell: function (data) {
        var cell = data.cell;
        cell.styles.font = "Sarabun-Regular";
      },
      columnStyles: {
        0: { columnWidth: 45 },
        1: { columnWidth: 20 },
        2: { columnWidth: 20 },
        3: { columnWidth: 20 },
        4: { columnWidth: 20 },
        5: { columnWidth: 19 },
        6: { columnWidth: 19 },
        7: { columnWidth: 19 },
      },
      head: [["เพลา", "1", "2", "3", "4", "5", "6", "7"]],
      body: [
        [
          "น้ําหนักเพลา (Kg)",
          data.sum_w1,
          data.sum_w2,
          data.sum_w3,
          data.sum_w4,
          data.sum_w5,
          data.sum_w6,
          data.sum_w7,
        ],
      ],
    });

    autoTable(doc, {
      startY: 240,
      columnStyles: {
        0: { columnWidth: 45 },
        1: { columnWidth: 20 },
        2: { columnWidth: 20 },
        3: { columnWidth: 20 },
        4: { columnWidth: 20 },
        5: { columnWidth: 19 },
        6: { columnWidth: 19 },
        7: { columnWidth: 19 },
      },
      didParseCell: function (data) {
        var cell = data.cell;
        cell.styles.font = "Sarabun-Regular";
      },

      head: [["เพลา", "1", "2", "3", "4", "5", "6", "7"]],
      body: [
        [
          "ระยะห่างระหว่างเพลา (cm)",
          data.space_w1,
          data.space_w2,
          data.space_w3,
          data.space_w4,
          data.space_w5,
          data.space_w6,
          "-",
        ],
      ],
    });

    doc.save("Report " + dateTime + ".pdf");
  };

  const theme = createTheme({
    typography: {},
  });

  const Color = "#ffff";

  const getDate = data.date;
  const splited = getDate.split("/");
  const data_date = splited[1] + "/" + splited[0] + "/" + splited[2];
  const data_time = data.time.slice(0, 8);

  if (data.space_w2 === "0") {
    data.space_w2 = "-";
  }
  if (data.space_w3 === "0") {
    data.space_w3 = "-";
  }
  if (data.space_w4 === "0") {
    data.space_w4 = "-";
  }
  if (data.space_w5 === "0") {
    data.space_w5 = "-";
  }
  if (data.space_w6 === "0") {
    data.space_w6 = "-";
  }

  if (data.sum_w3 === "0") {
    data.sum_w3 = "-";
  }
  if (data.sum_w4 === "0") {
    data.sum_w4 = "-";
  }
  if (data.sum_w5 === "0") {
    data.sum_w5 = "-";
  }
  if (data.sum_w6 === "0") {
    data.sum_w6 = "-";
  }
  if (data.sum_w7 === "0") {
    data.sum_w7 = "-";
  }
  let overImg = "data:image/png;base64," + data.img_overview;
  let lprImg = "data:image/png;base64," + data.img_lpr;

  let statusText = "ไม่เกินกฎหมาย";
  if (data.gross > data.max_weight) {
    statusText = "เกินพิกัดกฎหมาย";
  }

  return (
    <Section>
      <div className="detail">
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl">
            <CardActions>
              <Button
                style={{ marginTop: "10px", marginBottom: "10px" }}
                variant="contained"
                href="/lowspeed"
              >
                Back to page
              </Button>
              <Button
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "10px",
                }}
                variant="contained"
                color="success"
                onClick={generatePDF}
              >
                Export PDF
              </Button>
            </CardActions>

            <div>
              <Card style={{ padding: "10px" }}>
                <Grid container>
                  <Grid item xs={5}>
                    <PhotoProvider>
                      <PhotoView src={overImg}>
                        <CardMedia
                          component="img"
                          height="300"
                          image={overImg}
                          alt="My Image"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </Grid>
                  <Grid item xs={3} container style={{ padding: "10px" }}>
                    <Grid item xs={12}>
                      <TableContainer xs={{ fontSize: 16 }}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                Date Time
                              </TableCell>
                              <TableCell>
                                {data_date} {data_time}
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                Lane
                              </TableCell>
                              <TableCell>{data.lane}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                Speed
                              </TableCell>
                              <TableCell>
                                {Math.round(data.speed * 0.1)} Km/h
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                ESAL Flexible
                              </TableCell>
                              <TableCell>12.3</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                R10/R11
                              </TableCell>
                              <TableCell>12.3 / 234</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} container style={{ padding: "10px" }}>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ backgroundColor: Color }}>
                              ทะเบียน
                            </TableCell>
                            <TableCell>
                              {data.lpr_number} {data.province}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell sx={{ backgroundColor: Color }}>
                              พิกัด
                            </TableCell>
                            <TableCell>{data.max_weight} Kg.</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ backgroundColor: Color }}>
                              น้ำหนัก
                            </TableCell>
                            <TableCell>{data.gross} Kg.</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ backgroundColor: Color }}>
                              เพลารวม
                            </TableCell>
                            <TableCell>{data.sum_axle} เพลา</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ backgroundColor: Color }}>
                              ประเภท
                            </TableCell>
                            <TableCell>
                              {data.legal_class} - {data.class_detail}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Card>
            </div>
            <br />
            <div>
              <Card style={{ padding: "10px" }}>
                <Grid container>
                  <Grid item xs={5}>
                    <PhotoProvider>
                      <PhotoView src={lprImg}>
                        <CardMedia
                          component="img"
                          height="300"
                          image={lprImg}
                          alt="My Image"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </Grid>
                  <Grid item xs={7} container style={{ padding: "10px" }}>
                    <Grid item xs={12}>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                เพลาที่
                              </TableCell>
                              <TableCell>1</TableCell>
                              <TableCell>2</TableCell>
                              <TableCell>3</TableCell>
                              <TableCell>4</TableCell>
                              <TableCell>5</TableCell>
                              <TableCell>6</TableCell>
                              <TableCell>7</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                ระยะห่างเพลา(cm.)
                              </TableCell>

                              <TableCell>{data.space_w1}</TableCell>
                              <TableCell>{data.space_w2}</TableCell>
                              <TableCell>{data.space_w3}</TableCell>
                              <TableCell>{data.space_w4}</TableCell>
                              <TableCell>{data.space_w5}</TableCell>
                              <TableCell>{data.space_w6}</TableCell>
                              <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                น้ำหนักเพลา(Kg.)
                              </TableCell>
                              <TableCell>{data.sum_w1}</TableCell>
                              <TableCell>{data.sum_w2}</TableCell>
                              <TableCell>{data.sum_w3}</TableCell>
                              <TableCell>{data.sum_w4}</TableCell>
                              <TableCell>{data.sum_w5}</TableCell>
                              <TableCell>{data.sum_w6}</TableCell>
                              <TableCell>{data.sum_w7}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </div>
          </Container>
        </ThemeProvider>
      </div>
    </Section>
  );
}
export default LspViewmoreDetail;

const Section = styled.section``;
