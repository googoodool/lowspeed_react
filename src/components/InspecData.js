import styled from "styled-components";
import { Grid, Card, CardContent, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import FitbitIcon from "@mui/icons-material/Fitbit";
import RuleIcon from "@mui/icons-material/Rule";
import InspecCardSmall from "./InspecCardSmall";
import InspecCardSmall2 from "./InspecCardSmall2";
import InspecCardSmall3 from "./InspecCardSmall3";

function InspecData({ getData, viewMore }) {
  let statusWeight = getData.status_weight;

  let statusText = "PASS";
  var colorStatus = "green";

  if (statusWeight === "OVER") {
    statusText = "WARNING";
    colorStatus = "#C13918";
  }
  if (statusWeight === "ERROR") {
    statusText = "OVER SPEED";
    colorStatus = "#B918C1";
  }

  const getDate = getData.date;
  const splited = getDate.split("/");
  const swaped = splited[1] + "/" + splited[0] + "/" + splited[2];
  let data_date = swaped;

  let overLoad = 0;
  if (parseInt(getData.gross) > parseInt(getData.max_weight)) {
    overLoad = (
      ((parseInt(getData.gross) - parseInt(getData.max_weight)) * 100) /
      parseInt(getData.gross)
    ).toFixed(1);
  }

  return (
    <Section className="sectionClass">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3} mt={2}>
          <InspecCardSmall
            icon={<FitbitIcon sx={{ fontSize: 30, color: "black" }} />}
            text="ID"
            data={getData.id}
          />
        </Grid>
        <Grid item xs={3} mt={2}>
          <InspecCardSmall
            icon={<AspectRatioIcon sx={{ fontSize: 30, color: "black" }} />}
            text="ทะเบียน"
            data={getData.lpr_number ? getData.lpr_number : "-"}
          />
        </Grid>
        <Grid item xs={3} mt={2}>
          <InspecCardSmall
            icon={<ViewTimelineIcon sx={{ fontSize: 30, color: "black" }} />}
            text="จังหวัด"
            data={getData.province ? getData.province : "-"}
          />
        </Grid>
        <Grid item xs={3} mt={2}>
          <Card
            sx={{
              borderRadius: 2,
              minWidth: 120,
              maxWidth: 150,
              maxHeight: 110,
              // backgroundColor: "#76EAB0",
            }}
          >
            <CardContent>
              <div style={{ textAlign: "center" }}>
                <RuleIcon sx={{ fontSize: 30, color: "black" }} />
              </div>

              <p
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Status
              </p>

              <p
                style={{
                  color: colorStatus,
                  fontWeight: "bolder",
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                {statusText}
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3} mt={2}>
          <InspecCardSmall
            icon={<CalendarMonthIcon sx={{ fontSize: 30, color: "black" }} />}
            text="วันที่"
            data={data_date}
          />
        </Grid>
        <Grid item xs={3} mt={2}>
          <InspecCardSmall
            icon={
              <AccessTimeRoundedIcon sx={{ fontSize: 30, color: "black" }} />
            }
            text={"เวลา"}
            data={getData.time}
          />
        </Grid>
        <Grid item xs={3} mt={2}>
          <InspecCardSmall
            icon={<SpeedIcon sx={{ fontSize: 30, color: "black" }} />}
            text="ความเร็ว"
            data={`${getData.speed} Km/h`}
          />
        </Grid>
        <Grid item xs={3} mt={2}>
          <InspecCardSmall2 text="เพลารวม" data={getData.axle_sum} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        mt={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={3}>
          <InspecCardSmall
            icon={<SecurityIcon sx={{ fontSize: 30, color: "black" }} />}
            text="พิกัด"
            data={`${getData.max_weight} Kg`}
          />
        </Grid>
        <Grid item xs={3}>
          <InspecCardSmall
            icon={<LocalShippingIcon sx={{ fontSize: 30, color: "black" }} />}
            text="น้ำหนัก"
            data={`${getData.gross} Kg`}
          />
        </Grid>
        <Grid item xs={3}>
          <InspecCardSmall3 text="Overload" data={`${overLoad}%`} />
        </Grid>
        <Grid item xs={3} mt={8}>
          <div>
            <Button
              variant="contained"
              size="large"
              sx={{
                minWidth: 120,
                backgroundColor: "orange",
                color: "black",
                fontWeight: "bolder",
              }}
              onClick={viewMore}
            >
              รายละเอียด
            </Button>
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}
export default InspecData;

const Section = styled.section`
  .loading {
    display: block;
    margin-top: 200px;
    margin-left: 200px;
  }
`;
