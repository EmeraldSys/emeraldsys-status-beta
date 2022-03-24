import * as React from "react"
import useDidMount from "../../../useDidMount"
import Subsystem from "./Subsystem"
import Skeleton from "../../Skeleton"

export default ({ loading, subsystems }) => {
    const [hasMounted] = useDidMount();

    return !loading || hasMounted ? (
        subsystems?.length > 0 ? (
            subsystems?.slice(0).reverse().map(subsystem => (
                <React.Fragment>
                    <Subsystem key={subsystem.id} subsystem={subsystem} />
                </React.Fragment>
            ))
        ) : (
            <React.Fragment>
                <p>Subsystem</p>
            </React.Fragment>
        )
    ) : (
        <React.Fragment>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </React.Fragment>
    )
};