import * as React from "react"
import Skeleton from "./Skeleton"
import useDidMount from "../useDidMount"
import System from "./System"

export default ({ loading, systems }) => {
    const [hasMounted] = useDidMount();

    return !loading || hasMounted ? (
        systems?.length > 0 ? (
            systems?.map(system => (
                <System key={system.id} system={system} />
            ))
        ) : (
            <p>?</p>
        )
    ) : (
        <React.Fragment>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </React.Fragment>
    )
};