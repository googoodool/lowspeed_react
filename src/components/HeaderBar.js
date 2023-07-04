import React from "react";
import styled from "styled-components";
import { Typography, Container, Grid, Box } from "@mui/material";

function HeaderBar({ wimType }) {
  return (
    <Section>
      <div className="section">
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={6}>
                <h3 className="header-text">{wimType}</h3>
              </Grid>

              <Grid item xs={6} align="right">
                <div className="station">
                  <Typography align="right" component={"span"}>
                    <span>สถานีตรวจสอบน้ำหนัก สิงห์บุรี</span>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </Section>
  );
}
export default HeaderBar;

const Section = styled.section`
  .section {
    font-family: "Kanit", sans-serif;
    background-color: var(--headerBarBackground);
    height: 40px;
    border-bottom-style: inset;
    border-bottom-width: 2px;
    .station {
      margin-top: 7px;
    }
  }
  .header-text {
    margin-top: 3px;
    font-family: "Labrada", serif;
    color: var(--mainColor);
  }
`;
