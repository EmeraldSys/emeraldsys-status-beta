import * as React from "react"
import styled from "styled-components"
import { useTheme } from "styled-components"
import useSubsystems from "./useSubsystems"
import useDidMount from "../../useDidMount"
import SubsystemContainer from "./SubsystemContainer"

const System = styled.div`
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    padding: 10px 10px 8px 30px;
    border-radius: 3px;
    justify-content: space-between;
    align-items: center;

    :not(:last-child) {
        margin-bottom: 8px;
    }
`;

const SystemTitle = styled.div`
    margin-bottom: 10px;
`;

export default ({ system }) => {
    const theme = useTheme();

    const [hasMounted] = useDidMount();
    const [
        subsystemsLoading,
        subsystemsError,
        subsystemsResults,
        subsystemsRefetch
    ] = useSubsystems(system.title);

    return (
        <System data-system-id={system.title} bgColor={theme.systemBg} textColor={theme.systemColor}>
            <SystemTitle>{system.body}</SystemTitle>
            <SubsystemContainer loading={subsystemsLoading} subsystems={subsystemsResults} />
        </System>
    );
};