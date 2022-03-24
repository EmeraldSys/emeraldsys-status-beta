import * as React from "react"
import styled from "styled-components"
import useStatus from "./useStatus"
import useRefetch from "./useRefetch";

const StatusBar = styled.div`
  background-color: #000;
  color: white;
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
`;

const Stat = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

/* const Reload = styled.button`
  background-color: transparent;
  color: white;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  text-align: right;
  padding: 0;
`;

<Reload onClick={refetch}>{loading ? "reloading" : timeAgo}</Reload> */

export default ({ loading, error, subsystems, refetch }) => {
    //const [status] = useStatus(subsystems);
    //const [timeAgo] = useRefetch(refetch, loading);

    return (
        <React.Fragment>
            <StatusBar>
                <Stat>?</Stat>
            </StatusBar>
        </React.Fragment>
    )
};