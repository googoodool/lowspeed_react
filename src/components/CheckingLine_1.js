import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

function CheckingLine_1() {
  return (
    <Section>
      <Grid container xs={12} spacing={1}>
        <Grid item xs={7} sm={5}>
          <Card
            sx={{ minWidth: 200, maxHeight: 80, backgroundColor: "lightgrey" }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 14,
                  borderBottom: "solid 2px black",
                  fontWeight: "bold",
                }}
                variant="button"
                display="block"
              >
                2023-07-07
                <Typography
                  sx={{
                    fontSize: 18,
                    display: "inline-block",
                    paddingLeft: 2,
                    color: "#234A89",
                    fontWeight: "bold",
                  }}
                  color="text.primary"
                >
                  11:22:33
                </Typography>
              </Typography>
              <Typography sx={{ fontSize: 12, paddingTop: 1 }}>
                Lane1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={6}>
          <Card
            sx={{
              minWidth: 150,
              maxWidth: 200,
              minHeight: 80,
              maxHeight: 80,
              backgroundColor: "#198913",
              color: "#ffffff",
              marginLeft: "10px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: "bold",
                  paddingTop: "13px",
                  display: "inline-block",
                }}
                variant="button"
                display="block"
              >
                Status :
              </Typography>
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: "bold",
                  paddingTop: "-13px",
                  paddingLeft: "13px",
                  display: "inline-block",
                }}
                variant="button"
                display="block"
              >
                PASS
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
      </Grid>
    </Section>
  );
}
export default CheckingLine_1;

const Section = styled.section``;
