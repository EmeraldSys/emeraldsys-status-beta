import * as React from "react"
import styled from "styled-components"
import useStatus from "./useStatus"
import SubsystemStatus from "./status"

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
    const [status, bgColor, color] = useStatus(subsystem.labels);

    return (
        <Subsystem data-subsystem-id={subsystem.title}>
            <SubsystemStatus bgColor={bgColor} color={color}>{status}</SubsystemStatus>
            {subsystem.body}
        </Subsystem>
    );
};