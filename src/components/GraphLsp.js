import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import LspGraphDetail from "./LspGraphDetail";
import Loading from "./Loading";

function GraphLsp({ data }) {
  const url = "http://127.0.0.1:3001/api/LSgraph";
  const [loading, setLoading] = useState(true);
  const [getData, setGetData] = useState([]);

  const fetchData = () => {
    const updateData = async () => {
      try {
        const res = await axios.get(url);
        // console.log(res);
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
    }, 50000);
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
      <LspGraphDetail data={getData} />
    </Section>
  );
}
export default GraphLsp;

const Section = styled.section`
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
  }
`;
