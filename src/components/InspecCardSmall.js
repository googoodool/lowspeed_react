import { Card, CardContent } from "@mui/material";
function InspecCardSmall({ icon, text, data }) {
  return (
    <div>
      <Card
        sx={{
          borderRadius: 2,
          minWidth: 120,
          maxWidth: 150,
          maxHeight: 110,
        }}
      >
        <CardContent>
          <div style={{ textAlign: "center" }}>{icon}</div>

          <p
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {text}
          </p>

          <p
            style={{
              color: "#441DE0",
              fontWeight: "bolder",
              fontSize: 14,
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
export default InspecCardSmall;
