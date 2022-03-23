import * as React from "react"
import moment from "moment"

export default (refetch, updateTimeAgoDep) => {
    const [timeAgo, setTimeAgo] = React.useState(
        moment(
            new Date(localStorage.getItem("lastFetchSystems"))
        ).fromNow()
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (
                new Date(localStorage.getItem("lastFetchSystems")) <
                new Date() - 240000
            ) {
                refetch(() => {
                    setTimeAgo(
                        moment(
                            new Date(localStorage.getItem("lastFetchSystems"))
                        ).fromNow()
                    );
                });
            } else {
                setTimeAgo(
                    moment(
                        new Date(localStorage.getItem("lastFetchSystems"))
                    ).fromNow()
                );
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [refetch]);

    React.useEffect(() => {
        setTimeAgo(
            moment(
                new Date(localStorage.getItem("lastFetchSystems"))
            ).fromNow()
        );
    }, [updateTimeAgoDep]);

    return [timeAgo];
};