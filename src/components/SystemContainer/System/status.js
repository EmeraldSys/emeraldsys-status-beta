import * as React from "react"
import styled from "styled-components"

const Status = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    padding: 5px 12px;
    border-radius: 16px;
    font-size: 13px;
    transition: 0.3s;
`;

export default () => {
    return (
        <Status>Status</Status>
    );
};