import styled from "styled-components";
import { Grid } from "@mui/material";
import MatchingDetail from "./MatchingDetail";
import { useState, useEffect } from "react";
import config from "../assets/NameStation";
import axios from "axios";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function MatchingWim({ lowDate, lowTime, hiDate, hiTime }) {
  const url = `http://${config.ipBackend}/api/Matching_real`;
  const [loading, setLoading] = useState(true);
  const [getData, setGetData] = useState([]);

  const navigate = useNavigate();

  const lowClick = (id) => {
    navigate("/matching_low", { state: { id: id } });
  };
  const hiClick = (id) => {
    navigate("/matching_hi", { state: { id: id } });
  };

  const fetchData = () => {
    const updateData = async () => {
      try {
        const res = await axios.get(url);

        if (res.status === 200 && res.data) {
          setGetData(res.data);
          setLoading(false);
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
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Section>
        <Loading />
      </Section>
    );
  }
  return (
    <Section>
      <Grid container spacing={3} mt={0.1}>
        {getData.map((res) => {
          let chipColorLow = "#82E0AA";
          let chipColorHi = "#82E0AA";
          const getDate = res.lowDate;
          const splited = getDate.split("/");
          const swaped = splited[1] + "/" + splited[0] + "/" + splited[2];
          let dataLowDate = swaped;
          let overSpeedText = "";

          const getDateHi = res.hiDate;
          const splitedHi = getDateHi.split("/");
          const swapedHi =
            splitedHi[1] + "/" + splitedHi[0] + "/" + splitedHi[2];
          let dataHiDate = swapedHi;
          if (res.lowStatus === "ERROR") {
            chipColorLow = "#F9E79F";
            overSpeedText = "  (OVER SPEED)";
          }
          if (res.lowStatus === "OVER") {
            res.lowStatus = "Warning";
            chipColorLow = "#F1948A";
          }
          if (res.hiStatus === "ERROR") {
            chipColorHi = "#F9E79F";
          }
          if (res.hiStatus === "OVER") {
            res.hiStatus = "Warning";
            chipColorHi = "#F1948A";
          }

          return (
            <Grid item xs={12}>
              <MatchingDetail
                keyLow={res.lowID}
                keyHi={res.hiID}
                lowDate={dataLowDate}
                lowTime={res.lowTime}
                hiDate={dataHiDate}
                hiTime={res.hiTime.slice(0, 8)}
                lowLpr={res.lowLpr}
                hiLpr={res.hiLpr}
                lowProvince={res.lowProvince}
                hiProvince={res.hiProvince}
                lowImage={`data:image/png;base64,${res.lowOver}`}
                hiImage={`data:image/png;base64,${res.hiOver}`}
                lowLane={res.lowLane}
                lowSpeed={res.lowSpeed}
                hiLane={res.hiLane}
                hiSpeed={Math.round(res.hiSpeed * 0.1)}
                lowClass={res.lowClass}
                hiClass={res.hiClass}
                lowGross={res.lowGross}
                hiGross={res.hiGross}
                lowStatus={res.lowStatus}
                hiStatus={res.hiStatus}
                chipColorLow={chipColorLow}
                chipColorHi={chipColorHi}
                lowSpeedClick={() => lowClick(res.lowID)}
                hiSpeedClick={() => hiClick(res.hiID)}
                overSpeedText={overSpeedText}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
export default MatchingWim;

const Section = styled.section`
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
  }
`;
