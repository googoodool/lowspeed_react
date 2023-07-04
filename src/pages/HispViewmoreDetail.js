import React from "react";
import styled from "styled-components";
import { Container } from "@mui/system";

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

import PDFdetail from "../reports/PDFdetail";

function HispViewmoreDetail({ data }) {
  const theme = createTheme({
    typography: {},
  });

  const Color = "#ffff";

  const getDate = data.date;
  const splited = getDate.split("/");
  const data_date = splited[1] + "/" + splited[0] + "/" + splited[2];
  const data_time = data.time.slice(0, 8);

  let space_w1 = (data.space_w1 * 0.1).toFixed(1);
  let space_w2 = 0;
  let space_w3 = 0;
  let space_w4 = 0;
  let space_w5 = 0;
  let space_w6 = 0;
  if (data.space_w2 !== "-") {
    space_w2 = (data.space_w2 * 0.1).toFixed(1);
    if (space_w2 < 1) {
      space_w2 = "-";
    }
  } else {
    space_w2 = "-";
  }
  if (data.space_w3 !== "-") {
    space_w3 = (data.space_w3 * 0.1).toFixed(1);
    if (space_w3 < 1) {
      space_w3 = "-";
    }
  } else {
    space_w3 = "-";
  }
  if (data.space_w4 !== "-") {
    space_w4 = (data.space_w4 * 0.1).toFixed(1);
    if (space_w4 < 1) {
      space_w4 = "-";
    }
  } else {
    space_w4 = "-";
  }
  if (data.space_w5 !== "-") {
    space_w5 = (data.space_w5 * 0.1).toFixed(1);
    if (space_w5 < 1) {
      space_w5 = "-";
    }
  } else {
    space_w5 = "-";
  }
  if (data.space_w6 !== "-") {
    space_w6 = (data.space_w6 * 0.1).toFixed(1);
    if (space_w6 < 1) {
      space_w6 = "-";
    }
  } else {
    space_w6 = "-";
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

  // let overImg = "data:image/png;base64," + data.img_overview;
  // let lprImg = "data:image/png;base64," + data.img_lpr;

  // let statusText = "ไม่เกินกฎหมาย";
  // if (data.gross > data.max_weight) {
  //   statusText = "เกินพิกัดกฎหมาย";
  // }

  return (
    <Section>
      <div className="detail">
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl">
            <CardActions>
              <Button
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "10px",
                }}
                variant="contained"
                href="/hispeed"
              >
                Back to page
              </Button>

              <PDFdetail
                buttonText="Export PDF"
                variant="contained"
                color="success"
                data={data}
              />
            </CardActions>

            <div>
              <Card style={{ padding: "10px" }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={`data:image/png;base64,${data.img_overview}`}
                      alt="My Image"
                    />
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
                              <TableCell>{data.flex.toFixed(2)}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ backgroundColor: Color }}>
                                R10/R11
                              </TableCell>
                              <TableCell>
                                {data.rigid10.toFixed(2)} /{" "}
                                {data.rigid11.toFixed(2)}
                              </TableCell>
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
                    <CardMedia
                      component="img"
                      height="300"
                      image={`data:image/png;base64,${data.img_lpr}`}
                      alt="My Image"
                    />
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
                                ระยะห่างเพลา(m.)
                              </TableCell>

                              <TableCell>{space_w1}</TableCell>
                              <TableCell>{space_w2}</TableCell>
                              <TableCell>{space_w3}</TableCell>
                              <TableCell>{space_w4}</TableCell>
                              <TableCell>{space_w5}</TableCell>
                              <TableCell>{space_w6}</TableCell>
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
export default HispViewmoreDetail;

const Section = styled.section``;
