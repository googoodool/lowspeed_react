import React from "react";
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import ShowDate from "../components/ShowDate";
import { Grid } from "@mui/material";
import LspCardTotal from "../components/LspCardTotal";
import LspRealtime from "../components/LspRealtime";

import GraphLsp from "../components/GraphLsp";

function LowSpeed() {
  return (
    <Section>
      <HeaderBar wimType="WIM Low-Speed" />
      <ShowDate />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <LspCardTotal />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <GraphLsp />
        </Grid>
      </Grid>

      <LspRealtime />
    </Section>
  );
}
export default LowSpeed;

const Section = styled.section``;
