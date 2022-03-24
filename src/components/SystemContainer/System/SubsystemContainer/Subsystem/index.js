import * as React from "react"
import styled from "styled-components"

const Subsystem = styled.div`
    position: relative;
    display: block;
    padding: 0px 10px 8px 30px;
    width: 100%;

    :not(:last-child) {
        margin-bottom: 2px;
    }
`;

export default ({ subsystem }) => {
    return (
        <Subsystem data-subsystem-id={subsystem.title}>
            {subsystem.body}
        </Subsystem>
    );
};