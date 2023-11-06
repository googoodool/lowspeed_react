import { Card, CardContent } from "@mui/material";
function InspecCardSmall2({ data, text }) {
  return (
    <div>
      <Card
        sx={{ borderRadius: 2, minWidth: 120, maxWidth: 150, maxHeight: 110 }}
      >
        <CardContent>
          <p
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
              marginTop: "-2px",
            }}
          >
            {text}
          </p>

          <p
            style={{
              color: "#441DE0",
              fontWeight: "bolder",
              fontSize: 45,
              textAlign: "center",
            }}
          >
            {data}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
export default InspecCardSmall2;
