import React from "react";
import styled from "styled-components";
import { PhotoProvider, PhotoView } from "react-photo-view";

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
  createTheme,
  ThemeProvider,
  Stack,
} from "@mui/material";

function LspRealtimeDetail({
  lpr,
  province,
  status_weight,
  status_color,
  image,
  data_date,
  data_time,
  max,
  gross,
  color_weight,
  lane,
  speed,
  axle,
  ex_gross,
  legal_class,
  class_detail,
  id,
  viewMore,
  message,
}) {
  const theme = createTheme({
    typography: {
      // fontFamily: ["Labrada", "sans-serif"].join(","),
    },
  });

  return (
    <Section>
      <ThemeProvider theme={theme}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="realtime-detail">
            <Card
              sx={{
                maxWidth: 340,
                minWidth: 340,
                maxHeight: 370,
                minHeight: 370,
              }}
              key={id}
            >
              <CardHeader
                titleTypographyProps={{ variant: "subtitle1" }}
                title={`${lpr} ${province}`}
                action={
                  <Button size="small" variant="contained" color={status_color}>
                    {status_weight}
                  </Button>
                }
              />
              <PhotoProvider>
                <PhotoView src={image}>
                  <CardMedia
                    component="img"
                    alt="image"
                    height="140"
                    image={image}
                  />
                </PhotoView>
              </PhotoProvider>

              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      color="text.secondary"
                    >
                      {data_date} {data_time}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      color="text.secondary"
                    >
                      Lane {lane}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Max : {max} kg
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      style={{
                        alignItems: "right",
                        color: color_weight,
                      }}
                    >
                      Gw : {gross} kg {ex_gross}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ marginTop: "5px" }}
                    >
                      Speed : {speed} Km/h
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        alignItems: "right",
                        marginTop: "5px",
                      }}
                    >
                      เพลารวม : {axle}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    marginTop: "5px",

                    paddingBottom: "0.1em",
                  }}
                >
                  ประเภท {legal_class} {class_detail}
                </Typography>
              </CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={viewMore}
                      variant="outlined"
                      style={{ marginTop: "-7px" }}
                    >
                      View More
                    </Button>
                  </CardActions>
                </Grid>
                <Grid item xs={6}>
                  <CardActions>
                    <Stack>
                      <Button
                        size="small"
                        onClick={viewMore}
                        variant="contained"
                        color="info"
                        style={{ marginTop: "-7px", marginLeft: "55px" }}
                      >
                        Matching
                      </Button>
                    </Stack>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </div>
        </Grid>
      </ThemeProvider>
    </Section>
  );
}
export default LspRealtimeDetail;

const Section = styled.section`
  .realtime-detail {
    margin-top: 40px;
    &:hover {
      /* transition: 0.5s; */
      transform: scale(1.02);
    }
  }
`;
// const StyledHeader = styled(CardHeader)`
//   height: 46px !important;
//   > div {
//     display: inherit !important;
//     padding-right: 0px !important;
//   }
// `;
