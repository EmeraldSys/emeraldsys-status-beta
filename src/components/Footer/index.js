import * as React from "react"
import styled from "styled-components"
import { BiSun } from "@react-icons/all-files/bi/BiSun"
import { BiMoon } from "@react-icons/all-files/bi/BiMoon"

/* justify-content: space-between; */
const Footer = styled.div`
    position: relative;
    display: flex;
    margin-top: 16px;
    padding: 25px;
    flex-direction: row;
    bottom: 0;
    left: 0;
`;

const Info = styled.span``;

const ThemeButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: 20px;
    padding: 0;
    margin-left: 5px;
`;

export default ({ initial, switchTheme }) => {
    const [isDarkMode, setDarkMode] = React.useState(initial);

    return (
        <Footer>
            <div></div>
            <Info>Copyright &copy; 2018-2022 EmeraldSys Media Ltd</Info>
            <ThemeButton onClick={() => {
                switchTheme();
                setDarkMode(!isDarkMode);
            }}>
                {isDarkMode ? <BiMoon /> : <BiSun />}
            </ThemeButton>
        </Footer>
    );
};