import * as React from "react"
import styled from "styled-components"

const Head = styled.div`
  background: #2b3034;
  padding: 150px 0 60px 0;
  position: relative;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    padding: 85px 0 30px 0;
    margin-bottom: 25px;
  }
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

export default () => {
    return (
        <Head className="siteHeader">
            <div className="siteHeader__container">
                <Title className="siteHeader__title"></Title>
            </div>
        </Head>
    );
};