import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LspGraphDetail({ data }) {
  return (
    <Section>
      <div className="chart">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="legal_class" tick={{ fontSize: 17 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="TOTAL"
              fill="#1989A7"
              name="จำนวนรถทั้งหมด"
              type="monotone"
              stackId="a"
            />
            <Bar
              dataKey="OVER_Count"
              stackId="a"
              fill="#db2b39"
              name="จำนวนน้ำหนักเกินกฎหมาย"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
export default LspGraphDetail;

const Section = styled.section`
  .chart {
    height: 70%;
    margin: 2%;
    background-color: var(--cardBackgroundColor);
    .recharts-default-tooltip {
      background-color: var(--textColor) !important;
      border-color: black !important;
    }
  }
`;
