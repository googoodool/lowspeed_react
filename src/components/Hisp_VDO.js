import styled from "styled-components";
function Hisp_VDO() {
  return (
    <Section>
      <div>
        <img
          src="http://182.53.196.135:8081/cam1"
          alt=""
          className="vdo_hisp"
        />
      </div>
    </Section>
  );
}
export default Hisp_VDO;

const Section = styled.section`
  .vdo_hisp {
    margin-top: 30px;
    height: 215px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
  }
`;
