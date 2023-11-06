import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "styled-components";

function InspecHispCard({
  image,
  lpr,
  province,
  max,
  gross,
  statusColor,
  color_weight,
  ex_gross,
  lane,
  date,
  time,
  viewMore_H,
  id,
}) {
  const getDate = date;
  const splited = getDate.split("/");
  const swaped = splited[1] + "/" + splited[0] + "/" + splited[2];
  let data_date = swaped;
  return (
    <Section>
      <div className="Cards">
        <Card
          sx={{
            minWidth: 220,
            maxWidth: 220,
            borderTop: `8px ${statusColor} solid`,
          }}
          onClick={viewMore_H}
          key={id}
        >
          <span style={{ paddingLeft: 5 }}>Lane {lane} </span>
          <CardActionArea>
            <CardMedia component="img" height="120" image={image} />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                {lpr} {province}
              </Typography>
              <Typography variant="body2">
                {data_date} {time.slice(0, 8)}
              </Typography>
              <Typography variant="body2" mt={1}>
                พิกัด : {max} Kg
              </Typography>
              <Typography variant="body2" mt={1} sx={{ color: color_weight }}>
                น้ำหนัก : {gross} Kg {ex_gross}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Section>
  );
}
export default InspecHispCard;

const Section = styled.section`
  .Cards {
    margin-left: 10px;
  }
`;
