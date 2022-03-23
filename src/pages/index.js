import * as React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import useSystems from "../components/useSystems"
import Status from "../components/Status"
import Systems from "../components/SystemContainer"

const ContentContainer = styled.div`
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  background-color: white;
  padding: 16px;
`

export default () => {
  const [
    systemsLoading,
    systemsError,
    systemsResults,
    systemsRefetch
  ] = useSystems();

  return (
    <div className="main">
      <Header />
      <ContentContainer>
        <Status
          loading={systemsLoading}
          error={{
            hasError: systemsError,
            errors: { systemsError }
          }}
          systems={systemsResults}
          refetch={() => {
            systemsRefetch();
          }}
        />
        <Systems
          loading={systemsLoading}
          systems={systemsResults}
        />
      </ContentContainer>
    </div>
  )
};