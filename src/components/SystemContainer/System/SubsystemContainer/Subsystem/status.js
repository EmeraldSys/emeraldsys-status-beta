import * as React from "react"
import styled from "styled-components"

/* background-color: rgba(0, 0, 0, 0.05); */
const Status = styled.div`
    display: inline-block;
    background-color: ${props => props.bgColor}
    color: ${props => props.color}
    padding: 5px 12px;
    border-radius: 16px;
    font-size: 13px;
    transition: 0.3s;
    float: right;
    margin-right: 30px;
`;

export default (props) => {
    return (
        <Status bgColor={props.bgColor} color={props.color}>
            {props.children}
        </Status>
    );
};