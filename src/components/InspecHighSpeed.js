import styled from "styled-components";
import InspecHispCard from "./InspecHispCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import config from "../assets/NameStation";

function InspecHighSpeed() {
  // const url = "http://127.0.0.1:3001/api/insp_hisp";
  const url = `http://${config.ipBackend}/api/insp_hisp`;
  const [loading, setLoading] = useState(true);
  const [getData, setGetData] = useState([]);

  const navigate = useNavigate();

  const viewMore = (id) => {
    navigate("/insp_hi", { state: { id: id } });
  };

  const fetchData = () => {
    const updateData = async () => {
      try {
        const res = await axios.get(url);

        if (res.status === 200 && res.data) {
          setGetData(res.data);
          // console.log(getData);
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
      <div>
        <h3 style={{ color: "#000000" }}>HIGH SPEED CHECKPOINT</h3>
        <hr />
        <div className="mainHisp">
          {getData.map((res) => {
            let status_color = "#4AD848";

            if (res.status_weight === "OVER") {
              status_color = "#F7362D";
            }
            if (res.status_weight === "ERROR") {
              status_color = "#DE8308";
            }
            let ex_gross = "";
            let color_weight = "blue";
            if (parseInt(res.gross) > parseInt(res.max_weight)) {
              const exg =
                ((parseInt(res.gross) - parseInt(res.max_weight)) * 100) /
                parseInt(res.gross);
              ex_gross = `+${exg.toString().slice(0, 3)}%`;
              color_weight = "red";
            }
            return (
              <InspecHispCard
                image={`data:image/png;base64,${res.img_overview}`}
                lpr={res.lpr_number ? res.lpr_number : "-"}
                province={res.province}
                max={res.max_weight}
                gross={res.gross}
                statusColor={status_color}
                color_weight={color_weight}
                ex_gross={ex_gross}
                lane={res.lane}
                date={res.date}
                time={res.time}
                id={res.id}
                viewMore_H={() => viewMore(res.id)}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
export default InspecHighSpeed;

const Section = styled.section`
  h3 {
    margin-left: 30px;
    margin-top: -25px;
  }
  hr {
    margin-left: 280px;
    margin-top: -13px;
  }
  .mainHisp {
    margin-left: 1%;
    margin-top: 1%;
    display: flex;
    border-radius: 6px;
    color: #333;
    background: #eee;
    padding: 10px;
    /* box-shadow: 0 0 1px #055 inset; */
    overflow-x: auto;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .loading {
    margin-top: 100px;
    padding-bottom: 100px;
    margin-left: 50%;
  }
`;
