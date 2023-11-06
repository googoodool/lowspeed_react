import { Grid, Paper, ButtonBase, Typography, Chip } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import styled from "styled-components";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function MatchingDetail({
  lowDate,
  hiDate,
  lowTime,
  hiTime,
  lowLpr,
  lowProvince,
  hiLpr,
  hiProvince,
  lowImage,
  hiImage,
  lowLane,
  lowSpeed,
  hiLane,
  hiSpeed,
  lowClass,
  hiClass,
  lowGross,
  hiGross,
  hiStatus,
  lowStatus,
  chipColorLow,
  chipColorHi,
  lowSpeedClick,
  keyLow,
  keyHi,
  hiSpeedClick,
  overSpeedText,
}) {
  return (
    <Section>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 850,
              flexGrow: 1,
            }}
            onClick={lowSpeedClick}
          >
            <Grid container spacing={2}>
              <Grid item key={keyLow}>
                <PhotoProvider>
                  <PhotoView src={lowImage}>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={lowImage} />
                    </ButtonBase>
                  </PhotoView>
                </PhotoProvider>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {lowLpr} {lowProvince}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      วันที่ {lowDate} เวลา {lowTime}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lane {lowLane} • Speed {lowSpeed} Km/h
                      <span className="overSpeedText">{overSpeedText}</span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      {lowClass}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {lowGross} kg{" "}
                    <Chip
                      label={lowStatus}
                      style={{ backgroundColor: chipColorLow }}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 850,
              flexGrow: 1,
            }}
            onClick={hiSpeedClick}
          >
            <Grid container spacing={2}>
              <Grid item key={keyHi}>
                <PhotoProvider>
                  <PhotoView src={hiImage}>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={hiImage} />
                    </ButtonBase>
                  </PhotoView>
                </PhotoProvider>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {hiLpr} {hiProvince}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      วันที่ {hiDate} เวลา {hiTime}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lane {hiLane} • Speed {hiSpeed} Km/h
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      {hiClass}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {hiGross} kg{" "}
                    <Chip
                      label={hiStatus}
                      style={{ backgroundColor: chipColorHi }}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
}
export default MatchingDetail;

const Section = styled.section`
  .overSpeedText {
    color: red;
  }
`;
