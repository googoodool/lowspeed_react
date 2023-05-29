import {
  Box,
  Container,
  Typography,
  Link,
  BottomNavigation,
} from "@mui/material";
import styled from "styled-components";
import PATLogo from "../assets/Logo_PAT2.png";

function Footers() {
  return (
    <Section className="footer">
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigation sx={{ backgroundColor: "#29335c", height: "40px" }}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="#ffffff" align="center">
              {"Copyright © "}
              <Link
                color="inherit"
                href="http://www.patinnovativesolution.com/"
              >
                <img
                  src={PATLogo}
                  alt=""
                  style={{
                    width: "17px",

                    marginRight: "3px",
                    marginTop: "10px",
                    marginBottom: "-4px",
                  }}
                />
                PAT INNOVATIVE SOLUTION
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Container>
        </BottomNavigation>
      </Box>
    </Section>
  );
}
export default Footers;

const Section = styled.section`
  .footer {
    background-color: var(--headerBarBackground);
  }
`;
