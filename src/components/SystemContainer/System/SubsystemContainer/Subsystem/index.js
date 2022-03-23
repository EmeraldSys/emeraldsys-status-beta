import * as React from "react"
import styled from "styled-components"

const Subsystem = styled.div``;

export default ({ subsystem }) => {
    return (
        <Subsystem data-subsystem-id={subsystem.title}>
            {subsystem.body}
        </Subsystem>
    );
};