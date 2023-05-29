import {
  Modal,
  Box,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import styled from "styled-components";

function Report01Modal({ showModal, handleCloseModal, data, id }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 670,
    height: 430,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Section>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id={id}
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                src={`data:image/png;base64,${data.ImageOverview}`}
                alt={id}
                style={{ width: "285px", height: "150px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={`data:image/png;base64,${data.ImageLPR}`}
                alt={id}
                style={{ width: "285px", height: "150px" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} container style={{ padding: "10px" }}>
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "#EDECE6" }}>
                        เพลาที่
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>6</TableCell>
                      <TableCell>7</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "#F9F7EA" }}>
                        ระยะห่างเพลา(cm.)
                      </TableCell>

                      <TableCell>{data.space_w1}</TableCell>
                      <TableCell>{data.space_w2}</TableCell>
                      <TableCell>{data.space_w3}</TableCell>
                      <TableCell>{data.space_w4}</TableCell>
                      <TableCell>{data.space_w5}</TableCell>
                      <TableCell>{data.space_w6}</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "#E7E6E1" }}>
                        น้ำหนักเพลา(Kg.)
                      </TableCell>
                      <TableCell>{data.sum_w1}</TableCell>
                      <TableCell>{data.sum_w2}</TableCell>
                      <TableCell>{data.sum_w3}</TableCell>
                      <TableCell>{data.sum_w4}</TableCell>
                      <TableCell>{data.sum_w5}</TableCell>
                      <TableCell>{data.sum_w6}</TableCell>
                      <TableCell>{data.sum_w7}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Section>
  );
}
export default Report01Modal;

const Section = styled.section``;
