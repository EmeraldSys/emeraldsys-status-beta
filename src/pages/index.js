import * as React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import useSystems from "../components/useSystems"
import useSubsystemsBatch from "../components/SystemContainer/System/useSubsystemsBatch"
import Status from "../components/Status"
import Systems from "../components/SystemContainer"

const ContentContainer = styled.div`
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  background-color: white;
  padding: 16px;
`

export default () => {
  const [subsystems, setSubsystems] = React.useState();
  const [subsystemsError, setSubsystemsError] = React.useState();
  const [subsystemsLoading, setSubsystemsLoading] = React.useState(true);

  const [
    systemsLoading,
    systemsError,
    systemsResults,
    systemsRefetch
  ] = useSystems();

  React.useEffect(() => {
    if (systemsResults.length > 0) {
      fetchSubsystems(setSubsystemsLoading, setSubsystemsError, systemsResults)
        .then(data => {
          setSubsystems(data);
        });
    }
  }, [systemsResults]);

  return (
    <div className="main">
      <Header />
      <ContentContainer>
        <Status
          loading={subsystemsLoading}
          error={{
            hasError: subsystemsError,
            errors: { subsystemsError }
          }}
          subsystems={subsystems}
        />
        <Systems
          loading={systemsLoading}
          systems={systemsResults}
        />
      </ContentContainer>
    </div>
  )
};

const fetchSubsystems = async (setLoading, setError, systems) => {
  setLoading(true);
  let temp = new Object();
  for (var i = 0; i < systems.length; i++) {
    const system = systems[i];
    const response = await fetch(
      `https://api.github.com/repos/EmeraldSys/emeraldsys-status-beta/issues?state=all&labels=subsystem,${system.title}`,
      {
        cache: "no-cache"
      }
    );
    const json = await response.json();
    setError();
    temp[system.title] = json;

    /* .then(response => {
        return response.json();
    }).then(data => {
        setError();
        temp[system.title] = data;
    }).catch(error => {
        setError(error.toString());
        setLoading(false);
        throw new Error(error.toString());
    }); */
  }
  setLoading(false);
  return temp;
};