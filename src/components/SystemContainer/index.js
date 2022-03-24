import * as React from "react"
import Skeleton from "./Skeleton"
import useDidMount from "../useDidMount"
import System from "./System"

export default ({ loading, systems }) => {
    const [hasMounted] = useDidMount();

    React.useEffect(() => {
        console.log(systems);
    }, [systems]);

    return !loading || hasMounted ? (
        systems?.length > 0 ? (
            systems?.slice(0).reverse().map(system => (
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