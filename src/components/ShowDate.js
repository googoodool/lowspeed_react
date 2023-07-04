import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

function ShowDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <Section>
      <p>
        ข้อมูลประจำวันที่ {date.toLocaleDateString("en-GB")} -{" "}
        {date.toLocaleTimeString("th-GB")}
      </p>
    </Section>
  );
}
export default ShowDate;

const Section = styled.section`
  p {
    margin-left: 3%;
    margin-top: 10px;
    color: #363636;
  }
`;
