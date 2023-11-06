import styled from "@emotion/styled";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import CheckingLine_1 from "./CheckingLine_1";

function CheckingDetail() {
  return (
    <Section className="checking">
      <Grid container spacing={1} mt={2} mr={1} ml={1}>
        <Grid item xs={6}>
          <CheckingLine_1 />
        </Grid>
        <Grid item xs={6}>
          CC
        </Grid>
      </Grid>
    </Section>
  );
}
export default CheckingDetail;

const Section = styled.section``;
