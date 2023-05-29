import React from "react";
import styled from "styled-components";
import { Container } from "@mui/system";
import { PhotoProvider, PhotoView } from "react-photo-view";
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

function LspViewmoreDetail({ data }) {
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
            </CardActions>

            <div>
              <Card style={{ padding: "10px" }}>
                <Grid container>
                  <Grid item xs={5}>
                    <PhotoProvider>
                      <PhotoView
                        src={`data:image/png;base64,${data.img_overview}`}
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image={`data:image/png;base64,${data.img_overview}`}
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
                      <PhotoView src={`data:image/png;base64,${data.img_lpr}`}>
                        <CardMedia
                          component="img"
                          height="300"
                          image={`data:image/png;base64,${data.img_lpr}`}
                          alt="My Image"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    \
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
