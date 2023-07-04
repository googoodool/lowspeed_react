import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import ShowDate from "../components/ShowDate";
import HispCardTotal from "../components/HispCardTotal";
import GraphHisp from "../components/GraphHisp";
import HispRealtime from "../components/HispRealtime";

function Hispeed() {
  return (
    <Section>
      <HeaderBar wimType="WIM Hi-Speed" />
      <ShowDate />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <HispCardTotal />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <GraphHisp />
        </Grid>
      </Grid>

      <HispRealtime />
      <br />
      <br />
    </Section>
  );
}
export default Hispeed;

const Section = styled.section`
  .realtime {
    margin: 1%;
    margin-left: 1%;
  }
`;
