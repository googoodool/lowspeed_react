import styled from "styled-components";
import { Grid } from "@mui/material";
import InspecPic from "./InspecPic";
import InspecData from "./InspecData";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import config from "../assets/NameStation";
import { useNavigate } from "react-router-dom";

function InspecMainPage() {
  const url = `http://${config.ipBackend}/api/insp_lsp`;
  // const url = `http://127.0.0.1:3001/api/insp_lsp`;
  const [loading, setLoading] = useState(true);
  const [getData, setGetData] = useState([]);

  const navigate = useNavigate();

  const viewMore = (id) => {
    navigate("/insp_low", { state: { id: id } });
  };

  const fetchData = () => {
    const updateData = async () => {
      try {
        const res = await axios.get(url);
        // console.log(res);
        if (res.status === 200 && res.data) {
          setGetData(res.data[0]);
          setLoading(false);
          console.log(getData.id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateData();
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <h3 className="HeaderPage">LOW SPEED CHECKPOINT</h3>
      <hr style={{ marginLeft: 280, marginTop: "-13px" }} />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        className="mainPage"
      >
        <Grid item xs={6}>
          <InspecPic overView={getData.img_overview} lpr={getData.img_lpr} />
        </Grid>
        <Grid item xs={6} style={{ marginTop: "25px", paddingRight: "1px" }}>
          <InspecData getData={getData} viewMore={() => viewMore(getData.id)} />
        </Grid>
      </Grid>
    </Section>
  );
}
export default InspecMainPage;

const Section = styled.section`
  .mainPage {
    padding: 0.3%;
    margin-top: -20px;
  }
  .HeaderPage {
    text-align: "center";
    margin-left: 30px;
    margin-top: 18px;
  }
  .loading {
    margin-top: 100px;
    padding-bottom: 100px;
    margin-left: 50%;
  }
`;
