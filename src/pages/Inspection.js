import styled from "@emotion/styled";
import InspecButtonMode from "../components/InspecButtonMode";
import InspecMainPage from "../components/InspecMainPage";
import InspecHighSpeed from "../components/InspecHighSpeed";

function Inspection() {
  return (
    <Section>
      <InspecButtonMode />
      <InspecMainPage />
      <InspecHighSpeed />
      <br />
      <br />
    </Section>
  );
}
export default Inspection;

const Section = styled.section``;
