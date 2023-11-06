import styled from "styled-components";
import { Grid, Button, Item } from "@mui/material";
import { useState, useEffect } from "react";
import config from "../assets/NameStation";
import axios from "axios";
import Loading from "./Loading";

function InspecButtonMode() {
  const url = `http://${config.ipBackend}/api/insp_mode`;
  // const url = `http://127.0.0.1:3001/api/insp_mode`;
  const [loading, setLoading] = useState(true);
  const [getData, setGetData] = useState([]);

  const fetchData = () => {
    const updateData = async () => {
      try {
        const res = await axios.get(url);
        console.log(res);
        if (res.status === 200 && res.data) {
          setGetData(res.data[0]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateData();
    console.log("StatusMode : " + getData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const workingMode = () => {
    const urlUpdate = `http://${config.ipBackend}/api/buttonMode/1`;
    const workingAPI = `http://${config.ipBackend}/api/renameWorking`;
    // const workingAPI = "http://127.0.0.1:3001/api/renameWorking";
    // const urlUpdate = `http://127.0.0.1:3001/api/buttonMode/1`;
    try {
      const resp = axios
        .put(urlUpdate, { buttonSelect: "WORKING MODE" })
        .then(fetchData)
        .then(axios.get(workingAPI));
      if (resp.status === 200) {
        console.log("Working Mode Success!");
      }
    } catch (error) {
      console.log(error);
    }
    alert("Working Mode Success");
  };
  const standbyMode = () => {
    const urlUpdate = `http://${config.ipBackend}/api/buttonMode/1`;
    const standByAPI = `http://${config.ipBackend}/api/renameStandBy`;
    // const standByAPI = "http://127.0.0.1:3001/api/renameStandBy";
    // const urlUpdate = `http://127.0.0.1:3001/api/buttonMode/1`;
    try {
      const resp = axios
        .put(urlUpdate, { buttonSelect: "STANDBY MODE" })
        .then(fetchData)
        .then(axios.get(standByAPI));
      if (resp.status === 200) {
        console.log("Standby Mode Success!");
      }
    } catch (error) {
      console.log(error);
    }
    alert("Standby Mode Success");
  };

  if (loading) {
    return (
      <Section>
        <div className="loading">
          <Loading />
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        className="mainPage"
      >
        <Grid item xs={8} sm={8}>
          <Button
            variant="contained"
            className="btn-mode"
            style={{ backgroundColor: "#3A37BF" }}
            onClick={workingMode}
          >
            <h4>Working Mode</h4>
          </Button>
          <Button
            variant="contained"
            className="btn-mode"
            style={{ backgroundColor: "#23ABA4" }}
            onClick={standbyMode}
          >
            <h4>StandBy Mode</h4>
          </Button>
        </Grid>
        <Grid item xs={4} sm={4}>
          <h2 className="modeSelect">{getData.status_text}</h2>
        </Grid>
      </Grid>

      {/* <hr
        style={{
          marginTop: "10px",
          boxShadow: "1px 0px 0px 1px rgba(204,204,204,1)",
        }}
      /> */}
    </Section>
  );
}
export default InspecButtonMode;

const Section = styled.section`
  .mainPage {
    margin-top: 10px;
  }
  .btn-mode {
    margin-left: 3%;
    font-size: 15px;
  }
  .modeSelect {
    color: #2418ab;
  }
  .loading {
    margin-top: 10px;
    padding-bottom: 10px;
    margin-left: 50%;
  }
`;
