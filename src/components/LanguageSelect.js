import styled from "styled-components";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

function LanguageSelect() {
  const [langThai, setLangThai] = useState(false);

  const changeToThai = () => {
    if (langThai === false) {
      setLangThai(true);
    }
    console.log(langThai);
  };

  const changeToEng = () => {
    if (langThai === true) {
      setLangThai(false);
    }
    console.log(langThai);
  };

  return (
    <Section>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
        size="small"
        pl={3}
      >
        <Button onClick={changeToThai}>TH</Button>
        <Button onClick={changeToEng}>EN</Button>
      </ButtonGroup>
    </Section>
  );
}
export default LanguageSelect;

const Section = styled.section``;
