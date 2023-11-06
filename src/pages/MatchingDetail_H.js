import React from "react";
import HispViewmoreDetail from "./HispViewmoreDetail";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import config from "../assets/NameStation";

function MatchingDetail_H({}) {
  const receiveData = useLocation();
  const queryID = parseInt(receiveData.state.id);

  const url = `http://${config.ipBackend}/api/HSviewmore/`;
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    const updateData = async () => {
      try {
        const res = await axios.get(url + queryID);

        if (res.status === 200 && res.data) {
          setLoading(false);
          setGetData(res.data);
        }
      } catch (error) {
        console.log("axios viewMore page error " + error);
      }
    };
    updateData();
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Section>
        <Loading />
      </Section>
    );
  }

  return (
    <>
      <HispViewmoreDetail data={getData} linkBack="/" />
    </>
  );
}
export default MatchingDetail_H;

const Section = styled.section`
  .realtime-body {
    margin-left: 2%;
  }
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
  }
`;
