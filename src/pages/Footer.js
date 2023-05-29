import styled from "styled-components";

function Footer() {
  return <Footers>PAT INNOVATIVE SOLUTION</Footers>;
}
export default Footer;

const Footers = styled.footer`
  bottom: 0;
  position: absolute;
  height: 30px;
  width: 100%;
  background: var(--mainColor);
  color: var(--textColor);
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
