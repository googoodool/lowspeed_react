import styled from "styled-components";
function LSP_VDO() {
  return (
    <Section>
      <div>
        <img src="http://182.53.196.135:8082/cam2" alt="" className="vdo_lsp" />
      </div>
    </Section>
  );
}
export default LSP_VDO;

const Section = styled.section`
  .vdo_lsp {
    margin-top: 30px;
    height: 215px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
  }
`;
