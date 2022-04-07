import * as React from "react"
import styled from "styled-components"
import { useTheme } from "styled-components"
import logoImg from "../../images/emeraldsys_new_nobg.png"

const Head = styled.div`
  padding: 150px 0 60px 0;
  position: relative;
  margin-bottom: 50px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 85px 0 30px 0;
    margin-bottom: 25px;
  }
`;

const Container = styled.div`
  display: flex;
  align-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Title = styled.h1`
  font-size: 55px;
  letter-spacing: -0.05em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 15px;

  @media (max-width: 750px) {
    font-size: 6vw;
  }
`;

const Logo = styled.img`
  height: 128px;
  filter: ${props => props.isLight ? "invert(100%)" : "none"};
`;

/* <Title className="siteHeader__title"></Title> */
export default () => {
    const theme = useTheme();

    return (
        <Head className="siteHeader">
            <Container className="siteHeader__container">
                <Logo isLight={theme.textColor == "#000"} src={logoImg} />
            </Container>
        </Head>
    );
};